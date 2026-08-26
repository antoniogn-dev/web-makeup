import { philosopher } from "@/libs/fonts"
import Link from "next/link"
import { RiWhatsappLine } from 'react-icons/ri'
import { RiMailLine } from 'react-icons/ri'
import { RiMapPinLine } from 'react-icons/ri'


const ContactosSection = () => {
    return (
        <section className="bg-fondo flex justify-center">
            <div className="flex flex-col md:flex-row lg:w-[90%] xl:w-[70%] w-full lg:py-20 mb-20 px-5">
                {/* datos */}
                <div className="flex flex-col lg:w-1/2 p-5">
                    <h5 className={`text-titulos text-2xl mb-3`}>Contacto</h5>
                    <h3 className={`${philosopher.className} antialiased text-5xl font-bold mb-6`}>Reserva tu Cita</h3>
                    <p className="font-semibold md:text-xl mb-10">Escríbeme y diseñaremos juntas el look perfecto para tu ocasión especial, cuidando cada detalle para que luzcas única.</p>

                    <Link
                        href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita"
                        target="_blank"
                    >
                        <p className="flex items-center gap-3 cursor-pointer mb-5">
                            <RiWhatsappLine className="text-titulos size-4.5 md:size-5.75" />
                            <span className="hover:text-titulos hover:font-semibold text-[14px] md:text-[18px]">+51 913 349 438</span>
                        </p>
                    </Link>
                    <Link href="mailto:mirnadelgadoglave@gmail.com">
                        <p className="flex items-center gap-3 cursor-pointer mb-5">
                            <RiMailLine className="text-titulos size-4.5 md:size-5.75" />
                            <span className="hover:text-titulos hover:font-semibold text-[14px] md:text-[18px]">mirnadelgadoglave@gmail.com</span>
                        </p>
                    </Link>
                    <Link href="mailto:estudio@mirnadelgadoglavemakeup.com">
                        <p className="flex items-center gap-3 cursor-pointer mb-5">
                            <RiMailLine className="text-titulos size-4.5 md:size-5.75" />
                            <span className="hover:text-titulos hover:font-semibold text-[14px] md:text-[18px]">estudio@mirnadelgadoglavemakeup.com</span>
                        </p>
                    </Link>
                    <p className="flex items-center gap-3 mb-5">
                        <RiMapPinLine className="text-titulos size-4.5 md:size-5.75" />
                        <span className="md:text-[18px] text-[14px] w-full md:w-125">Urb. Quinta tristan S-4 José Luis Bustamante y Rivero Arequipa - Perú</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <RiMapPinLine className="text-titulos size-4.5 md:size-5.75" />
                        <span className="md:text-[18px] text-[14px] w-full md:w-125">Estudio: Urb. El Palacio k-6 Sachaca Arequipa - Perú</span>
                    </p>
                </div>

                {/* mapa */}

                <div className="w-full lg:w-1/2 mt-5 lg-mt-0">
                    <div className="relative w-full h-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1913.4772349023501!2d-71.566497!3d-16.4271386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a98c3d16db3%3A0x7a8f8516b2d2c91!2sUrb%20el%20Palacio%20Etapa%201%2C%20Sachaca%2004013!5e0!3m2!1ses!2spe!4v1787756781274!5m2!1ses!2spe" width="600" height="450" className="absolute inset-0 h-full w-full border-0" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>

                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1137.7727342570188!2d-71.53069699201806!3d-16.42502678150256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1787100471146!5m2!1ses!2spe" className="absolute inset-0 h-full w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactosSection