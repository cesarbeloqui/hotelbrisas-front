import EmailIcon from '@icons/EmailIcon.svg?react';
import PhoneIcon from '@icons/PhoneIcon.svg?react';
import WpIconAzul from '@icons/WpIconAzul.svg?react';
import PositionIcon from '@icons/PositionIcon.svg?react';
import LogoFooter from '@assets/LogoFooter.svg?react';
import iconUbic from '@assets/iconLocalizacionChico.png';
import useLocalizedContent from '@/hooks/useLocalizedContent';
import "./index.css"

export default function Footer() {
    const localizedContent = useLocalizedContent();
    const { footer } = localizedContent;
    const { title } = footer;
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    return (
        <>
            <footer className='bg-beige py-8 px-9'>
                <div className='container mx-auto px-4 flex flex-col md:flex-row sm:items-center justify-between text-sm  sm:text-base'>
                    <div className='mb-6 md:mb-0 flex items-center justify-center'>
                        <LogoFooter alt='Brisas de la Pedrera' className='h-24' />
                    </div>
                    <div className='text-center md:text-left mb-6 md:mb-0'>
                        <h2 className='text-celeste text-2xl font-bold font-cutive mb-4'>{title}</h2>
                        <div className='flex items-center sm:justify-center md:justify-start mb-2'>
                            <EmailIcon className='w-4 mr-2' />
                            <a href='mailto:reservas@hotelbrisas.uy' className='text-gris'>
                                reservas@hotelbrisas.uy
                            </a>
                        </div>
                        <div className='flex items-center sm:justify-center md:justify-start mb-2'>
                            <a
                                href='tel:+59844792265'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex'>
                                <PhoneIcon className='w-4 mr-2' />
                                <span className='text-gray-700'>Tel: +598 4479-2265</span>
                            </a>
                        </div>
                        <div className='flex items-center sm:justify-center md:justify-start'>
                            <a
                                href='https://wa.me/59893955795?text=Hola!%20Te%20escribo%20desde%20la%20web,%20quisiera%20consultarles%20'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex'>
                                <WpIconAzul className='w-4 mr-2' />
                                <span className='text-gray-700'>Whatsapp: 598 9395-579</span>
                            </a>
                        </div>
                    </div>
                    <div className='text-left'>
                        <div className='flex items-center sm:justify-center md:justify-start mb-4 sm:mb-2'>
                            <a
                                href='https://maps.app.goo.gl/S8obcYR8EDzhWeUR6'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex'>
                                <PositionIcon className='w-8 mr-2' />
                                <span className='text-gray-700'>
                                    Santa Teresa s/n Esquina Laguna Merín,
                                    <br />
                                    27004 La Pedrera, Uruguay.
                                </span>
                            </a>
                        </div>
                        <div className='text-gray-700'>
                            <p>
                                <span>
                                    <img
                                        src={iconUbic}
                                        alt='icono de ubicacion'
                                        className='h-auto w-4 inline-block ml-2 mr-4'
                                    />
                                </span>
                                <span>Cabo Polonio: 39 km.</span>
                            </p>
                            <p>
                                <span>
                                    <img
                                        src={iconUbic}
                                        alt='icono de ubicacion'
                                        className='h-auto w-4 inline-block ml-2 mr-4'
                                    />
                                </span>
                                <span>José Ignacio: 87 km.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='w-full bg-beige text-xs sm:text-sm py-2 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center border-t-0 border-beige'>
                <div className='mb-2 sm:mb-0 text-center'>
                    {`© ${añoActual} Hotel Brisas de la Pedrera`}<br className='sm:hidden' /> <span className='hidden sm:inline'>|</span> Todos los derechos reservados
                </div>
                <div className='mt-2 sm:mt-0'>
                    Diseño web:{' '}
                    <a
                        href='https://www.reddisegno.com.ar/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-celeste'>
                        REDdiseño
                    </a>
                </div>
            </div>
        </>
    );
}
