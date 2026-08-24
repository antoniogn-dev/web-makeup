

interface detalleType {
    value: string
    trigger: string
    data: string[]
}

export interface PaqueteData {
    id: string
    name: string
    tagline: string
    badge: string | null
    detalle: detalleType[]
}


export const paquetesData: PaqueteData[] = [
    {
        id: 'platinum',
        name: 'Platinum',
        tagline: 'La experiencia más completa y exclusiva',
        badge: 'Más solicitado',
        detalle: [
            {
                value: "entrevista",
                trigger: "ANTES DE LA BODA",
                data: [
                    'Entrevista previa vía video llamada',
                    'Asesoramiento de peinado y maquillaje',
                    'Prueba de maquillaje',
                    'Análisis de tipo de piel',
                    'Mascarilla hidratante según tipo de piel (sábana de hidratación)',
                ]
            },
            {
                value: "maquillaje",
                trigger: "MAQUILLAJE - DIA DE LA BODA",
                data: [
                    'Skincare completo: piel, cara y cuello',
                    'Preparación de labios',
                    'Aplicación de hidratantes y contorno de ojos',
                    'Primer',
                    'Customización de base según tono de piel',
                    'Diseño de cejas',
                    'Blush en crema y polvo',
                    'Contouring en crema y polvo',
                    'Iluminador en crema y en polvo',
                    'Pestañas postizas estilo natural o MINK ($45) incluidas',
                    'Perfect blending en sombras',
                    'Diseño de labios con delineador, labial y sellado (gloss, mate o semi mate)',
                    'Kit de retoque para la celebración',
                ]
            },
            {
                value: "peinado",
                trigger: "PEINADO - DIA DE LA BODA",
                data: [
                    'Prueba de peinado',
                    'Preparación de cabello con productos específicos',
                    'Rellenos',
                    'Productos de fijación de alta gama',
                    'Utensilios de calor de alta gama',
                    'Colocación de velo o accesorios',
                    'Cambio de peinado después de la ceremonia (según disponibilidad)',
                ]
            },
            {
                value: "comodidad",
                trigger: "COMODIDAD GARANTIZADA",
                data: [
                    'Silla y luz especial de maquillaje portable',
                    'Llevada al lugar donde la novia decida alistarse',
                ]
            }
        ],
    },

    {
        id: 'gold',
        name: 'Gold',
        tagline: 'Elegancia completa para tu gran día',
        badge: null,
        detalle: [
            {
                value: "entrevista",
                trigger: "ANTES DE LA BODA",
                data: [
                    'Entrevista previa vía video llamada',
                    'Asesoramiento de peinado y maquillaje',
                    'Prueba de maquillaje',
                    'Análisis de tipo de piel',
                    'Mascarilla hidratante según tipo de piel (sábana de hidratación)',
                ]
            },
            {
                value: "maquillaje",
                trigger: "MAQUILLAJE - DIA DE LA BODA",
                data: [
                    'Preparación de piel: cara y cuello',
                    'Preparación de labios',
                    'Aplicación de hidratantes y contorno de ojos',
                    'Primer',
                    'Customización de base según tono de piel',
                    'Diseño de cejas',
                    'Blush en polvo',
                    'Contouring en polvo',
                    'Iluminador en polvo',
                    'Pestañas postizas estilo natural',
                    'Perfect blending en sombras',
                    'Diseño de labios',
                    'Fijación',
                    'Kit de retoque para la celebración',
                ]
            },
            {
                value: "peinado",
                trigger: "PEINADO - DIA DE LA BODA",
                data: [
                    'Prueba de peinado',
                    'Preparación de cabello con productos específicos',
                    'Rellenos',
                    'Productos de fijación de alta gama',
                    'Utensilios de calor de alta gama',
                    'Colocación de velo o accesorios',
                ]
            },
            {
                value: "comodidad",
                trigger: "COMODIDAD GARANTIZADA",
                data: [
                    'Silla y luz especial de maquillaje portable',
                    'Llevada al lugar donde la novia decida alistarse',
                ]
            }
        ],
    },
    {
        id: 'ejecutiva',
        name: 'Ejecutiva',
        tagline: 'Esencial y refinado para la novia práctica',
        badge: null,
        detalle: [
            {
                value: "entrevista",
                trigger: "ANTES DE LA BODA",
                data: [
                    'Entrevista previa vía video llamada',
                    'Asesoramiento de peinado y maquillaje',
                    'Prueba de maquillaje',
                    'Análisis de tipo de piel',
                    'Mascarilla hidratante según tipo de piel (sábana de hidratación)',
                ]
            },
            {
                value: "maquillaje",
                trigger: "MAQUILLAJE - DIA DE LA BODA",
                data: [
                    'Preparación de piel: cuello, labios y ojeras',
                    'Hidratantes y contorno de ojos',
                    'Primer',
                    'Customización de base según tono de piel',
                    'Diseño de cejas',
                    'Contouring en polvo',
                    'Pestañas postizas estilo natural',
                    'Perfect blending en sombras',
                    'Diseño de labios',
                ]
            },
            {
                value: "peinado",
                trigger: "PEINADO - DIA DE LA BODA",
                data: [
                    'Incluye rellenos',
                    'Productos de fijación de alta gama',
                    'Utensilios de calor de alta gama',
                    'Colocación de velo y accesorios',
                ]
            },
            {
                value: "comodidad",
                trigger: "COMODIDAD GARANTIZADA",
                data: [
                    'Silla y luz especial de maquillaje portable',
                    'Llevada al lugar donde la novia decida alistarse',
                ]
            }
        ],
    }
]