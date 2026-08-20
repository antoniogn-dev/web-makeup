import Image from "next/image"
import { Button } from "./button"
import { philosopher } from "@/libs/fonts"
import Link from "next/link"


const LlamadaAccion = () => {
    return (
        <div className="relative bg-[url('/images/fondo-rosado.jpg')] bg-contain bg-fixed flex flex-col h-150 items-center px-5 w-full lg:flex-row lg:items-center 2xl:px-80 lg:h-100 xl:gap-4">

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-red-700/50" />

            <Image src="/images/logo-letras.png" height={150} width={180} alt="fondo Mirna Delgado" className="relative my-10 lg:mt-0" />

            <div className="relative flex flex-col">
                <h3 className={`${philosopher.className} antialiased text-white text-4xl font-bold text-center text-shadow-md text-shadow-black/50 mb-5 lg:px-10 xl:text-5xl`}>Agenda tu experiencia de belleza y resalta lo mejor de ti.</h3>
                <p className="text-white text-center mb-10 text-shadow-md text-shadow-black/70 text-xl">Pon tu belleza en manos expertas y vive una experiencia profesional única.</p>
            </div>

            <Button
                variant="outline"
                className={`relative ${philosopher.className} antialiased bg-transparent text-white font-semibold text-xl py-8 px-6 cursor-pointer`}
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
    )
}
export default LlamadaAccion