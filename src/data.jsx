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
import image12 from "@gardesuites/1.jpg";
import image13 from "@gardesuites/2.jpg";
import image14 from "@gardesuites/3.jpg";
import image15 from "@gardesuites/4.jpeg";
import PhoneXIcon from "@icons/PhoneXIcon.svg?react";
import UsersIcon from "@icons/UsersIcon.svg?react";
import SmokingIcon from "@icons/SmokingIcon.svg?react";
import CarIcon from "@icons/CarIcon.svg?react";
import InfoIcon from "@icons/InfoIcon.svg?react";
import CheckInIcon from "@icons/CheckInIcon.svg?react";
import PoolIcon from "@icons/PoolIcon.svg?react";

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
export const CarruselImages3 = [
  image12,
  image13,
  image14,
  image15
];



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
    gardenSuites: {
      title: "Garden Suites",
      content: ["Las suites ", { "font-bold italic": "GARDEN" }, ` se encuentran alrededor del jardín y la piscina. Amplias y con los mismos servicios que en planta alta GARDEN suites ¡cuentan con un espacio exterior privado y equipado para la relajación!`, {
        "font-bold": `\nIdeales para parejas o para familias con pequeños.`
      }, {
          "font-bold": `\n\nOpciones triple consultar por WhatsApp `
        }, "\nal +598 939-5795"],
      button: "Garden Suites en imágenes"
    },
    servicios: {
      title: "Nuestros Servicios",
      subtitle: "Brisas es un oasis al lado del mar: ubicado a metros de la playa y de la calle principal.Cuenta con piscina y jardines interiores protegidos de los vientos rochenses.",
      items: [
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
      ]
    },
    hotelInfo: [
      {
        title: "Información General",
        items: [
          {
            icon: PhoneXIcon,
            content: [
              "Las habitaciones Brisas NO CUENTAN con teléfonos."
            ]
          },
          {
            icon: UsersIcon,
            content: [
              { "font-bold": "MENORES: " },
              "Recibimos familias con menores, contáctarnos directamente para conversar opciones."
            ]
          },
          {
            icon: SmokingIcon,
            content: [
              { "font-bold": "NO SE PERMITE FUMAR " },
              "en todo el predio del hotel, dentro o fuera de las habitaciones."
            ]
          },
          {
            icon: CarIcon,
            content: [
              { "font-bold": "ESTACIONAMIENTO: " },
              "Contamos con 5 espacios de estacionamiento dentro del hotel, no existen cocheras asignadas, es posible estacionar alrededor del hotel."
            ]
          }
        ]
      },
      {
        title: "Tarifas y Horarios",
        items: [
          {
            icon: InfoIcon,
            content: [
              { "font-bold": "IVA: " },
              "Todos los cargos son en dólares US. Las tarifas son por noche por habitación con el desayuno incluido y no incluyen impuestos.",
              { "text-celeste": "\nExtranjeros están exentos de impuestos, Uruguayos suman un 10% por IVA adicional." }
            ]
          },
          {
            icon: CheckInIcon,
            content: [
              { "font-bold": "Horarios Check-in / Check-out: " },
              "de acuerdo a la estacionalidad."
            ]
          },
          {
            icon: PoolIcon,
            content: [
              { "font-bold": "Horarios de piscina: " },
              "de acuerdo a la estacionalidad."
            ]
          }
        ]
      }
    ]

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
    },
    gardenSuites: {
      title: "Garden Suites",
      content: [
        "The suites ",
        { "font-bold italic": "GARDEN" },
        " are located around the garden and the pool. Spacious and with the same services as the upper floor GARDEN suites, they come with a private outdoor space equipped for relaxation!",
        { "font-bold": "\nIdeal for couples or families with young children." },
        { "font-bold": "\n\nTriple options available, inquire via WhatsApp " },
        "\nat +598 939-5795"
      ],
      button: "Garden Suites in images"
    },
    servicios: {
      title: "Our Services",
      subtitle: "Brisas is an oasis by the sea: located just meters from the beach and the main street. It features a pool and sheltered inner gardens protected from the Rocha winds.",
      items: [
        "Welcome drink.",
        "Buffet breakfast.",
        "WiFi in the hotel and rooms.",
        "A/C, safe.",
        "Electric kettle, mini-fridge, glassware, and tea service.",
        '43" Full HD TV.',
        "Bathrobes.",
        "Living room with stove.",
        "Patio / Deck in the pool area with loungers and tables.",
        "Seasonal beach items: bag, towels, hats, and beach chairs."
      ]

    },
    hotelInfo: [
      {
        title: "General Information",
        items: [
          {
            icon: PhoneXIcon,
            content: [
              "Brisas rooms DO NOT HAVE telephones."
            ]
          },
          {
            icon: UsersIcon,
            content: [
              { "font-bold": "CHILDREN: " },
              "We welcome families with children. Please contact us directly to discuss options."
            ]
          },
          {
            icon: SmokingIcon,
            content: [
              { "font-bold": "NO SMOKING " },
              "is allowed anywhere on the hotel premises, both inside and outside the rooms."
            ]
          },
          {
            icon: CarIcon,
            content: [
              { "font-bold": "PARKING: " },
              "We have 5 parking spaces within the hotel. There are no assigned parking spots, but parking around the hotel is possible."
            ]
          }
        ]
      },
      {
        title: "Rates and Timings",
        items: [
          {
            icon: InfoIcon,
            content: [
              { "font-bold": "VAT: " },
              "All charges are in US dollars. Rates are per night per room with breakfast included and do not include taxes.",
              { "text-celeste": "\nForeigners are exempt from taxes, while Uruguayans incur an additional 10% VAT." }
            ]
          },
          {
            icon: CheckInIcon,
            content: [
              { "font-bold": "Check-in / Check-out Times: " },
              "subject to seasonality."
            ]
          },
          {
            icon: PoolIcon,
            content: [
              { "font-bold": "Pool Hours: " },
              "subject to seasonality."
            ]
          }
        ]
      }
    ],
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
    },
    gardenSuites: {
      title: "Garden Suites",
      content: [
        "As suítes ",
        { "font-bold italic": "GARDEN" },
        " estão localizadas ao redor do jardim e da piscina. Espaçosas e com os mesmos serviços das suítes GARDEN no andar superior, contam com um espaço externo privado e equipado para relaxamento!",
        { "font-bold": "\nIdeais para casais ou para famílias com crianças pequenas." },
        { "font-bold": "\n\nOpções triplas, consulte pelo WhatsApp " },
        "\nno +598 939-5795"
      ],
      button: "Garden Suites em imagens"
    },
    servicios: {
      title: "Nossos Serviços",
      subtitle: "Brisas é um oásis à beira-mar: localizado a poucos metros da praia e da rua principal. Conta com piscina e jardins internos protegidos dos ventos de Rocha.",
      items: [
        "Taça de Boas-Vindas.",
        "Café da manhã buffet.",
        "WiFi no hotel e nos quartos.",
        "A/C, cofre.",
        "Chaleira elétrica, mini-frigideira, vidros e serviço de chá.",
        'TV 43" Full HD.',
        "Roupões.",
        "Sala de estar com aquecedor.",
        "Pátio / Deck na área da piscina com espreguiçadeiras e mesas.",
        "Em temporada para a praia: bolsa, toalhas, chapéus e cadeiras de praia."
      ]
    },
    hotelInfo: [
      {
        title: "Informações Gerais",
        items: [
          {
            icon: PhoneXIcon,
            content: [
              "Os quartos Brisas NÃO DISPÕEM de telefones."
            ]
          },
          {
            icon: UsersIcon,
            content: [
              { "font-bold": "MENORIDADES: " },
              "Recebemos famílias com menores, entre em contato diretamente para discutir opções."
            ]
          },
          {
            icon: SmokingIcon,
            content: [
              { "font-bold": "É PROIBIDO FUMAR " },
              "em toda a propriedade do hotel, dentro ou fora dos quartos."
            ]
          },
          {
            icon: CarIcon,
            content: [
              { "font-bold": "ESTACIONAMENTO: " },
              "Temos 5 espaços de estacionamento dentro do hotel, não há vagas designadas, é possível estacionar ao redor do hotel."
            ]
          }
        ]
      },
      {
        title: "Tarifas e Horários",
        items: [
          {
            icon: InfoIcon,
            content: [
              { "font-bold": "IVA: " },
              "Todos os encargos são em dólares dos EUA. As tarifas são por noite por quarto com café da manhã incluído e não incluem impostos.",
              { "text-celeste": "\nEstrangeiros estão isentos de impostos, uruguaios acrescentam 10% de IVA adicional." }
            ]
          },
          {
            icon: CheckInIcon,
            content: [
              { "font-bold": "Horários de Check-in / Check-out: " },
              "de acordo com a sazonalidade."
            ]
          },
          {
            icon: PoolIcon,
            content: [
              { "font-bold": "Horários da piscina: " },
              "de acordo com a sazonalidade."
            ]
          }
        ]
      }
    ],


  }

}