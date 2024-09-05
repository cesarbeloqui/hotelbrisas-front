import image1 from "@mastersuites/1.jpeg";
import image2 from "@mastersuites/2.jpeg";
import image3 from "@mastersuites/3.jpeg";
import image4 from "@mastersuites/4.jpeg";
import image5 from "@mastersuites/5.jpeg";
import image6 from "@mastersuites/6.jpeg";
import image7 from "@mastersuites/7.jpeg";
import image8 from "@bahiasuites/1.jpg";
import image9 from "@bahiasuites/2.jpeg";
import image10 from "@bahiasuites/3.jpeg";
import image11 from "@bahiasuites/4.jpeg";

export const CarruselImages1 = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7
];
export const CarruselImages2 = [
  image8,
  image9,
  image10,
  image11
];




const slides = [
  { id: 1, content: <div key="1" className="text- bg-blue-400 h-[100vh] w-full">Slide 1</div> },
  { id: 2, content: <div key="2" className="text- bg-blue-400 h-[100vh] w-full">Slide 2</div> },
  { id: 3, content: <div key="3" className="text- bg-blue-400 h-[100vh] w-full">Slide 3</div> },
]

export default {
  es: {
    slides: [{ id: 1, content: '“¡Primer hotel con sentido del diseño en la pedrera!”', sub: 'Conde Nast Traveler Magazine.', link: 'https://www.cntraveller.com/gallery/uruguay-best-beaches-parties-resorts-south-america' },
    { id: 2, content: `"Ganador del Travelers' Choice 2019: TripAdvisor" “top 10 hoteles pequeños en Uruguay”`, sub: 'www.tripadvisor.com', link: 'https://www.tripadvisor.com.ar/Hotel_Review-g303492-d582679-Reviews-La_Pedrera_Small_Hotel_Spa-Armacao_dos_Buzios_State_of_Rio_de_Janeiro.html' },
    { id: 3, content: `“Alojamiento de primera” — NEW YORK TIMES TRAVEL - "52 PLACES TO GO”`, sub: 'NEW YORK TIMES TRAVEL', link: 'https://www.nytimes.com/2011/09/18/travel/uruguays-bohemian-chic-beaches.html?searchResultPosition=1' },
    { id: 4, content: '“¡Una de las ubicaciones mejor valoradas de la pedrera!” - 9,7', sub: 'www.booking.com', link: 'https://www.booking.com/hotel/uy/brisas-de-la-pedrera-hotel-boutique.es-ar.html' },
    ],
    sections: [
      { id: 1, name: "Ubicación", href: "#ubicacion" },
      { id: 2, name: "Suites", href: "#suites" },
      { id: 3, name: "Servicios", href: "#servicios" },
      { id: 4, name: "Galería", href: "#galeria" },
      { id: 5, name: "Historia", href: "#historia" },
    ],
    reservas: "RESERVAS",
    ubicacion: {
      title: "Ubicación",
      lead: "A 100 M DE LA PLAYA",
      direccion: "Santa Teresa s/n Esquina Laguna Merín, 27004 La Pedrera, Uruguay"
    },
    habitaciones: {
      title: "Habitaciones & Suites", subtitle: "todas las habitaciones brisas son amplias y luminosas, cada una cuenta con un espacio exterior privado, haciendo brisas un destino cómodo."
    },
    masterSuites: {
      title: "Master Suites",
      content: ["Las suites ", { "font-bold italic": "MASTER" }, " son únicas. Ubicadas en las esquinas de la planta alta las dos comandan vistas increíbles de la playa desde sus amplios ventanales y terrazas."],
      subcontent: [{ "font-bold": "Máster East es la más cercana al mar, Máster West es la más amplia." }, " Tomamos en consideración vuestra preferencia pero no podemos siempre garantizar cuál de las dos Máster será asignada, dependerá de disponibilidad y duración de la estadía."],
      button: "Master Suites en imágenes"
    },
    bahiaSuites: {
      title: "Bahía Suites",
      content: ["Desde la planta alta ", { "font-bold italic": "BAHÍA SUITES" }, " comandan vistas espectaculares de la bahía y el mar hasta Cabo Polonio.Cada una cuenta con terraza privada.Contamos con 4 de ellas sin garantizar cuál de ellas será asignada en base a disponibilidad."],
      button: "Bahía Suites en imágenes"
    },

  },
  en: {
    slides: [
      { id: 1, content: '“First design-conscious hotel in La Pedrera!”', sub: 'Conde Nast Traveler Magazine.', link: 'https://www.cntraveller.com/gallery/uruguay-best-beaches-parties-resorts-south-america' },
      { id: 2, content: `"Travelers' Choice 2019 Winner: TripAdvisor" “Top 10 Small Hotels in Uruguay”`, sub: 'www.tripadvisor.com', link: 'https://www.tripadvisor.com.ar/Hotel_Review-g303492-d582679-Reviews-La_Pedrera_Small_Hotel_Spa-Armacao_dos_Buzios_State_of_Rio_de_Janeiro.html' },
      { id: 3, content: `“First-class accommodation” — NEW YORK TIMES TRAVEL - "52 PLACES TO GO”`, sub: 'NEW YORK TIMES TRAVEL', link: 'https://www.nytimes.com/2011/09/18/travel/uruguays-bohemian-chic-beaches.html?searchResultPosition=1' },
      { id: 4, content: '“One of the best-rated locations in La Pedrera!” - 9.7', sub: 'www.booking.com', link: 'https://www.booking.com/hotel/uy/brisas-de-la-pedrera-hotel-boutique.es-ar.html' },
    ],
    sections: [
      { id: 1, name: "Location", href: "#ubicacion" },
      { id: 2, name: "Suites", href: "#suites" },
      { id: 3, name: "Services", href: "#servicios" },
      { id: 4, name: "Gallery", href: "#galeria" },
      { id: 5, name: "History", href: "#historia" },
    ],
    reservas: "RESERVATIONS",
    ubicacion: {
      title: "Location",
      lead: "A 100 M FROM THE BEACH",
      direccion: "Santa Teresa s/n Corner Laguna Merín, 27004 La Pedrera, Uruguay"
    },
    habitaciones: {
      title: "Habitaciones & Suites", subtitle: "all brisas small rooms are spacious and bright, each with a private exterior space, making brisas a comfortable destination."
    },
    masterSuites: {
      title: "Master Suites",
      content: "The MASTER suites are unique. Located on the corners of the upper floor, both command incredible views of the beach from their large windows and terraces.",
      subcontent: "Master East is the closest to the sea, Master West is the most spacious. We take your preference into consideration, but we cannot always guarantee which of the two Masters will be assigned; it will depend on availability and the length of stay.",
      button: "Master Suites in Pictures"
    },
    bahiaSuites: {
      title: "Bahía Suites",
      content: [
        "From the upper floor ",
        { "font-bold italic": "BAHÍA SUITES" },
        " command spectacular views of the bay and the sea all the way to Cabo Polonio. Each one has a private terrace. We have 4 of them, but we cannot guarantee which one will be assigned, as it depends on availability."
      ],
      button: "Bahía Suites in images"
    }
  },
  br: {
    slides: [
      { id: 1, content: '“Primeiro hotel com design consciente em La Pedrera!”', sub: 'Conde Nast Traveler Magazine.', link: 'https://www.cntraveller.com/gallery/uruguay-best-beaches-parties-resorts-south-america' },
      { id: 2, content: `"Vencedor do Travelers' Choice 2019: TripAdvisor" “Top 10 Pequenos Hotéis no Uruguai”`, sub: 'www.tripadvisor.com', link: 'https://www.tripadvisor.com.ar/Hotel_Review-g303492-d582679-Reviews-La_Pedrera_Small_Hotel_Spa-Armacao_dos_Buzios_State_of_Rio_de_Janeiro.html' },
      { id: 3, content: `“Acomodação de primeira classe” — NEW YORK TIMES TRAVEL - "52 LUGARES PARA IR”`, sub: 'NEW YORK TIMES TRAVEL', link: 'https://www.nytimes.com/2011/09/18/travel/uruguays-bohemian-chic-beaches.html?searchResultPosition=1' },
      { id: 4, content: '“Uma das localizações mais bem avaliadas em La Pedrera!” - 9,7', sub: 'www.booking.com', link: 'https://www.booking.com/hotel/uy/brisas-de-la-pedrera-hotel-boutique.es-ar.html' },
    ],
    sections: [
      { id: 1, name: "Localização", href: "#ubicacion" },
      { id: 2, name: "Suítes", href: "#suites" },
      { id: 3, name: "Serviços", href: "#servicios" },
      { id: 4, name: "Galeria", href: "#galeria" },
      { id: 5, name: "História", href: "#historia" },
    ],
    reservas: "RESERVAS",
    ubicacion: {
      title: "Localização",
      lead: "A 100 M DA PRACA",
      direccion: "Santa Teresa s/n Esquina Laguna Merín, 27004 La Pedrera, Uruguai"
    },
    habitaciones: {
      title: "Habitaciones & Suítes", subtitle: "todas as suítes brisas são amplias e luminosas, cada uma contém um espaço exterior privado, fazendo brisas um destino confortável."
    },
    masterSuites: {
      title: "Master Suites",
      content: "As suítes MASTER são únicas. Localizadas nos cantos do andar superior, ambas oferecem vistas incríveis da praia a partir de suas amplas janelas e terraços.",
      subcontent: "A Master East é a mais próxima do mar, a Master West é a mais espaçosa. Levamos em consideração a sua preferência, mas não podemos garantir sempre qual das duas Masters será designada; dependerá da disponibilidade e da duração da estadia.",
      button: "Master Suites em imagens"
    },
    bahiaSuites: {
      title: "Bahía Suites",
      content: [
        "Do andar superior ",
        { "font-bold italic": "BAHÍA SUITES" },
        " comandam vistas espetaculares da baía e do mar até Cabo Polonio. Cada uma tem um terraço privado. Temos 4 delas, mas não podemos garantir qual será designada, pois depende da disponibilidade."
      ],
      button: "Bahía Suites em imagens"
    }


  }

}