import LazyImage from '@/components/LazyImage/LazyImage';
import localizacion from "@/assets/localizacion/localizacion-1.webp"
import iconLocalizacion from "@/assets/iconLocalizacion.png"
import iconLocalizacionChico from "@/assets/iconLocalizacionChico.png"
import useLocalizedContent from '@/hooks/useLocalizedContent';

export default function LocationSection() {
    const localizedContent = useLocalizedContent();
    const { ubicacion } = localizedContent
    return (
        <section id="ubicacion" className="relative w-full h-[86vh] mx-auto">
            <div className='flex relative h-[70vh] w-full'>
                <LazyImage
                    src={localizacion}
                    alt="Vista aérea de un hotel cerca de la playa"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className='flex sm:flex-row flex-col ml-4 mt-4 bg-blanco py-4 justify-start items-start  sm:justify-around relative h-[16vh]'>
                <div className="flex items-start relative mx-4">
                    <div className="absolute -top-20 bg-celeste text-blanco py-2 px-5 rounded-lg text-sm font-semibold">
                        {ubicacion.lead}
                    </div>
                    <a href="https://maps.app.goo.gl/S8obcYR8EDzhWeUR6" target="_blank" rel="noopener noreferrer" className='inline-flex'>
                        <LazyImage src={iconLocalizacion} className="text-celeste mr-2 flex-shrink-0 h-16" />
                        <div>
                            <h2 className="font-cutive text-xl font-medium text-celeste">{ubicacion.title}</h2>
                            <p className="text-celeste sm:w-[24vw]">
                                {ubicacion.direccion}
                            </p>
                        </div>
                    </a>
                </div>

                <div className="mt-4 mx-auto sm:mx-0 flex flex-col sm:flex-row sm:relative sm:justify-between items-start text-sm text-gray-500 sm:-top-8">
                    <span className='mr-3 flex items-start'>
                        <LazyImage src={iconLocalizacionChico} className="h-4 mr-1 mt-0" />
                        <span className='mr-1 text-celeste font-bold'>
                            Cabo Polonio:
                        </span>
                        39 km
                    </span>
                    <span className='mx-3 text-celeste font-bold hidden sm:inline'>
                        |
                    </span>
                    <span className='sm:ml-3 flex items-start'>
                        <LazyImage src={iconLocalizacionChico} className="h-4 mr-1 mt-0" />
                        <span className='text-celeste font-bold mr-1'>
                            José Ignacio:
                        </span>
                        87 km
                    </span>
                </div>

            </div>
        </section>
    );
}