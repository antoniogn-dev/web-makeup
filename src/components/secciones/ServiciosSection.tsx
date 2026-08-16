import { philosopher } from "@/libs/fonts"
import ServicioCard from "../ui/ServicioCard"



interface ServiciosProps {
    imagen: string
    titulo: string
    descripcion: string
}

const servicios: ServiciosProps[] = [
    {
        imagen: "/iconos/bride.png",
        titulo: "Novias",
        descripcion: "Creamos un look sofisticado y duradero, pensado para que luzcas radiante y elegante."
    },
    {
        imagen: "/iconos/cheers.png",
        titulo: "Maquillaje Social",
        descripcion: "Maquillaje diseñado con detalle y precisión para lograr un look armonioso y elegante."
    },
    {
        imagen: "/iconos/braid.png",
        titulo: "Peinado",
        descripcion: "Creamos peinados sofisticados que reflejan elegancia y perfección en cada detalle."
    },
    {
        imagen: "/iconos/camera.png",
        titulo: "Sesion Fotos",
        descripcion: "Realzamos tu belleza con un acabado profesional en cada toma."
    },
]

const ServiciosSection = () => {
    return (
        <section className="py-10">
            <h2 className={`${philosopher.className} antialiased font-bold text-red-600 text-2xl text-center mb-15`}>Servicios Para Cada Ocación</h2>
            <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:px-20 lg:px-10 lg:grid-cols-3 xl:grid-cols-4 xl:px-5 2xl:px-50">
                {
                    servicios.map(item => (
                        <ServicioCard key={item.titulo} {...item} />
                    ))
                }
            </div>
        </section>
    )
}
export default ServiciosSection