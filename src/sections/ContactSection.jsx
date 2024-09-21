import TextFormatter from '@/components/TextFormatter/TextFormatter'
import React from 'react'
import EmailIcon from "@icons/EmailIcon.svg?react"
import PhoneIcon from "@icons/PhoneIcon.svg?react"
import PositionIcon from "@icons/PositionIcon.svg?react"
import WpIconAzul from "@icons/WpIconAzul.svg?react"
import iconFB from "../assets/facebook.webp"
import iconIG from "../assets/instagram.webp"
import iconUbic from "@assets/iconLocalizacionChico.webp"
import MapComponent from './Mapa/Mapa'
import useLocalizedContent from '@/hooks/useLocalizedContent'



export default function Component() {
    const localizedContent = useLocalizedContent()
    const { contact } = localizedContent
    const texts = contact
    const classIcon = "w-5 sm:w-8 h-5 sm:h-8 inline-block mr-2"
    return (
        <section id="contacto" className="py-10 px-5 bg-white">
            <div className="bg-grisclaro rounded-tl-[3rem] rounded-br-[3rem] px-7 py-7 sm:px-[4.5rem] sm:py-16 w-[90vw] mx-auto font-sans flex flex-col md:flex-row">
                <div className="sm:relative w-full md:w-1/2 md:pr-5 mb-5 md:mb-0 space-y-8">
                    <div className='sm:absolute sm:top-0 sm:left-0 space-y-7 sm:text-2xl'>
                        <h2 className="inline-block text-celeste font-cutive border-b-[1px] border-celeste pb-2 mb-1 text-[5.5vw] sm:text-3xl">
                            {texts.title}
                        </h2>
                        <p>
                            <a href={`mailto:${texts.email}`} className="flex items-center">
                                <EmailIcon className={classIcon} />
                                <span className="ml-2">{texts.email}</span>
                            </a>
                        </p>
                        <p>
                            <a href={`tel:${texts.phone.number}`} className="flex items-center">
                                <PhoneIcon className={classIcon} />
                                <span className="ml-2">{texts.phone.text}{texts.phone.number}</span>
                            </a>
                        </p>
                        <p>
                            <a href={`https://wa.me/${texts.whatsapp}`} className="flex items-center">
                                <WpIconAzul className={classIcon} />
                                <span className="ml-2">WhatsApp: +{texts.whatsapp}</span>
                            </a>
                        </p>

                    </div>

                    <div className='sm:absolute sm:bottom-0 sm:text-[1.3rem] space-y-7'>

                        <div className='flex flex-row sm:ml-12 ml-10'>
                            <a href={`https://www.facebook.com/hotelbrisasdelapedrera`} className="flex items-center sm:mb-2 mb-4">
                                <img src={iconFB} className={`w-8 inline-block mr-2`} />

                            </a>
                            <a href={`https://www.instagram.com/brisasdelapedrera/`} className="flex items-center sm:mb-2 mb-4">
                                <img src={iconIG} className={`w-8 inline-block mr-2`} />

                            </a>

                        </div>

                        <a href="https://maps.app.goo.gl/S8obcYR8EDzhWeUR6" target="_blank" rel="noopener noreferrer">
                            <div className='flex'>
                                <PositionIcon className="w-16 h-auto mr-2" />
                                <p><span className="text-celeste"></span> {texts.address}</p>
                            </div>
                        </a>
                        <button className="bg-transparent border-2 border-celeste text-celeste font-extrabold py-3 px-4 sm:px-8 rounded-xl mt-3">
                            {texts.beachDistance}
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col">
                    <MapComponent className="w-full h-64 md:h-[24rem] object-cover rounded-lg" />
                    <div className="flex flex-col md:flex-row justify-between mt-2 p-2">
                        <p className="mb-2 md:mb-0">
                            <span className="text-blue-500">
                                <img src={iconUbic} alt='ubicacion' className='h-auto w-4 inline-block mr-1' />
                            </span>
                            <TextFormatter content={texts.caboPolonio} />
                        </p>
                        <p>
                            <span className="text-blue-500">
                                <img src={iconUbic} alt='ubicacion' className='h-auto w-4 inline-block mr-1' />
                            </span>
                            <TextFormatter content={texts.joseIgnacio} />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
