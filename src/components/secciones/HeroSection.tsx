import { philosopher } from "@/libs/fonts"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            {/* Imagen de fondo */}
            <Image
                src="/images/fondo-mirna-delgado.png"
                alt="fondo mirna delgado glave"
                fill
                priority
                className="object-cover -z-10"
            />

            {/* Overlay oscuro opcional, para que el texto resalte */}
            {/* <div className="absolute inset-0 bg-black/50 -z-10" /> */}

            {/* Contenido encima de la imagen */}
            <div className="flex flex-col justify-start text-white px-4 lg:w-[70%]">
                <h1
                    className={`${philosopher.className} text-center text-[14px] md:text-xl w-67.5 md:w-100 md:font-bold rounded-full tracking-wider text-white font-semibold mb-4 bg-black/20 scale-y-150 text-shadow-black text-shadow-xs md:mb-10`}
                >
                    Maquilladora Profesional Visagista
                </h1>
                
                <div className="flex flex-col md:flex-row md:gap-3">
                    <h2
                        className={`${philosopher.className} text-5xl md:text-7xl text-shadow-xs text-shadow-black scale-y-150 mt-4 mb-10 md:mt-0`}
                    >
                        Mirna
                    </h2>
                     <h2
                        className={`${philosopher.className} text-5xl -mt-5 md:text-7xl text-shadow-xs text-shadow-black scale-y-150 mb-10 md:mt-0`}
                    >
                        Delgado Glave
                    </h2>
                </div>

                <div className="bg-titulos shadow-md shadow-black/50 w-25 h-1 rounded-lg mb-5" />
                <p
                    className="text-lg text-shadow-black text-shadow-xs w-[60%] md:w-200 md:text-3xl"
                >
                    Resaltamos tu belleza natural con maquillaje y peinados profesionales, adaptados a tu estilo y personalidad. Cada detalle está pensado para que luzcas radiante y segura en cualquier ocasión especial.
                </p>

                <Button
                    className={`${philosopher.className} bg-titulos w-50 py-6 font-semibold text-lg hover:bg-titulos/70 transition-colors duration-300 mt-10 border border-white`}
                >
                    <Link
                        href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        RESERVAR CITA
                    </Link>
                </Button>
            </div>
        </section>
    )
}
export default HeroSection