"use client";

import { useState } from "react";
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSeparator,
    useComboboxAnchor,
} from "@/components/ui/combobox";

interface IFramework {
    readonly value: string;
    readonly label: string;
}

interface ILanguage extends IFramework {
    readonly color: string;
}

const FRAMEWORKS: IFramework[] = [
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt", label: "Nuxt" },
    { value: "gatsby", label: "Gatsby" },
];

const LANGUAGES: ILanguage[] = [
    { value: "typescript", label: "TypeScript", color: "bg-blue-500" },
    { value: "python", label: "Python", color: "bg-yellow-400" },
    { value: "rust", label: "Rust", color: "bg-orange-600" },
    { value: "go", label: "Go", color: "bg-cyan-500" },
    { value: "swift", label: "Swift", color: "bg-red-500" },
    { value: "kotlin", label: "Kotlin", color: "bg-purple-600" },
];

const FRONTEND_LIBS: IFramework[] = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular" },
];

const BACKEND_LIBS: IFramework[] = [
    { value: "express", label: "Express" },
    { value: "fastify", label: "Fastify" },
    { value: "hono", label: "Hono" },
    { value: "nestjs", label: "NestJS" },
];

export function BasicExample() {
    return (
        <Combobox>
            <ComboboxInput placeholder="Search frameworks..." showTrigger className="w-full" />
            <ComboboxContent>
                <ComboboxList>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    {FRAMEWORKS.map((f) => (
                        <ComboboxItem key={f.value} value={f.value}>
                            {f.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function WithClearExample() {
    return (
        <Combobox>
            <ComboboxInput
                placeholder="Search frameworks..."
                showTrigger
                showClear
                className="w-full"
            />
            <ComboboxContent>
                <ComboboxList>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    {FRAMEWORKS.map((f) => (
                        <ComboboxItem key={f.value} value={f.value}>
                            {f.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function WithGroupsExample() {
    return (
        <Combobox>
            <ComboboxInput placeholder="Search libraries..." showTrigger className="w-full" />
            <ComboboxContent>
                <ComboboxList>
                    <ComboboxEmpty>No results found.</ComboboxEmpty>
                    <ComboboxGroup>
                        <ComboboxLabel>Frontend</ComboboxLabel>
                        {FRONTEND_LIBS.map((f) => (
                            <ComboboxItem key={f.value} value={f.value}>
                                {f.label}
                            </ComboboxItem>
                        ))}
                    </ComboboxGroup>
                    <ComboboxSeparator />
                    <ComboboxGroup>
                        <ComboboxLabel>Backend</ComboboxLabel>
                        {BACKEND_LIBS.map((f) => (
                            <ComboboxItem key={f.value} value={f.value}>
                                {f.label}
                            </ComboboxItem>
                        ))}
                    </ComboboxGroup>
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function CustomItemsExample() {
    return (
        <Combobox>
            <ComboboxInput placeholder="Search languages..." showTrigger className="w-full" />
            <ComboboxContent>
                <ComboboxList>
                    <ComboboxEmpty>No languages found.</ComboboxEmpty>
                    {LANGUAGES.map((lang) => (
                        <ComboboxItem key={lang.value} value={lang.value}>
                            <span
                                className={`size-2 rounded-full ${lang.color}`}
                                aria-hidden="true"
                            />
                            {lang.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function MultipleExample() {
    const [selected, setSelected] = useState<string[]>([]);
    const anchor = useComboboxAnchor();

    return (
        <Combobox multiple value={selected} onValueChange={(val) => setSelected(val)}>
            <ComboboxChips ref={anchor}>
                {selected.map((val) => {
                    const framework = FRAMEWORKS.find((f) => f.value === val);
                    return <ComboboxChip key={val}>{framework?.label ?? val}</ComboboxChip>;
                })}
                <ComboboxChipsInput placeholder="Search frameworks..." />
            </ComboboxChips>
            <ComboboxContent anchor={anchor}>
                <ComboboxList>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    {FRAMEWORKS.map((f) => (
                        <ComboboxItem key={f.value} value={f.value}>
                            {f.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function DisabledExample() {
    return (
        <Combobox>
            <ComboboxInput
                placeholder="Search frameworks..."
                showTrigger
                disabled
                className="w-full"
            />
            <ComboboxContent>
                <ComboboxList>
                    {FRAMEWORKS.map((f) => (
                        <ComboboxItem key={f.value} value={f.value}>
                            {f.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function InvalidExample() {
    return (
        <Combobox>
            <ComboboxInput
                placeholder="Search frameworks..."
                showTrigger
                aria-invalid
                className="w-full"
            />
            <ComboboxContent>
                <ComboboxList>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    {FRAMEWORKS.map((f) => (
                        <ComboboxItem key={f.value} value={f.value}>
                            {f.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}

export function AutoHighlightExample() {
    return (
        <Combobox autoHighlight>
            <ComboboxInput
                placeholder="Start typing to auto-highlight..."
                showTrigger
                className="w-full"
            />
            <ComboboxContent>
                <ComboboxList>
                    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                    {FRAMEWORKS.map((f) => (
                        <ComboboxItem key={f.value} value={f.value}>
                            {f.label}
                        </ComboboxItem>
                    ))}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}
