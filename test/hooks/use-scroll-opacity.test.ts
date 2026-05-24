import React from "react";
import { renderHook } from "@testing-library/react";
import { useScrollOpacity } from "@/hooks/use-scroll-opacity";

describe("useScrollOpacity", () => {
    let addEventListenerSpy: jest.SpyInstance;
    let removeEventListenerSpy: jest.SpyInstance;
    let useSyncExternalStoreSpy: jest.SpyInstance;

    afterEach(() => {
        useSyncExternalStoreSpy?.mockRestore();
        addEventListenerSpy?.mockRestore();
        removeEventListenerSpy?.mockRestore();
    });

    beforeEach(() => {
        addEventListenerSpy = jest.spyOn(window, "addEventListener");
        removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
        Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
    });

    it("returns 0 when scrollY is 0", () => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
        const { result } = renderHook(() => useScrollOpacity());
        expect(result.current).toBe(0);
    });

    it("returns 1 when scrollY equals the default threshold", () => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 64 });
        const { result } = renderHook(() => useScrollOpacity());
        expect(result.current).toBe(1);
    });

    it("caps opacity at 1 when scrollY exceeds the threshold", () => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 128 });
        const { result } = renderHook(() => useScrollOpacity());
        expect(result.current).toBe(1);
    });

    it("uses a custom threshold when provided", () => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 50 });
        const { result } = renderHook(() => useScrollOpacity(100));
        expect(result.current).toBe(0.5);
    });

    it("subscribes to scroll events", () => {
        renderHook(() => useScrollOpacity());
        expect(addEventListenerSpy).toHaveBeenCalledWith("scroll", expect.any(Function), {
            passive: true,
        });
    });

    it("unsubscribes from scroll events on unmount", () => {
        const { unmount } = renderHook(() => useScrollOpacity());
        const scrollCallback = addEventListenerSpy.mock.calls.find(
            (call) => call[0] === "scroll",
        )?.[1];
        unmount();
        expect(removeEventListenerSpy).toHaveBeenCalledWith("scroll", scrollCallback);
    });

    it("returns 0 from getServerSnapshot (SSR)", () => {
        const actual = jest.requireActual<typeof React>("react");
        let serverSnapshot: number | undefined;

        useSyncExternalStoreSpy = jest
            .spyOn(actual, "useSyncExternalStore")
            .mockImplementation((_subscribe, _getSnapshot, getServerSnapshot) => {
                serverSnapshot = getServerSnapshot?.() as number;
                return 0;
            });

        const { result } = renderHook(() => useScrollOpacity());
        expect(serverSnapshot).toBe(0);
        expect(result.current).toBe(0);
    });
});
