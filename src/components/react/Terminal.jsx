import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
    "> inicializando sistema...",
    "> conectando a base de datos...",
    "> optimizando queries...",
    "> deploy exitoso!"
];

export default function Terminal() {
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLineIndex((prev) => (prev < lines.length - 1 ? prev + 1 : 0));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full bg-black/40 p-4 font-mono text-xs md:text-sm text-green-400 overflow-hidden flex flex-col pt-10">
            <div className="flex gap-2 mb-4 absolute top-4 left-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            {lines.slice(0, lineIndex + 1).map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-1"
                >
                    {line}
                </motion.div>
            ))}
            <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-green-400 inline-block mt-1"
            />
        </div>
    );
}