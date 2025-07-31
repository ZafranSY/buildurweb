"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
}

export function ParallaxSection({ children, speed = 0.3 }: ParallaxSectionProps) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

    return (
        <motion.div
            style={{ y }}
        >
            {children}
        </motion.div>
    );
}