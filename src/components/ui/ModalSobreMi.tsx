"use client"

import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from 'react-icons/ri'


const ModalSobreMi = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {/* diplomas */}
            <div className="flex flex-col gap-y-2">

                {/* diplomas1 */}
                <div className="relative w-full aspect-auto md:flex-1 flex justify-center cursor-pointer group">
                    <Image src="/images/diploma1.webp" alt="diploma maquillaje" fill className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>

                {/* diplomas2 */}
                <div className="relative w-full aspect-auto md:flex-1 flex justify-center cursor-pointer group">
                    <Image src="/images/diploma2.webp" alt="diploma maquillaje" fill className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>

            </div>

            {/* imagen 1 */}
            <div className="">

            </div>

            {/* imagen 2 */}
            <div className="">

            </div>

            {/* call to action */}
            <div className="relative bg-[url('/images/fondo-rosado.jpg')] bg-cover bg-fixed flex flex-col h-130 py-15 px-10 rounded-lg">
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-red-700/50 rounded-lg" />

                <p className="text-white z-1 font-bold text-4xl mb-5 text-shadow-md text-shadow-black/50 ">Agenda tu experiencia de belleza y resalta lo mejor de ti</p>
                <p className="z-1 text-white text-xl mb-20">Pon tu belleza en manos expertas y vive una experiencia única.</p>

                <Link href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita" className="z-1 flex items-center gap-3 border-3 border-white justify-center py-4 px-2 rounded-lg cursor-pointer hover:bg-white text-white text-xl font-semibold tracking-wider hover:text-red-600">
                    <RiWhatsappLine className="size-5" />
                   RESERVAR CITA
                </Link>
            </div>
        </div>
    )
}
export default ModalSobreMi