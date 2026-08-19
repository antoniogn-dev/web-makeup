import { philosopher } from "@/libs/fonts"
import Link from "next/link"
import { RiWhatsappLine } from 'react-icons/ri'
import { RiMailLine } from 'react-icons/ri'
import { RiMapPinLine } from 'react-icons/ri'


const ContactosSection = () => {
    return (
        <section className="bg-rose-300 flex justify-center">
            <div className="flex flex-col md:flex-row lg:w-[90%] xl:w-[70%] w-full lg:py-20 mb-20 px-5">
                {/* datos */}
                <div className="flex flex-col lg:w-1/2 p-5">
                    <h5 className={`text-red-600 text-2xl mb-3`}>Contacto</h5>
                    <h3 className={`${philosopher.className} antialiased text-5xl font-bold mb-6`}>Reserva tu Cita</h3>
                    <p className="font-semibold md:text-xl mb-10">Escríbeme y diseñaremos juntas el look perfecto para tu ocasión especial, cuidando cada detalle para que luzcas única.</p>

                    <Link href="tel:+51913349438">
                        <p className="flex items-center gap-3 cursor-pointer mb-5">
                            <RiWhatsappLine className="text-red-600 size-4.5 md:size-5.75" />
                            <span className="hover:text-red-600 hover:font-semibold text-[14px] md:text-[18px]">+51 913 349 438</span>
                        </p>
                    </Link>
                    <Link href="mailto:mirnadelgadoglave@gmail.com">
                        <p className="flex items-center gap-3 cursor-pointer mb-5">
                            <RiMailLine className="text-red-600 size-4.5 md:size-5.75" />
                            <span className="hover:text-red-600 hover:font-semibold text-[14px] md:text-[18px]">mirnadelgadoglave@gmail.com</span>
                        </p>
                    </Link>
                    <Link href="mailto:estudio@mirnadelgadoglavemakeup.com">
                        <p className="flex items-center gap-3 cursor-pointer mb-5">
                            <RiMailLine className="text-red-600 size-4.5 md:size-5.75" />
                            <span className="hover:text-red-600 hover:font-semibold text-[14px] md:text-[18px]">estudio@mirnadelgadoglavemakeup.com</span>
                        </p>
                    </Link>
                    <p className="flex items-center gap-3">
                        <RiMapPinLine className="text-red-600 size-4.5 md:size-5.75" />
                        <span className="md:text-[18px] text-[14px] w-full md:w-125">Urb. Quinta tristan S-4 José Luis Bustamante y Rivero Arequipa - Perú</span>
                    </p>
                </div>

                {/* mapa */}

                {/* https://www.google.com/maps/@-16.4250268,-71.530697,18.75z?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D */}
                <div className="w-full lg:w-1/2 mt-5 lg-mt-0">
                    <div className="relative w-full h-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1137.7727342570188!2d-71.53069699201806!3d-16.42502678150256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1787100471146!5m2!1ses!2spe" className="absolute inset-0 h-full w-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactosSection