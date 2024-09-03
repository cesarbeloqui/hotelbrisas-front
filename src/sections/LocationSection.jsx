import React from 'react';
import { MapPin } from 'lucide-react';
import LazyImage from '@/components/LazyImage/LazyImage';
import localizacion from "@/assets/localizacion.png"
import iconLocalizacion from "@/assets/iconLocalizacion.png"
import iconLocalizacionChico from "@/assets/iconLocalizacionChico.png"

export default function LocationSection() {
    return (
        <div className="relative w-full mx-auto">
            <div className='relative'>

                <LazyImage
                    src={localizacion}
                    alt="Vista aérea de un hotel cerca de la playa"
                    className="w-full h-auto"
                />
            </div>
            <div className='flex sm:flex-row flex-col items-center ml-4 mt-4 bg-blanco py-4 justify-start   sm:justify-around relative'>

                <div className="flex items-start relative mx-4">
                    <div className="absolute -top-12 bg-celeste text-blanco py-2 px-5 rounded-lg text-sm font-semibold">
                        A 100 M DE LA PLAYA
                    </div>
                    <LazyImage src={iconLocalizacion} className="text-celeste mr-2 flex-shrink-0 h-16" />
                    <div>
                        <h2 className="font-cutive text-xl font-medium text-celeste">Ubicación</h2>
                        <p className="text-celeste sm:w-[24vw]">
                            Santa Teresa s/n Esquina Laguna Merín, 27004 La Pedrera, Uruguay
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex sm:justify-between text-sm text-gray-500">
                    <span className='mr-3 flex'><LazyImage src={iconLocalizacionChico} className="h-4 mr-1 mt-[0.1rem]" /><span className='mr-1 text-celeste font-bold'>
                        Cabo Polonio:
                    </span>
                        39 km</span> |
                    <span className='ml-3 mr-1 text-celeste font-bold flex'><LazyImage src={iconLocalizacionChico} className="h-4 mr-1 mt-[0.1rem]" />José Ignacio:</span> 87 km
                </div>
            </div>
        </div>
    );
}