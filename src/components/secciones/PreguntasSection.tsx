import Image from "next/image"
import { Button } from "../ui/button"
import { philosopher } from "@/libs/fonts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import Link from "next/link"
import { RiWhatsappLine } from 'react-icons/ri'
import LlamadaAccion from "../ui/LlamadaAccion"

interface ItemsProps {
    value: string
    trigger: string
    content: string
}

const items: ItemsProps[] = [
    {
        value: "pregunta1",
        trigger: "¿Con cuanta anticipación debo reservar mi maquillaje de novia?",
        content:
            "Recomendamos reservar con 3 a 6 meses de anticipación, especialmente si tu boda es en temporada alta (abril-diciembre). Esto nos permite agendar la prueba de maquillaje con calma y asegurar disponibilidad para tu fecha. Para fechas muy solicitadas, te sugerimos contactarnos apenas tengas la fecha confirmada.",
    },
    {
        value: "pregunta2",
        trigger: "¿La prueba de maquillaje es indispensable?",
        content:
            "Sí, es un paso clave. La prueba es el momento en el que definimos tu look final, probamos productos y ajustamos cada detalle según tu piel, estilo y preferencias, asegurando un resultado armónico y duradero.",
    },
    {
        value: "pregunta3",
        trigger: "¿Que incluye el servicio de maquillaje para novia?",
        content:
            "En mi servicio de maquillaje para novias incluyo asesoría personalizada, una prueba de maquillaje y/o peinado para definir el look perfecto, maquillaje y/o peinado el día de la boda adaptado a tu estilo y tipo de piel, y la posibilidad de desplazarme al lugar del evento para tu comodidad. Además, si lo necesitas, también puedo maquillar a invitadas, madrina o familia, para que todas luzcan espectaculares.",
    },
    {
        value: "pregunta4",
        trigger: "¿Vas a domicilio o al lugar de la boda?",
        content:
            "Sí, vamos donde tú estés. Nos desplazamos al hotel, casa, venue o cualquier locación donde te estés preparando el día de tu boda. Llegamos con todo nuestro equipo profesional (silla de maquillaje, iluminación, productos) para que tú solo te preocupes de disfrutar el momento.",
    },
]

const items2: ItemsProps[] = [
    {
        value: "pregunta1",
        trigger: "¿Como es la prueba de maquillaje para novia?",
        content:
            "En la prueba de maquillaje nos reunimos en mi estudio para conocernos mejor y decidir juntas el look que mejor te siente. Analizo tus facciones, tu estilo, el vestido y el tipo de boda. A partir de ahí, construiremos el maquillaje perfecto para que te sientas cómoda, radiante y fiel a ti misma.",
    },
    {
        value: "pregunta2",
        trigger: "¿Cuanto tiempo dura el maquillaje profesional?",
        content:
            "Un maquillaje profesional bien realizado, con productos de calidad, preparando bien la piel y técnicas específicas, puede durar entre 8 y 12 horas sin necesidad de retoques importantes. Para bodas y eventos largos, aplico productos resistentes al calor, al sudor y a las lágrimas, para que te sientas perfecta durante todo el día o la noche. ",
    },
    {
        value: "pregunta3",
        trigger: "¿Que marcas utilizas para el maquillaje?",
        content:
            "Trabajo con productos de alta gama que garantizan un acabado impecable, duradero y respetuoso con la piel. En mi caso, utilizo marcas como TNT Cosmetics, Tarte, Too faced, Lancome, Charlotte Tilbury, Dior, MAC, NARS, Yves Saint Laurent, Clinique, entre otras firmas de calidad reconocida a nivel internacional.",
    },
    {
        value: "pregunta4",
        trigger: "¿Que cuidados en la piel debo tener antes de mi boda?",
        content:
            "Mi primer consejo es agendar una cita con un dermatólogo, ya que es el especialista indicado para evaluar tu piel y recomendarte una rutina de cuidado realmente adecuada para ti. Complementa esto con una buena hidratación diaria, tomando suficiente agua, ya que una piel bien hidratada se verá más sana, luminosa y preparada para el maquillaje.",
    },
]


const PreguntasSection = () => {
    return (
        <section className="flex flex-col items-center mt-10 mb-20">
           
           <LlamadaAccion />

            {/* div hojas */}
            <div className="flex flex-col items-center w-[90%] 2xl:w-[70%]">
                <div className="bg-[url('/images/fondo-hojas.jpg')] bg-cover bg-no-repeat w-full h-45 rounded-t-xl -mt-15 z-10 p-3">

                    <h3 className={`${philosopher.className} antialiased text-white text-center font-bold text-[30px] mt-4 mb-2 text-shadow-md text-shadow-black md:text-5xl`}>Preguntas Frecuentes</h3>

                    <p className="text-white text-[16px] text-center text-shadow-md text-shadow-black">Todo lo que necesitas saber para el gran dia</p>

                </div>

                <div className="flex flex-col p-5 gap-4 mb-8 w-full justify-center bg-green-500/20 md:flex-row rounded-b-xl ">

                    <Accordion
                        className="max-w-lg rounded-lg border"
                        defaultValue={["pregunta1"]}
                    >
                        {items.map((item) => (
                            <AccordionItem
                                key={item.value}
                                value={item.value}
                                className="border-b px-4 last:border-b-0"
                            >
                                <AccordionTrigger className={`${philosopher.className} antialiased font-bold text-xl text-gray-800`}>{item.trigger}</AccordionTrigger>
                                <AccordionContent className={`text-gray-500`}>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <Accordion
                        className="max-w-lg rounded-lg border"
                        defaultValue={["pregunta1"]}
                    >
                        {items2.map((item) => (
                            <AccordionItem
                                key={item.value}
                                value={item.value}
                                className="border-b px-4 last:border-b-0"
                            >
                                <AccordionTrigger className={`${philosopher.className} antialiased font-bold text-xl text-gray-800`}>{item.trigger}</AccordionTrigger>
                                <AccordionContent className={`text-gray-500`}>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <p className="text-blue-500 text-xl font-semibold text-center mb-8">¿Si tienes más preguntas?</p>

                <Button className={`${philosopher.className} antialiased bg-red-600 text-xl font-semibold text-white tracking-wider py-6 px-8 hover:bg-red-800 cursor-pointer`}>
                    <Link
                        href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita"
                        target='_blank'
                        rel='noopener noreferrer'
                        className="flex justify-center items-center gap-4"
                    >
                        <RiWhatsappLine className="size-5 font-bold" />
                        Escribeme por Whatsapp
                    </Link>
                </Button>

            </div>
        </section>
    )
}
export default PreguntasSection