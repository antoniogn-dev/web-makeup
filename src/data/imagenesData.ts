
type CategoryTypes = "novias" | "maquillaje social" | "peinado" | "quinceañera" | "sesión fotos"
type MostrarType = "portada" | "portafolio"

interface ImagenesData {
    id: number
    url: string
    alt: string
    author: string
    category: CategoryTypes
    mostrar_en: MostrarType
}


const galeriaImagenes: ImagenesData[] = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706520/peinado-03_nng7w0.webp',
        alt: 'Peinado de novia',
        author: 'Mirna Delgado',
        category: 'peinado',
        mostrar_en: "portada"
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706519/maquillaje-05_gqaywp.webp',
        alt: 'Maquillaje modelo',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portada"
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706485/maquillaje-02_qty1wl.webp',
        alt: 'Peinado novia',
        author: 'Mirna Delgado',
        category: "peinado",
        mostrar_en: "portada"
    },
    {
        id: 4,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706518/maquillaje-04_f1qc3e.webp',
        alt: 'Maquillaje social a staff',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portada"
    },
    {
        id: 5,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706485/peinado-02_rxu7nm.webp',
        alt: 'Peinado novia con rulos',
        author: 'Mirna Delgado',
        category: "peinado",
        mostrar_en: "portada"
    },
    {
        id: 6,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706545/social-01_rurkf6.webp',
        alt: 'Maquillaje para sesion de fotos',
        author: 'Mirna Delgado',
        category: "sesión fotos",
        mostrar_en: "portada"
    },
    {
        id: 7,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706544/peinado-05_fusq6e.webp',
        alt: 'Peinado de novia pelo suelto',
        author: 'Mirna Delgado',
        category: "peinado",
        mostrar_en: "portada"
    },
    {
        id: 8,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706545/sesion-01_wwgjyx.webp',
        alt: 'Maquillaje para sesion de fotos en pasarela',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portada"
    },
    {
        id: 9,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706519/peinado-04_zp952w.webp',
        alt: 'Estilo de peinado',
        author: 'Mirna Delgado',
        category: "peinado",
        mostrar_en: "portafolio"
    },
    {
        id: 10,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706447/maquillaje-03_wdv8bp.webp',
        alt: 'Modelo maquillada para evento',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portada"
    },
    {
        id: 11,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706485/peinado-01_yr9ls9.webp',
        alt: 'Maquillaje de novia',
        author: 'Mirna Delgado',
        category: "novias",
        mostrar_en: "portada"
    },
    {
        id: 12,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1787706467/maquillaje-01_wn4mpg.webp',
        alt: 'Maquillaje de modelo en proceso',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portafolio"
    },
    {
        id: 13,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1792597376/IMG_1387_iprh7g.jpg',
        alt: 'Peinado de Ejemplo',
        author: 'Mirna Delgado',
        category: "peinado",
        mostrar_en: "portafolio"
    },
    {
        id: 14,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1792597362/IMG_1523_ecxwnh.jpg',
        alt: 'Retoque de modelo para pasarela',
        author: 'Mirna Delgado',
        category: "peinado",
        mostrar_en: "portafolio"
    },
    {
        id: 15,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1792597303/mirna-delgado-glave_qejjsw.jpg',
        alt: 'Maquillaje casual o social',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portada"
    },
    {
        id: 16,
        url: 'https://res.cloudinary.com/di9p7jkxo/image/upload/v1792597346/IMG_1520_iaopic.jpg',
        alt: 'Retoques a modelo antes de paso por pasarela',
        author: 'Mirna Delgado',
        category: "maquillaje social",
        mostrar_en: "portafolio"
    },
    
]


export default galeriaImagenes

