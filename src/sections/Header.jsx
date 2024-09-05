import useLocalizedContent from '@/hooks/useLocalizedContent';
import React from 'react';
import SVG from "../components/SVG"
import { fondoHabitaciones } from '@/media/media';

export default function Header({ info }) {
    const { id, title, subtitle } = info

    return (
        <section id={id} className="relative pt-32 pb-14 sm:py-32 [clip-path:inset(-9999px_0_0_0)]">
            <div className="absolute inset-0 z-0">
                <SVG svg={fondoHabitaciones} className="w-[200vw] sm:h-auto sm:w-custom absolute top-[3vh] sm:-top-[10vh] left-1/2 transform -translate-x-1/2 -z-10" />
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-4xl font-cutive text-celeste mb-4">
                    {title}
                </h2>
                <p className="text-hab max-w-xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}