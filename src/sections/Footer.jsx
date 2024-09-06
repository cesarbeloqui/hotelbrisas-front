import EmailIcon from "@icons/EmailIcon.svg?react"
import PhoneIcon from "@icons/PhoneIcon.svg?react"
import WpIconAzul from "@icons/WpIconAzul.svg?react"
import PositionIcon from "@icons/PositionIcon.svg?react"
import LogoFooter from "@assets/LogoFooter.svg?react"
import iconUbic from "@assets/iconLocalizacionChico.png"
import useLocalizedContent from "@/hooks/useLocalizedContent"

export default function Footer() {
    const localizedContent = useLocalizedContent()
    const { footer } = localizedContent
    const { title } = footer
    return (
        <footer className="bg-beige py-8 px-9">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                    <LogoFooter alt="Brisas de la Pedrera" className="h-24" />
                </div>
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-celeste text-2xl font-bold font-cutive mb-4">{title}</h2>
                    <div className="flex items-center justify-center md:justify-start mb-2">
                        <EmailIcon className="w-4 mr-2" />
                        <a href="mailto:reservas@hotelbrisas.uy" className="text-gris">
                            reservas@hotelbrisas.uy
                        </a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start mb-2">
                        <PhoneIcon className="w-4 mr-2" />
                        <span className="text-gray-700">Tel: +598 4479-2265</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <WpIconAzul className="w-4 mr-2" />
                        <span className="text-gray-700">Whatsapp: 598 9395-579</span>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                        <PositionIcon className="w-8 mr-2" />
                        <span className="text-gray-700">Santa Teresa s/n Esquina Laguna Merín,<br />27004 La Pedrera, Uruguay.</span>
                    </div>
                    <div className="text-gray-700">
                        <p><span><img src={iconUbic} alt="icono de ubicacion" className='h-auto w-4 inline-block ml-2 mr-4' /></span><span>
                            Cabo Polonio: 39 km.
                        </span>
                        </p>
                        <p><span><img src={iconUbic} alt="icono de ubicacion" className='h-auto w-4 inline-block ml-2 mr-4' /></span><span>José Ignacio: 87 km.</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}