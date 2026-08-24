import PaquetesSection from "@/components/secciones/PaquetesSection";
import LlamadaAccion from "@/components/ui/LlamadaAccion";
import { philosopher } from "@/libs/fonts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export const metadata: Metadata = {
    title: "Servicios | Mirna Delgado Glave",
    description: "Servicios y opciones de maquillaje en Arequipa",
}

const ServiciosPage = () => {
    return (
        <section className="w-full">
            {/* portada */}
            <div className="bg-linear-to-r from-red-300 to-yellow-900 bg-cover bg-no-repeat h-25 md:h-60" />

            {/* contenido */}
            <div className="flex flex-col justify-center items-center my-20">

                {/* titulos */}
                <div className="flex flex-col justify-center items-center md:w-2xl px-4">
                    <h3 className={`${philosopher.className} antialiased text-4xl md:text-5xl font-semibold mb-4`}>Nuestros Servicios</h3>
                    <p className="text-center text-gray-500">Revelamos tu belleza auténtica a travéz del arte y la precisión. Cada servicio es una experiencia personalizada diseñada para realzar tus rasgos únicos con elegancia y sofisticación.</p>
                </div>

                {/* servicios */}
                <div className="flex flex-col md:flex-row mt-10 w-full p-3 gap-4 flex-wrap xl:px-50">

                    {/* novias */}
                    <div className="flex flex-col bg-taupe-400/30 items-start rounded-lg md:w-[66%] md:flex-row md:items-center xl:w-[65%] xl:h-150">

                        <div className="relative mx-auto h-125 w-full xl:h-full overflow-hidden">
                            <Image src="/services/novias.png" alt="novias" fill className="object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg transition-transform duration-500 hover:scale-105" />
                        </div>

                        <div className="h-90 md:w-100 px-4 md:h-full xl:w-250 xl:p-10">
                            <h3 className={`${philosopher.className} antialiased text-red-600/60 text-4xl font-bold mt-8 mb-5 xl:text-5xl`}>Maquillaje de Novias</h3>
                            <p className="text-gray-500 mb-15 xl:mb-20">
                                Diseñado para la longevidad y la perfección radiante. Creamos un look atemporal que resista las lágrimas de alegría, los abrazos y la iluminación fotográfica, asegurando que luzcas impecable durante todo tu día especial.
                            </p>
                            <Link
                                href="#"
                                className="border-2 px-5 py-2 border-red-600/60 rounded-md mt-10 font-semibold tracking-wider text-xl hover:bg-red-600/60 hover:text-white transition-colors duration-500 xl:text-xl"
                            >
                                Reservar
                            </Link>
                        </div>

                    </div>


                    {/* peinados */}
                    <div className="flex flex-col bg-zinc-400/20 items-start rounded-lg md:w-[32%] xl:h-150">

                        <div className="relative mx-auto h-125 w-full md:h-full overflow-hidden">
                            <Image src="/services/peinados.png" alt="novias" fill className="object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" />
                        </div>

                        <div className="px-4 pb-10">
                            <h3 className={`${philosopher.className} antialiased text-red-600/60 text-4xl font-bold mt-8 mb-5 xl:text-5xl`}>Peinados</h3>
                            <p className="text-gray-500 mb-10">
                                Peinados elegantes y estructurados o sueltos y románticos, diseñados para complementar tu maquillaje y atuendo a la perfección.
                            </p>
                            <Link
                                href="#"
                                className="mt-10 font-semibold tracking-wider text-xl hover:text-red-600/60 border-b-2 border-b-red-600/60 transition-colors duration-300 xl:text-2xl"
                            >
                                Reservar
                            </Link>
                        </div>

                    </div>



                    {/* social */}
                    <div className="flex flex-col bg-taupe-400/30 items-start rounded-lg md:w-[32%] md:flex-col-reverse md:justify-between">

                        <div className="relative mx-auto h-125 w-full overflow-hidden">
                            <Image src="/services/social.png" alt="novias" fill className="object-cover rounded-t-lg md:rounded-b-lg md:rounded-t-none transition-transform duration-500 hover:scale-105" />
                        </div>

                        <div className="px-4 mb-10 md:pt-5">
                            <h3 className={`${philosopher.className} antialiased text-red-600/60 text-4xl font-bold mt-8 mb-5 md:mt-0 xl:text-5xl`}>Maquillaje Social</h3>
                            <p className="text-gray-500 mb-10">
                                Ideal para eventos especiales, galas o fiestas. Un look que equilibra el glamour y la frescura para destacar en cualquier ocasión.
                            </p>
                            <Link
                                href="#"
                                className="mt-10 font-semibold tracking-wider text-xl hover:text-red-600/60 border-b-2 border-b-red-600/60 transition-colors duration-300"
                            >
                                Reservar
                            </Link>
                        </div>

                    </div>

                    {/* quinceañeras */}
                    <div className="flex flex-col bg-pink-200/40 items-start rounded-lg md:w-[32%] md:justify-between">

                        <div className="relative mx-auto h-125 w-full overflow-hidden">
                            <Image src="/services/quinceaneras.png" alt="novias" fill className="object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" />
                        </div>

                        <div className="px-4 mb-10">
                            <h3 className={`${philosopher.className} antialiased text-red-600/60 text-4xl font-bold mt-8 mb-5 md:mt-0`}>Quinceañeras</h3>
                            <p className="text-gray-500 mb-10">
                                Looks vibrantes, juveniles y frescos que capturan la esencia de esta celebración inolvidable, manteniéndose fieles a su estilo personal.
                            </p>
                            <Link
                                href="#"
                                className="mt-10 font-semibold tracking-wider text-xl hover:text-red-600/60 border-b-2 border-b-red-600/60 transition-colors duration-300"
                            >
                                Reserva
                            </Link>
                        </div>

                    </div>

                    {/* sesion fotos */}
                    <div className="flex flex-col bg-mist-500/10 items-start rounded-lg md:w-[32%] md:flex-col-reverse md:justify-between">

                        <div className="relative mx-auto h-125 w-full overflow-hidden">
                            <Image src="/services/sesion_fotos.png" alt="novias" fill className="object-cover rounded-t-lg md:rounded-b-lg md:rounded-t-none transition-transform duration-500 hover:scale-105" />
                        </div>

                        <div className="px-4 mb-10 md:pt-5">
                            <h3 className={`${philosopher.className} antialiased text-red-600/60 text-4xl font-bold mt-8 mb-5 md:mt-0`}>Sesión de Fotos</h3>
                            <p className="text-gray-500 mb-10">
                                Maquillaje de alta definición meticulosamente adaptado para iluminación de estudio y fotografía profesional, asegurando un acabado impecable en cámara.
                            </p>
                            <Link
                                href="#"
                                className="mt-10 font-semibold tracking-wider text-xl hover:text-red-600/60 border-b-2 border-b-red-600/60 transition-colors duration-300"
                            >
                                Reservar
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

             {/* paquetes */}
            <div className="my-30">

                {/* titulos */}
                <div className="flex flex-col items-center md:w-200 mx-auto mb-10">
                    <p className="text-red-600 font-semibold text-lg tracking-wider mb-4 xl:text-xl">Nuestros Paquetes</p>
                    <p className={`${philosopher.className} antialiased font-bold text-5xl mb-8 text-center`}>Elige tu experiencia nupcial</p>
                    <p className="text-gray-500 text-center xl:text-xl">diseñados para realzar tu belleza natural con la maxima elegancia y sofisticación. Cada detalle de tu gran dia merece ser perfecto.</p>
                </div>


                <div className="">
                    <PaquetesSection />
                </div>

            </div>

            {/* llamada a la accion */}
            <div className="">
                <LlamadaAccion />
            </div>

           

        </section>
    )
}
export default ServiciosPage