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
import image16 from "@galeria/1.jpg";
import image17 from "@galeria/2.jpg";
import image18 from "@galeria/3.jpg";
import image19 from "@galeria/4.jpg";
import image20 from "@galeria/5.jpg";


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
export const CarruselImages4 = [
  image16,
  image17,
  image18,
  image19,
  image20
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
      title: "Habitaciones & Suites", subtitle: "Todas las habitaciones brisas son amplias y luminosas, cada una cuenta con un espacio exterior privado, haciendo brisas un destino cómodo."
    },
    masterSuites: {
      title: "Master Suites",
      content: ["Las suites ", { "font-bold italic": "MASTER" }, " son únicas. Ubicadas en las esquinas de la planta alta las dos comandan vistas increíbles de la playa desde sus amplios ventanales y terrazas."],
      subcontent: [{ "font-bold": "Máster East es la más cercana al mar, Máster West es la más amplia." }, " Tomamos en consideración vuestra preferencia pero no podemos siempre garantizar cuál de las dos Máster será asignada, dependerá de disponibilidad y duración de la estadía."],
      button: "Master Suites en imágenes"
    },
    bahiaSuites: {
      title: "Bahía Suites",
      content: ["Desde la planta alta ", { "font-bold italic": "BAHÍA SUITES" }, " comandan vistas espectaculares de la bahía y el mar hasta Cabo Polonio. Cada una cuenta con terraza privada. Contamos con 4 de ellas sin garantizar cuál de ellas será asignada en base a disponibilidad."],
      button: "Bahía Suites en imágenes"
    },
    gardenSuites: {
      title: "Garden Suites",
      content: ["Las suites ", { "font-bold italic": "GARDEN" }, ` se encuentran alrededor del jardín y la piscina. Amplias y con los mismos servicios que en planta alta GARDEN suites`, {
        "font-bold": `\nIdeales para parejas o para familias con pequeños.`
      }, {
          "font-bold": `\n\nOpciones triple consultar por WhatsApp `
        }, "\nal +598 939-55795"],
      button: "Garden Suites en imágenes"
    },
    servicios: {
      title: "Nuestros Servicios",
      subtitle: "Brisas es un oasis al lado del mar: ubicado a metros de la playa y de la calle principal. Cuenta con piscina y jardines interiores protegidos de los vientos rochenses.",
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
        info: "A tener en cuenta:",
        title: "Información General",
        items: [
          {
            icon: "PhoneXIcon",
            content: [
              "Las habitaciones Brisas NO CUENTAN con teléfonos."
            ]
          },
          {
            icon: "UsersIcon",
            content: [
              { "font-bold": "MENORES: " },
              "Recibimos familias con menores, contáctarnos directamente para conversar opciones."
            ]
          },
          {
            icon: "SmokingIcon",
            content: [
              { "font-bold": "NO SE PERMITE FUMAR " },
              "en todo el predio del hotel, dentro o fuera de las habitaciones."
            ]
          },
          {
            icon: "CarIcon",
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
            icon: "InfoIcon",
            content: [
              { "font-bold": "IVA: " },
              "Todos los cargos son en dólares US. Las tarifas son por noche por habitación con el desayuno incluido y no incluyen impuestos.",
              { "text-celeste": "\nExtranjeros están exentos de impuestos, Uruguayos suman un 10% por IVA adicional." }
            ]
          },
          {
            icon: "CheckInIcon",
            content: [
              { "font-bold": "Horarios Check-in / Check-out: " },
              "de acuerdo a la estacionalidad."
            ]
          },
          {
            icon: "PoolIcon",
            content: [
              { "font-bold": "Horarios de piscina: " },
              "de acuerdo a la estacionalidad."
            ]
          }
        ]
      }
    ],
    hotelGallery: {
      title: "Galería",
      subtitle: "Conozca más de nuestro hotel"
    },
    historia: {
      title: "Nuestra Historia",
      content: [{ "font-bold": "A este hermoso lugar de playa primero la llamaron Punta Rubia. " }, "Fueron los navegantes de la época encandilados por sus anchas playas doradas que se vislumbraban desde la lejanía, mar adentro. Esas arenas doradas se conjugaban con un verdadero balcón al mar, compuesto por formaciones rocosas de más de 60 millones de años, testimonio fundamental del desplazamiento de los continentes ya que las mismas rocas continúan en Sudáfrica. De allí su nombre definitivo: ", { "font-bold": "LA PEDRERA" }, ". Es uno de los balnearios más antiguos del Departamento, y “la joya de la Corona”, de Rocha.\n\n", "El primer amanzanamiento del balneario fue realizado por el Agrimensor Adolfo Reis, en noviembre de 1898 y le fue encargado por Román Arrarte, dueño de la enorme propiedad rural que lo abarcaba, y que posteriormente heredó Angela, una de sus doce hijos. Allí iban familias amigas a disfrutar ese auténtico balcón al océano que caracteriza al balneario desde sus orígenes. Hacia el año 1910 habían levantado sus casas unas diez familias, en su mayoría italianos y vascos. Desde entonces y hasta hoy, su aire a pueblo, la tranquilidad de sus calles de tierra, que mueren en el mar, la convierten en un lugar de mucho encanto. Visualizar desde allí los amaneceres y la luna llena reflejada en el Océano proporciona un espectáculo único. Su callecita del centro, su antigua Iglesia, cuya campana perteneció a un barco hundido en estas costas, su aire de entonces y de ahora, su cielo al atardecer, nos hace recordar aquel poema de Rafael Alberti en Marinero en Tierra: ", { "italic": '“¿Quién rompió las doradas vidrieras del crepúsculo? ¡Oh cielo descubierto, de montes, mares, vientos..”.' }, "Porque La Pedrera se incluye dentro de la Reserva de Biósfera «Bañados del Este»; y en ella podemos disfrutar de los increíbles y ricos paisajes con la más alta diversidad de flora y fauna. Cabalgatas, deportes al aire libre, campo y mucho mar, con aire de familia y tiempos idos.  Si miramos hacia el mar desde julio hasta octubre, nos sorprenderemos al ver a las ballenas Francas, en su pasaje desde el sur hacia otras latitudes. Sus excelentes playas invitan al baño y a la recreación, de toda la familia. Asimismo, nos brindan óptimas condiciones para la práctica del surf y la pesca deportiva.\n\n", { "font-bold": "En ese lugar, y mirando el mar, Doña Alfonsa, fundó en 1910 la primera Posada. " }, "Hoy, a más de 110 años, lo que fue es. Y abre nuevamente sus puertas. Había sido refaccionado a pleno hace pocos años por la Sra. Laura Jauregui Mujica, una argentina-uruguaya, que falleció en el año 2023.  Habiendo estado cerrado en el pasado verano, abrimos nuevamente sus puertas. Actualizado, manteniendo el cariño, el buen gusto que le había puesto Laura y ese aire de pueblo del lugar, reabre, parte del pueblo y la Pedrera. ", { "font-bold": "Con su nombre y su aire de siempre: Hotel BRISAS." }],
    },
    contact: {
      title: "Dejanos tus consultas",
      email: "reservas@hotelbrisas.uy",
      phone: { number: "+59844792265", text: "Tel: " },
      whatsapp: "5989395579",
      address: "Santa Teresa s/n Esquina Laguna Merín, 27004 La Pedrera, Uruguay.",
      beachDistance: "A 100 M DE LA PLAYA",
      caboPolonio: [{ "font-bold text-celeste": "Cabo Polonio: " }, "39 km."],
      joseIgnacio: [{ "font-bold text-celeste": "José Ignacio: " }, "87 km."],
    },
    footer: {
      title: "¡Contáctanos!"
    }

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
        info: "Things to consider:",
        title: "General Information",
        items: [
          {
            icon: "PhoneXIcon",
            content: [
              "Brisas rooms DO NOT HAVE telephones."
            ]
          },
          {
            icon: "UsersIcon",
            content: [
              { "font-bold": "CHILDREN: " },
              "We welcome families with children. Please contact us directly to discuss options."
            ]
          },
          {
            icon: "SmokingIcon",
            content: [
              { "font-bold": "NO SMOKING " },
              "is allowed anywhere on the hotel premises, both inside and outside the rooms."
            ]
          },
          {
            icon: "CarIcon",
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
            icon: "InfoIcon",
            content: [
              { "font-bold": "VAT: " },
              "All charges are in US dollars. Rates are per night per room with breakfast included and do not include taxes.",
              { "text-celeste": "\nForeigners are exempt from taxes, while Uruguayans incur an additional 10% VAT." }
            ]
          },
          {
            icon: "CheckInIcon",
            content: [
              { "font-bold": "Check-in / Check-out Times: " },
              "subject to seasonality."
            ]
          },
          {
            icon: "PoolIcon",
            content: [
              { "font-bold": "Pool Hours: " },
              "subject to seasonality."
            ]
          }
        ]
      }
    ],
    hotelGallery: {
      title: "Gallery",
      subtitle: "Learn more about our hotel"
    },
    historia: {
      title: "Our History",
      content: [
        { "font-bold": "This beautiful beach place was originally called Punta Rubia. " },
        "It was the sailors of the time dazzled by its wide golden beaches visible from afar, out at sea. These golden sands were paired with a true balcony to the sea, composed of rock formations over 60 million years old, a fundamental testimony of the movement of continents as these rocks continue in South Africa. Hence its definitive name: ",
        { "font-bold": "LA PEDRERA" },
        ". It is one of the oldest resorts in the Department and 'the jewel of the Crown' of Rocha.\n\n",
        "The first subdivision of the resort was carried out by Surveyor Adolfo Reis in November 1898, commissioned by Román Arrarte, owner of the large rural property it encompassed, which was later inherited by Angela, one of his twelve children. Families used to visit to enjoy that authentic balcony to the ocean that characterizes the resort since its origins. By 1910, about ten families, mostly Italians and Basques, had built their houses. Since then and until today, its village-like air, the tranquility of its dirt streets ending at the sea, make it a very charming place. Viewing the sunrises and the full moon reflected in the Ocean provides a unique spectacle. Its central little street, its old Church, whose bell belonged to a shipwrecked vessel on these shores, its air of then and now, its sunset sky, remind us of Rafael Alberti's poem in Marinero en Tierra: ",
        { "italic": '“Who broke the golden windows of twilight? Oh open sky, of mountains, seas, winds..”' },
        "Because La Pedrera is included within the Biosphere Reserve ‘Bañados del Este’; and there we can enjoy the incredible and rich landscapes with the highest diversity of flora and fauna. Horseback riding, outdoor sports, countryside, and much sea, with a family atmosphere and times gone by. If we look towards the sea from July to October, we will be amazed to see the Southern Right Whales passing from the south to other latitudes. Its excellent beaches invite swimming and recreation for the whole family. They also offer optimal conditions for surfing and sport fishing.\n\n",
        { "font-bold": "In that place, and looking at the sea, Doña Alfonsa founded the first Inn in 1910. " },
        "Today, more than 110 years later, what was is. And it opens its doors again. It had been fully renovated a few years ago by Mrs. Laura Jauregui Mujica, an Argentine-Uruguayan, who passed away in 2023. Having been closed last summer, we are reopening its doors. Updated, maintaining the affection, good taste Laura had put into it, and that village air of the place, it reopens, part of the town and La Pedrera. ",
        { "font-bold": "With its name and its ever-present charm: Hotel BRISAS." }
      ],
    },
    contact: {
      title: "Send us your inquiries",
      email: "reservas@hotelbrisas.uy",
      phone: { number: "+59844792265", text: "Phone: " },
      whatsapp: "5989395579",
      address: "Santa Teresa s/n Corner Laguna Merín, 27004 La Pedrera, Uruguay.",
      beachDistance: "100 M FROM THE BEACH",
      caboPolonio: [{ "font-bold text-celeste": "Cabo Polonio: " }, "39 km."],
      joseIgnacio: [{ "font-bold text-celeste": "José Ignacio: " }, "87 km."],
    },
    footer: {
      title: "Contact Us!"
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
        info: "Pontos a considerar:",
        title: "Informações Gerais",
        items: [
          {
            icon: "PhoneXIcon",
            content: [
              "Os quartos Brisas NÃO DISPÕEM de telefones."
            ]
          },
          {
            icon: "UsersIcon",
            content: [
              { "font-bold": "MENORIDADES: " },
              "Recebemos famílias com menores, entre em contato diretamente para discutir opções."
            ]
          },
          {
            icon: "SmokingIcon",
            content: [
              { "font-bold": "É PROIBIDO FUMAR " },
              "em toda a propriedade do hotel, dentro ou fora dos quartos."
            ]
          },
          {
            icon: "CarIcon",
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
            icon: "InfoIcon",
            content: [
              { "font-bold": "IVA: " },
              "Todos os encargos são em dólares dos EUA. As tarifas são por noite por quarto com café da manhã incluído e não incluem impostos.",
              { "text-celeste": "\nEstrangeiros estão isentos de impostos, uruguaios acrescentam 10% de IVA adicional." }
            ]
          },
          {
            icon: "CheckInIcon",
            content: [
              { "font-bold": "Horários de Check-in / Check-out: " },
              "de acordo com a sazonalidade."
            ]
          },
          {
            icon: "PoolIcon",
            content: [
              { "font-bold": "Horários da piscina: " },
              "de acordo com a sazonalidade."
            ]
          }
        ]
      }
    ],
    hotelGallery: {
      title: "Galeria",
      subtitle: "Saiba mais sobre nosso hotel"
    },
    historia: {
      title: "Nossa História",
      content: [
        { "font-bold": "Este belo local de praia foi originalmente chamado Punta Rubia. " },
        "Eram os navegadores da época deslumbrados pelas suas largas praias douradas visíveis de longe, no alto-mar. Essas areias douradas se combinavam com uma verdadeira varanda para o mar, composta por formações rochosas de mais de 60 milhões de anos, um testemunho fundamental do movimento dos continentes, pois essas rochas continuam na África do Sul. Daí o seu nome definitivo: ",
        { "font-bold": "LA PEDRERA" },
        ". É um dos balneários mais antigos do Departamento e 'a joia da Coroa' de Rocha.\n\n",
        "O primeiro loteamento do balneário foi realizado pelo Agrimensor Adolfo Reis em novembro de 1898, encomendado por Román Arrarte, proprietário da grande propriedade rural que o abrangeu, e que foi posteriormente herdada por Angela, uma de seus doze filhos. Famílias costumavam visitar para desfrutar daquela autêntica varanda para o oceano que caracteriza o balneário desde seus origens. Em 1910, cerca de dez famílias, na sua maioria italianos e bascos, haviam construído suas casas. Desde então e até hoje, seu ar de vila, a tranquilidade de suas ruas de terra que terminam no mar, tornam-no um lugar muito encantador. Ver o nascer do sol e a lua cheia refletida no Oceano proporciona um espetáculo único. Sua pequena rua central, sua antiga Igreja, cuja campana pertenceu a um navio naufragado nessas costas, seu ar de então e de agora, seu céu ao entardecer, nos faz lembrar do poema de Rafael Alberti em Marinero en Tierra: ",
        { "italic": '“Quem quebrou as janelas douradas do crepúsculo? Oh céu descoberto, de montes, mares, ventos..”' },
        "Porque La Pedrera está incluída dentro da Reserva da Biosfera ‘Bañados del Este’; e nela podemos desfrutar das paisagens incríveis e ricas com a mais alta diversidade de flora e fauna. Passeios a cavalo, esportes ao ar livre, campo e muito mar, com um clima familiar e tempos passados. Se olharmos para o mar de julho a outubro, ficaremos surpresos ao ver as baleias-francas passando do sul para outras latitudes. Suas excelentes praias convidam ao banho e à recreação para toda a família. Elas também oferecem condições ótimas para a prática de surfe e pesca esportiva.\n\n",
        { "font-bold": "Nesse local, e olhando para o mar, Dona Alfonsa fundou a primeira Pousada em 1910. " },
        "Hoje, mais de 110 anos depois, o que foi é. E abre suas portas novamente. Havia sido totalmente reformada há poucos anos pela Sra. Laura Jauregui Mujica, uma argentino-uruguaia, que faleceu em 2023. Tendo estado fechada no verão passado, estamos reabrindo suas portas. Atualizada, mantendo o carinho, o bom gosto que Laura havia colocado e aquele ar de vila do local, reabre, parte da cidade e La Pedrera. ",
        { "font-bold": "Com seu nome e seu charme de sempre: Hotel BRISAS." }
      ],
    },
    contact: {
      title: "Envie-nos suas consultas",
      email: "reservas@hotelbrisas.uy",
      phone: { number: "+59844792265", text: "Tel: " },
      whatsapp: "5989395579",
      address: "Santa Teresa s/n Esquina Laguna Merín, 27004 La Pedrera, Uruguai.",
      beachDistance: "A 100 M DA PRAIA",
      caboPolonio: [{ "font-bold text-celeste": "Cabo Polonio: " }, "39 km."],
      joseIgnacio: [{ "font-bold text-celeste": "José Ignacio: " }, "87 km."],
    },
    footer: {
      title: "Entre em contato!"
    }



  }

}