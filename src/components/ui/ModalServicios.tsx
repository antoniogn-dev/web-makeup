"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { RiWhatsappLine } from 'react-icons/ri'
import { X } from "lucide-react"
import { philosopher } from "@/libs/fonts"


const ModalServicios = () => {

    const [openImage, setOpenImage] = useState<string | null>(null);

    return (

        <div className="flex flex-col py-30 px-10">
            <h4 className={`${philosopher.className} antialiased text-titulos font-bold text-4xl mb-3 sm:text-center`}>Te ofrecemos soluciones</h4>
            <p className="mb-10 sm:text-center">Disponemos de un equipo dedicado a brindarte una experiencia increible.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {/* diplomas */}
                <div className="flex flex-col gap-y-2 h-130">

                    {/* diplomas1 */}
                    <div
                        className="relative w-full aspect-auto flex-1 flex justify-center cursor-pointer group"
                        onClick={() => setOpenImage("/images/diploma1.webp")}
                    >
                        <Image
                            src="/images/diploma1.webp"
                            alt="diploma maquillaje"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </div>

                    {/* diplomas2 */}
                    <div
                        className="relative w-full aspect-auto flex-1 flex justify-center cursor-pointer group"
                        onClick={() => setOpenImage("/images/diploma2.webp")}
                    >
                        <Image
                            src="/images/diploma2.webp"
                            alt="diploma maquillaje"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                    </div>

                </div>

                {/* imagen 1 */}
                <div className="bg-[url('/images/maquillaje.webp')] bg-position-[630px] rounded-lg flex items-end justify-center pb-20 h-130">
                    <p className="text-white text-5xl font-bold text-shadow-md text-shadow-black">Maquillaje</p>
                </div>

                {/* imagen 2 */}
                <div className="bg-[url('/images/peinado.webp')] bg-center rounded-lg flex items-end justify-center pb-20 h-130">
                    <p className="text-white text-5xl font-bold text-shadow-md text-shadow-black">Peinados</p>
                </div>

                {/* call to action */}
                <div className="relative bg-[url('/images/fondo-rosado.jpg')] bg-cover bg-fixed flex flex-col h-130 py-15 px-10 rounded-lg">
                    {/* Capa oscura */}
                    <div className="absolute inset-0 bg-red-700/50 rounded-lg" />

                    <p className="text-white z-1 font-bold text-4xl mb-5 text-shadow-md text-shadow-black/50 ">Agenda tu experiencia de belleza y resalta lo mejor de ti</p>
                    <p className="z-1 text-white text-xl mb-10">Pon tu belleza en manos expertas y vive una experiencia única.</p>

                    <Link href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita" className="z-1 flex items-center gap-3 border-3 border-white justify-center py-4 px-2 rounded-lg cursor-pointer hover:bg-white/80 text-white text-xl font-semibold tracking-wider hover:text-red-600 transition-colors">
                        <RiWhatsappLine className="size-5" />
                        RESERVAR CITA
                    </Link>
                </div>

                {/* Modal / Lightbox */}
                {openImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        onClick={() => setOpenImage(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenImage(null)}
                            aria-label="Cerrar imagen"
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div
                            className="relative h-[80vh] w-full max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={openImage}
                                alt="diploma maquillaje ampliado"
                                fill
                                className="rounded-xl object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
export default ModalServicios