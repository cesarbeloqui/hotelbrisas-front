
import useLocalizedContent from '@/hooks/useLocalizedContent';
import React from 'react';
import SVG from "../components/SVG"
import { fondoHabitaciones } from '@/media/media';

export default function HabitacionesYSuites() {
    const localizedContent = useLocalizedContent();
    const { habitaciones } = localizedContent
    const { title, subtitle } = habitaciones
    return (
        <section className="relative py-32 ">
            <div className="absolute -top-[10vh] inset-0 z-0">
                <SVG svg={fondoHabitaciones} className="h-auto w-[100vw]" />
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-4xl font-cutive  text-celeste mb-4">
                    {title}
                </h2>
                <p className="text-hab max-w-xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}