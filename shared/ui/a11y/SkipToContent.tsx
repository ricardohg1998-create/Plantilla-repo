import { cn } from "../../lib/utils";
import { buttonVariants } from "../button";

export const SkipToContent = () => {
    return (
        <a
            href="#main-content"
            className={cn(
                buttonVariants({ variant: "default" }),
                "fixed left-4 top-4 z-[100] -translate-y-[150%] transition-transform focus:translate-y-0"
            )}
        >
            Skip to content
        </a>
    );
};
