import { philosopher } from "@/libs/fonts"
import Image from "next/image"
import { Button } from "./ui/button"

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            {/* Imagen de fondo */}
            <Image
                src="/images/fondo-mirna-delgado.png"
                alt=""
                fill
                priority
                className="object-cover -z-10"
            />

            {/* Overlay oscuro opcional, para que el texto resalte */}
            {/* <div className="absolute inset-0 bg-black/50 -z-10" /> */}

            {/* Contenido encima de la imagen */}
            <div className="flex flex-col justify-start text-white px-4 lg:w-[70%]">
                <h1
                    className={`${philosopher.className} text-center text-[14px] md:text-xl w-67.5 md:w-100 md:font-bold rounded-full tracking-wider text-red-600 font-semibold mb-4 bg-black/50 scale-y-150 text-shadow-black text-shadow-xs md:mb-10`}
                >
                    Maquilladora Profesional Visagista
                </h1>
                <h2
                    className={`${philosopher.className} text-[30px] md:text-7xl text-shadow-xs text-shadow-black font-semibold scale-y-150 mt-0 mb-10`}
                >
                    Mirna Delgado Glave
                </h2>
                <p
                    className="text-lg text-shadow-black text-shadow-xs md:w-200 md:text-3xl"
                >
                    Resaltamos tu belleza natural con maquillaje y peinados profesionales, adaptados a tu estilo y personalidad. Cada detalle está pensado para que luzcas radiante y segura en cualquier ocasión especial.
                </p>

                <Button className={`${philosopher.className} bg-red-600 w-50 py-6 font-semibold text-lg hover:bg-red-800 transition-colors duration-300 mt-10`}>RESERVAR CITA</Button>
            </div>
        </section>
    )
}
export default HeroSection