import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const headingVariants = cva(
    "scroll-m-20 tracking-tight font-bold",
    {
        variants: {
            level: {
                h1: "text-4xl font-extrabold lg:text-5xl leading-tight",
                h2: "text-3xl font-semibold transition-colors first:mt-0 leading-tight",
                h3: "text-2xl font-semibold leading-snug",
                h4: "text-xl font-semibold leading-snug",
            },
            gradient: {
                true: "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400",
            }
        },
        defaultVariants: {
            level: "h2",
        },
    }
);

interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = "h2", gradient, as, ...props }, ref) => {
        const Component = as || level || "h2";
        return (
            <Component
                ref={ref}
                className={cn(headingVariants({ level, gradient, className }))}
                {...props}
            />
        );
    }
);
Heading.displayName = "Heading";

const Text = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement> & { variant?: "default" | "lead" | "muted" | "small" }
>(({ className, variant = "default", ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn(
                "leading-7",
                {
                    "text-lg font-semibold text-muted-foreground": variant === "lead",
                    "text-sm text-muted-foreground": variant === "muted",
                    "text-sm font-medium leading-none": variant === "small",
                    "[&:not(:first-child)]:mt-6": variant === "default",
                },
                className
            )}
            {...props}
        />
    );
});
Text.displayName = "Text";

export { Heading, Text, headingVariants };
