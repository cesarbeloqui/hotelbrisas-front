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
    }
  }

}