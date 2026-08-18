
type CategoryTypes = "novias" | "maquillaje social" | "peinados" | "quinceañera" | "sesión fotos"
type MostrarType = "portada" | "portafolio"

interface ImagenesData {
    id: number
    url: string
    alt: string
    author: string
    category: CategoryTypes
    aspect: string
    mostrar_en: MostrarType
}

const galeriaImagenes: ImagenesData[] = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?w=800&fit=crop&auto=format',
        alt: 'Escaleras junto a edificio en escala de grises',
        author: 'Mirna Delgado',
        category: 'novias',
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&fit=crop&auto=format',
        alt: 'Fachada curva de Axel Towers en Copenhague',
        author: 'Mirna Delgado',
        category: "peinados",
        aspect: 'portrait',
        mostrar_en: "portada"
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1599669846660-945c5c775181?w=800&fit=crop&auto=format',
        alt: 'Edificio de gran altura durante la noche',
        author: 'Mirna Delgado',
        category: "novias",
        aspect: 'portrait',
        mostrar_en: "portada"
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1665779736808-047a6bbf43a0?w=800&fit=crop&auto=format',
        alt: 'Primer plano de fachada de edificio',
        author: 'Mirna Delgado',
        category: "novias",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1643175517006-4a1bd8ad37cb?w=800&fit=crop&auto=format',
        alt: 'Rascacielos con múltiples ventanas',
        author: 'Mirna Delgado',
        category: "peinados",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?w=800&fit=crop&auto=format',
        alt: 'Escalera de caracol en el exterior del edificio',
        author: 'Mirna Delgado',
        category: "quinceañera",
        aspect: 'portrait',
        mostrar_en: "portada"
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1608531078362-d1dcb855bc9f?w=800&fit=crop&auto=format',
        alt: 'Edificio en blanco y negro',
        author: 'Mirna Delgado',
        category: "sesión fotos",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1552821773-37cbce3a7965?w=800&fit=crop&auto=format',
        alt: 'Fotografía en blanco y negro de un edificio',
        author: 'Mirna Delgado',
        category: "novias",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 9,
        url: 'https://images.unsplash.com/photo-1712567604499-08f207054260?w=800&fit=crop&auto=format',
        alt: 'Edificio de gran altura con muchas ventanas',
        author: 'Mirna Delgado',
        category: "peinados",
        aspect: 'landscape',
        mostrar_en: "portafolio"
    },
    {
        id: 10,
        url: 'https://images.unsplash.com/photo-1738844153732-a485f0e78382?w=800&fit=crop&auto=format',
        alt: 'Edificio con reloj en blanco y negro',
        author: 'Mirna Delgado',
        category: "quinceañera",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 11,
        url: 'https://images.unsplash.com/photo-1554201791-f9fcfba504a0?w=800&fit=crop&auto=format',
        alt: 'Edificio de hormigón gris bajo cielo azul',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 12,
        url: 'https://images.unsplash.com/photo-1524439188326-e47322d1cef2?w=800&fit=crop&auto=format',
        alt: 'Bloque de madera blanca en mesa',
        author: 'Mirna Delgado',
        category: "peinados",
        aspect: 'landscape',
        mostrar_en: "portafolio"
    },
    {
        id: 13,
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        alt: 'Bloque de madera blanca en mesa',
        author: 'Mirna Delgado',
        category: "quinceañera",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
    {
        id: 14,
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        alt: 'Bloque de madera blanca en mesa',
        author: 'Mirna Delgado',
        category: "sesión fotos",
        aspect: 'landscape',
        mostrar_en: "portada"
    },
]


export default galeriaImagenes
