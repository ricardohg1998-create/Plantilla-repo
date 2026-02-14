"use client";

import * as React from "react";
import { motion, HTMLMotionProps, MotionProps } from "framer-motion";

type MotionPrimitiveProps = HTMLMotionProps<"div"> & MotionProps & {
    as?: React.ElementType;
    delay?: number;
};

export const Motion = ({
    children,
    className,
    as: Component = "div",
    initial = { opacity: 0, y: 20 },
    animate = { opacity: 1, y: 0 },
    transition = { duration: 0.5 },
    delay = 0,
    ...props
}: MotionPrimitiveProps) => {

    // We cast to any because framer-motion makes dynamic components tricky with TS
    const MotionComponent = motion(Component as any);

    return (
        <MotionComponent
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay }}
            className={className}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};
