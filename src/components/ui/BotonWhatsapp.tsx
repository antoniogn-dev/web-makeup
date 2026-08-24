"use client"

import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"

const BotonWhatsapp = () => {
    return (
        <Link
            href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-titulos text-white shadow-lg transition-transform hover:scale-110 hover:bg-textos"
        >
            <RiWhatsappLine className="size-7" />
        </Link>
    )
}

export default BotonWhatsapp