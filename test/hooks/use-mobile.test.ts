import React from "react";
import { renderHook } from "@testing-library/react";
import { useIsMobile } from "@/hooks/use-mobile";

describe("useIsMobile", () => {
    let mockMql: { addEventListener: jest.Mock; removeEventListener: jest.Mock };
    let useSyncExternalStoreSpy: jest.SpyInstance;

    afterEach(() => {
        useSyncExternalStoreSpy?.mockRestore();
    });

    beforeEach(() => {
        mockMql = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockReturnValue(mockMql),
        });
    });

    it("returns false when window.innerWidth is >= 768", () => {
        Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(false);
    });

    it("returns true when window.innerWidth is < 768", () => {
        Object.defineProperty(window, "innerWidth", { writable: true, value: 375 });
        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(true);
    });

    it("returns false at exactly 768", () => {
        Object.defineProperty(window, "innerWidth", { writable: true, value: 768 });
        const { result } = renderHook(() => useIsMobile());
        expect(result.current).toBe(false);
    });

    it("calls window.matchMedia with the correct breakpoint query", () => {
        Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
        renderHook(() => useIsMobile());
        expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 767px)");
    });

    it("subscribes to matchMedia change events", () => {
        Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
        renderHook(() => useIsMobile());
        expect(mockMql.addEventListener).toHaveBeenCalledWith("change", expect.any(Function));
    });

    it("unsubscribes from matchMedia on unmount", () => {
        Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
        const { unmount } = renderHook(() => useIsMobile());
        const addedCallback = mockMql.addEventListener.mock.calls[0][1];
        unmount();
        expect(mockMql.removeEventListener).toHaveBeenCalledWith("change", addedCallback);
    });

    it("returns false from getServerSnapshot (SSR)", () => {
        const actual = jest.requireActual<typeof React>("react");
        let serverSnapshot: boolean | undefined;

        useSyncExternalStoreSpy = jest
            .spyOn(actual, "useSyncExternalStore")
            .mockImplementation((_subscribe, _getSnapshot, getServerSnapshot) => {
                serverSnapshot = getServerSnapshot?.() === true;
                return false;
            });

        const { result } = renderHook(() => useIsMobile());
        expect(serverSnapshot).toBe(false);
        expect(result.current).toBe(false);
    });
});
