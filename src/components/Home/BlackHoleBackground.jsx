import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript,
    SiHtml5, SiCss3, SiMongodb, SiPostgresql, SiDocker, SiGit,
    SiFirebase, SiTailwindcss, SiNextdotjs
} from 'react-icons/si';
import { FaJava, FaRust } from 'react-icons/fa';

const Icons = [
    SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript,
    SiHtml5, SiCss3, SiMongodb, SiPostgresql, SiDocker, SiGit,
    SiFirebase, SiTailwindcss, SiNextdotjs,
    FaJava, FaRust
];

const BlackHoleBackground = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Initial size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Black hole position (right side on desktop, center top on mobile)
    const blackHolePos = useMemo(() => {
        if (windowSize.width === 0) return { x: 0, y: 0, radius: 0, isHidden: true }; // Initial state

        // Hide on mobile and tablet
        if (windowSize.width > 0 && windowSize.width < 1024) {
            return { x: 0, y: 0, radius: 0, isHidden: true }; // Return hidden state
        }

        const isMobile = windowSize.width < 1024; // Changed from 768 to 1024
        return {
            x: isMobile ? windowSize.width / 2 : windowSize.width * 0.85 - 300,
            y: isMobile ? windowSize.height * 0.2 : windowSize.height / 2 - 20,
            radius: isMobile ? 26 : 51, // Event horizon radius (reduced by another 20%)
            isHidden: false
        };
    }, [windowSize]);

    if (blackHolePos.isHidden) {
        return null; // Don't render anything if hidden
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Black Hole Container */}
            <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: blackHolePos.x,
                    top: blackHolePos.y,
                    width: blackHolePos.radius * 10,
                    height: blackHolePos.radius * 10
                }}
            >
                {/* Outer Glow / Nebula Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-purple-900/20 blur-3xl animate-pulse-slow"></div>

                {/* Main Accretion Disk (Tilted & Rotating) */}
                <div className="absolute top-1/2 left-1/2 w-full h-1/3 -translate-x-1/2 -translate-y-1/2 transform rotate-12 scale-y-[0.3]">
                    {/* Spinning Container for Texture */}
                    <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                        {/* Back part of the disk (behind the hole) */}
                        <div className="absolute inset-0 rounded-[100%] bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 blur-xl opacity-50"></div>

                        {/* Bright Core Ring */}
                        <div className="absolute inset-[15%] rounded-[100%] border-[20px] border-purple-200/40 blur-md shadow-[0_0_30px_rgba(168,85,247,0.4)]"></div>

                        {/* Streaks/Energy */}
                        <div className="absolute inset-[-20%] rounded-[100%] border border-fuchsia-700/20 blur-sm transform rotate-[20deg] animate-[spin_4s_linear_infinite]"></div>
                        <div className="absolute inset-[-10%] rounded-[100%] border border-pink-700/20 blur-sm transform -rotate-[10deg] animate-[spin_7s_linear_infinite_reverse]"></div>
                    </div>
                </div>

                {/* The Black Hole (Void) */}
                <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full shadow-[0_0_40px_rgba(236,72,153,0.4)] z-20">
                    {/* Inner Photon Ring */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-300 via-pink-500/50 to-purple-900 blur-sm opacity-60"></div>
                    <div className="absolute inset-0 bg-black rounded-full z-10"></div>
                </div>

                {/* Front part of disk (overlay effect for depth) */}
                <div className="absolute top-1/2 left-1/2 w-[120%] h-[40%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-screen">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/20 to-transparent transform rotate-12 blur-xl"></div>
                </div>
            </div>

            {/* Floating Icons */}
            {windowSize.width > 0 && <IconManager blackHolePos={blackHolePos} windowSize={windowSize} />}
        </div>
    );
};

const IconManager = ({ blackHolePos, windowSize }) => {
    // Generate initial icons
    const initialIcons = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            Icon: Icons[i % Icons.length],
            initialX: Math.random() * windowSize.width, // Random spawn in all directions
            initialY: Math.random() * windowSize.height,
            delay: Math.random() * 5, // Slower spawn
            duration: 10 + Math.random() * 10, // Slower movement
            size: 20 + Math.random() * 20
        }));
    }, [windowSize]);

    return (
        <>
            {initialIcons.map((icon) => (
                <FloatingIcon
                    key={icon.id}
                    iconData={icon}
                    blackHolePos={blackHolePos}
                />
            ))}
        </>
    );
};

const FloatingIcon = ({ iconData, blackHolePos }) => {
    const { Icon, initialX, initialY, duration, size, delay } = iconData;

    return (
        <motion.div
            initial={{
                x: initialX,
                y: initialY,
                opacity: 0,
                scale: 1,
                rotate: 0
            }}
            animate={{
                x: [initialX, blackHolePos.x],
                y: [initialY, blackHolePos.y],
                opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out near hole
                scale: [1, 1, 0.1], // Shrink as it enters hole
                rotate: [0, 720] // Spin faster as it enters
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeIn", // Accelerate towards the hole
                times: [0, 0.1, 0.8, 1] // Timing control for keyframes
            }}
            className="absolute text-slate-400/50"
            style={{ fontSize: size }}
        >
            <Icon />
        </motion.div>
    );
};

export default BlackHoleBackground;

/* Fixed bug related to state update */