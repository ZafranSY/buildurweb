"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export function ParallaxSection({ children, speed = 0.3, className }: ParallaxSectionProps) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <motion.div
            style={{ y }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}