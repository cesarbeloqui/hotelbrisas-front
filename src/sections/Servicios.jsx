import useLocalizedContent from "@/hooks/useLocalizedContent";
import img from "@servicios/1.jpg"

// Array de items extraído fuera del componente
const amenidades = [
    "Copa de Bienvenida.",
    "Desayuno buffet.",
    "WiFi en el hotel y las habitaciones.",
    "A/C, caja de seguridad.",
    "Pava eléctrica, mini-fridge, cristalería y servicio de té.",
    'TV 43" Full HD.',
    "Batas.",
    "Living con estufa.",
    "Patio / Deck en zona de piscina con reposeras y mesas.",
    "En temporada para la playa: bolsa, toallas, sombreros y sillas de playa.",
];

export default function Servicios() {
    const localizedContent = useLocalizedContent()
    const { servicios } = localizedContent
    const { items } = servicios
    return (
        <div className="w-full  mx-auto bg-blanco overflow-hidden z-30">
            <div className="pb-6 flex flex-col md:flex-row">
                {/* Columna izquierda con la imagen */}
                <div className="md:w-1/2">
                    <img
                        src={img}
                        alt="Mujer disfrutando de una comida al aire libre"
                        width={500}
                        height={375}
                        className="object-cover h-full w-full"
                    />
                </div>
                {/* Columna derecha con la lista de amenidades */}
                <div className="md:w-1/2 bg-beige">
                    <ul className="space-y-2 py-20 px-14">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 mr-2 flex-shrink-0 text-celeste" viewBox="0 0 19 19" fill="currentColor">
                                    <path d="M8.88,5c-2.72,0.33-4.38,3.1-3.1,5.61c1.15,2.26,4.02,2.69,6.02,1.32c2.1-1.44,2.73-4,1.76-6.31 c-0.99-2.36-3.42-4.24-6.02-4.35c-2.46-0.1-4.48,1.65-5.68,3.65c-1.39,2.31-2.22,5.41-1.01,7.95c2.07,4.34,7.94,5.92,12.19,4.16 c4.97-2.07,7.04-8.25,4.8-13.03c-0.65-1.38-2.7-0.18-2.05,1.2C17.1,8,16.25,11.58,14,13.66c-2.24,2.07-5.83,2.21-8.43,0.76 c-1.45-0.81-2.85-2.22-2.94-3.96C2.54,8.73,3.36,6.74,4.4,5.39c0.95-1.23,2.33-2.06,3.91-1.59c1.6,0.48,3.13,1.97,3.33,3.68 c0.17,1.42-1.03,3.08-2.59,2.88c-1.56-0.19-1.89-2.77-0.17-2.99c0.64-0.08,1.19-0.49,1.19-1.19C10.07,5.61,9.52,4.92,8.88,5L8.88,5z" />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}