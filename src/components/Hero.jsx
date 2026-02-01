import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">

            {/* Badge de "Disponible" */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
            >
                <span className="bg-green-500/10 text-green-300 border border-green-500/20 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Disponible para trabajar
                </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 pb-2"
            >
                Hola, soy Leo
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 text-xl text-slate-400 max-w-2xl"
            >
                Desarrollador Web enfocado en crear experiencias únicas.
                Especializado en <strong className="text-yellow-200">Rendimiento</strong> y <strong className="text-yellow-200">Diseño UI</strong>.
            </motion.p>

            {/* Botones */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 flex gap-4"
            >
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-slate-200 transition">
                    Contactar
                </button>
                <button className="border border-slate-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/5 transition">
                    Ver Proyectos
                </button>
            </motion.div>

        </section>
    );
}