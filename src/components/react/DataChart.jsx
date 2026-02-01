import { motion } from "framer-motion";

export default function DataChart() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <svg
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                className="w-full h-full"
            >
                {/* Path de la línea principal */}
                <motion.path
                    d="M 0 40 Q 15 10, 30 30 T 60 20 T 90 45 L 100 45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                />

                {/* Círculo que sigue la línea */}
                <motion.circle
                    cx="0"
                    cy="0"
                    r="3"
                    fill="#818cf8"
                    animate={{
                        offsetDistance: ["0%", "100%"]
                    }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                >
                    <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 0 40 Q 15 10, 30 30 T 60 20 T 90 45 L 100 45"
                    />
                </motion.circle>

                {/* Definición del gradiente para la línea */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}