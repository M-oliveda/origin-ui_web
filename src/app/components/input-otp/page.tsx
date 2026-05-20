"use client";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/app/components/code-block";
import { Check, X } from "lucide-react";

export default function InputOTPPage() {
    return (
        <div className="max-w-4xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">InputOTP</h1>
                <p className="text-muted-foreground text-sm">
                    A one-time password input with individual character slots. Each slot accepts a
                    single character and auto-advances focus. Supports configurable length, grouping
                    with separators, and an animated caret.
                </p>
                <Separator />
            </div>

            {/* Anatomy */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Anatomy</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">
                    <code className="text-xs">{"<InputOTP>"}</code> wraps one or more{" "}
                    <code className="text-xs">{"<InputOTPGroup>"}</code> containers, each holding{" "}
                    <code className="text-xs">{"<InputOTPSlot>"}</code> elements indexed by
                    position. An optional <code className="text-xs">{"<InputOTPSeparator>"}</code>{" "}
                    provides a visual break between groups.
                </p>
                <div className="border-border bg-muted/30 rounded-lg border p-6">
                    <div className="flex flex-col items-center gap-4">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                        <div className="text-muted-foreground flex items-center gap-4 text-[10px]">
                            <span>maxLength=6</span>
                            <span>auto-advance focus</span>
                            <span>animated caret</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Variations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Variations</h3>
                <Separator />
                <div className="space-y-6">
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            4-digit code
                        </p>
                        <InputOTP maxLength={4}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    <div className="border-border rounded-lg border p-5">
                        <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
                            6-digit with separator
                        </p>
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                </div>
            </div>

            {/* Design Guidelines */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Design Guidelines</h3>
                <Separator />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border-2 border-green-500/30 bg-green-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <Check className="size-4 text-green-600 dark:text-green-400" />
                            <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                                Do
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Use separators for readability.
                                </strong>{" "}
                                Breaking 6 digits into 3+3 makes codes easier to read and type.
                            </li>
                            <li>
                                <strong className="text-foreground">Support paste.</strong> The
                                component handles paste automatically &mdash; ensure your code
                                length matches the expected input.
                            </li>
                            <li>
                                <strong className="text-foreground">Provide clear context.</strong>{" "}
                                Label the input with text explaining where the code came from
                                (email, SMS, authenticator).
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-lg border-2 border-red-500/30 bg-red-500/5 p-5">
                        <div className="mb-4 flex items-center gap-2">
                            <X className="size-4 text-red-600 dark:text-red-400" />
                            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                                Don&apos;t
                            </p>
                        </div>
                        <ul className="text-muted-foreground space-y-3 text-sm">
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t use for regular text input.
                                </strong>{" "}
                                OTP inputs are for short numeric/alphanumeric codes only.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t forget validation feedback.
                                </strong>{" "}
                                Use aria-invalid on the container to show when a code is incorrect.
                            </li>
                            <li>
                                <strong className="text-foreground">
                                    Don&apos;t make codes too long.
                                </strong>{" "}
                                Beyond 8 characters, consider a standard text input instead.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Developer Reference */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Developer Reference</h3>
                <Separator />
                <div className="border-border rounded-lg border p-5">
                    <h4 className="mb-2 text-sm font-medium">Accessibility</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>
                            Focus auto-advances to the next slot on input and moves back on delete.
                        </li>
                        <li>Paste support fills all slots at once from clipboard content.</li>
                        <li>The active slot shows an animated caret for clear focus indication.</li>
                        <li>
                            <code className="text-xs">aria-invalid</code> on the root triggers
                            destructive ring styling on all slots.
                        </li>
                        <li>
                            Separator uses{" "}
                            <code className="text-xs">role=&quot;separator&quot;</code> for
                            assistive technologies.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Usage</h3>
                <Separator />
                <CodeBlock
                    code={`import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator
} from "@/components/ui/input-otp"

// 6-digit with separator
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// 4-digit without separator
<InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>

// Controlled
const [value, setValue] = useState("")
<InputOTP maxLength={6} value={value} onChange={setValue}>
  ...
</InputOTP>`}
                />
            </div>
        </div>
    );
}
