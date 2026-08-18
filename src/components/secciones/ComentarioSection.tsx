"use client";

import testimonials from "@/data/comentariosData";
import TestimonialCard from "../ui/TestimonialCard";
import { philosopher } from "@/libs/fonts";
import { useEffect, useRef, useState } from "react";

export function ComentarioSection() {
    const total = testimonials.length;
    const [itemsPerView, setItemsPerView] = useState(1);
    const cloneCount = itemsPerView;

    // Array extendido: [clones del final] + [items reales] + [clones del inicio]
    const extended = [
        ...testimonials.slice(total - cloneCount, total),
        ...testimonials,
        ...testimonials.slice(0, cloneCount),
    ];

    const [current, setCurrent] = useState(cloneCount); // arranca en el primer item real
    const [paused, setPaused] = useState(false);
    const [withTransition, setWithTransition] = useState(true);
    const resetTimeout = useRef<NodeJS.Timeout | null>(null);

    // Sincroniza itemsPerView con los breakpoints de Tailwind
    useEffect(() => {
        const computeItems = () => {
            const w = window.innerWidth;
            if (w >= 1024) return 3; // lg:w-1/3
            if (w >= 640) return 2;  // sm:w-1/2
            return 1;                // w-full
        };

        const onResize = () => {
            const items = computeItems();
            setItemsPerView(items);
            setCurrent(items); // reinicia en el primer item real con el nuevo tamaño
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const next = () => {
        setWithTransition(true);
        setCurrent((prev) => prev + 1);
    };

    const previous = () => {
        setWithTransition(true);
        setCurrent((prev) => prev - 1);
    };

    // Detecta cuando entramos en la zona clonada y "teletransporta" sin animación
    useEffect(() => {
        if (resetTimeout.current) clearTimeout(resetTimeout.current);

        const isInRightClone = current >= cloneCount + total;
        const isInLeftClone = current < cloneCount;

        if (isInRightClone || isInLeftClone) {
            resetTimeout.current = setTimeout(() => {
                setWithTransition(false);
                setCurrent((prev) =>
                    isInRightClone ? prev - total : prev + total
                );
            }, 500); // debe coincidir con duration-500
        }

        return () => {
            if (resetTimeout.current) clearTimeout(resetTimeout.current);
        };
    }, [current, total, cloneCount]);

    // Reactiva la transición en el siguiente frame después del salto instantáneo
    useEffect(() => {
        if (!withTransition) {
            const id = requestAnimationFrame(() => setWithTransition(true));
            return () => cancelAnimationFrame(id);
        }
    }, [withTransition]);

    // Autoplay continuo
    useEffect(() => {
        if (paused || total <= itemsPerView) return;

        const interval = setInterval(() => {
            next();
        }, 4000);

        return () => clearInterval(interval);
    }, [paused, total, itemsPerView]);

    const realIndex = ((current - cloneCount) % total + total) % total;

    return (
        <section
            className="relative w-full lg:w-[70%] mx-auto overflow-hidden my-40"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Título */}
            <div className="mb-10 flex flex-col items-center">
                <div className="flex w-full flex-col items-center px-5 md:w-[60%]">
                    <h3
                        className={`${philosopher.className} mb-5 text-center text-3xl font-bold text-red-600 antialiased md:text-5xl`}
                    >
                        Opiniones
                    </h3>

                    <p className="mb-10 text-center text-gray-600">
                        Ellas cuentan su experiencia. Descubre lo que nuestras clientas
                        dicen sobre su experiencia y los resultados de nuestro trabajo.
                    </p>
                </div>
            </div>

            {/* Carrusel */}
            <div className="overflow-hidden">
                <div
                    className={`flex ${withTransition ? "transition-transform duration-500 ease-in-out" : ""}`}
                    style={{
                        transform: `translateX(-${current * (100 / itemsPerView)}%)`,
                    }}
                >
                    {extended.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3 flex justify-center"
                        >
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón anterior */}
            <button
                type="button"
                onClick={previous}
                aria-label="Comentario anterior"
                className="absolute left-2 top-[60%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100"
            >
                ←
            </button>

            {/* Botón siguiente */}
            <button
                type="button"
                onClick={next}
                aria-label="Siguiente comentario"
                className="absolute right-2 top-[60%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100"
            >
                →
            </button>

            {/* Indicadores */}
            <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((testimonial, index) => (
                    <button
                        key={testimonial.id}
                        type="button"
                        onClick={() => {
                            setWithTransition(true);
                            setCurrent(cloneCount + index);
                        }}
                        aria-label={`Ir al comentario ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all ${realIndex === index
                            ? "w-6 bg-red-600"
                            : "w-2.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}