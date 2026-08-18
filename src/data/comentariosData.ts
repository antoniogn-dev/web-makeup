
interface ComentariosData {
    id: number
    name: string
    title: string
    description: string
    valoration: number
}


const comentarios: ComentariosData[] = [
    {
        id: 1,
        name: "Camila Martinez",
        title: "“Me encantó el resultado”",
        description: "El maquillaje quedó precioso y, sobre todo, muy natural. Me sentí cómoda durante toda la sesión y el resultado superó mis expectativas. ¡Definitivamente volveré!",
        valoration: 5
    },
    {
        id: 2,
        name: "Monica Heredia",
        title: "“Me sentí increíble”",
        description: "Tenía un evento importante y quería un maquillaje elegante que resaltara mis facciones. El resultado fue exactamente lo que buscaba. Recibí muchos cumplidos durante toda la noche.",
        valoration: 5
    },
    {
        id: 3,
        name: "Cecilia San Roman",
        title: "“Una experiencia maravillosa”",
        description: "Desde el primer momento recibí una atención muy amable y profesional. Escucharon lo que quería y supieron adaptar el maquillaje perfectamente a mi estilo.",
        valoration: 4
    },
    {
        id: 4,
        name: "Elena Carpio",
        title: "“Duró toda la celebración”",
        description: "Una de las cosas que más me preocupaba era que el maquillaje no durara. ¡Pero quedó impecable durante muchas horas! Incluso después del evento seguía viéndose hermoso.",
        valoration: 5
    },
    {
        id: 5,
        name: "Claudia Bustamante",
        title: "“Cuidan cada detalle”",
        description: "Se nota la experiencia y el cuidado en cada paso. El maquillaje resaltó mis mejores características sin hacerme sentir diferente. Me encantó cómo quedó.",
        valoration: 5
    },
    {
        id: 6,
        name: "Bertha Benitez",
        title: "“100% recomendado”",
        description: "Estoy encantada con el resultado. La atención, el ambiente y el maquillaje fueron excelentes. Si estás buscando sentirte especial para una ocasión importante, definitivamente lo recomiendo.",
        valoration: 5
    },
]


export default comentarios

