import ModalSobreMi from "@/components/ui/ModalSobreMi";
import { philosopher } from "@/libs/fonts";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";



export const metadata: Metadata = {
    title: "Sobre Mi | Mirna Delgado Glave",
    description: "Presentación de Mirna Delgado Glave Maquilladora profesional en Arequipa - Perú",
};


const SobreMiPage = () => {
    return (
        <section>
            {/* portada */}
            <div className="bg-linear-to-r from-red-300 to-yellow-900 bg-cover bg-no-repeat h-25 md:h-60" />

            {/* contenido */}
            <div className="md:w-[70%] mx-auto py-10">

                {/* presentacion */}
                <div className="flex flex-col md:flex-row justify-center items-center p-2 lg:py-20">
                    {/* imagen */}
                    <div className="relative w-full aspect-square md:aspect-auto md:size-200 flex justify-center">
                        {/* relative md:w-[600px] flex justify-center md:size-[800px] */}
                        <Image
                            src="/images/mirna-delgado-glave.png"
                            alt="Mirna Delgado Glave"
                            fill
                            className="rounded-xl"
                        />
                    </div>
                    {/* descripcion */}
                    <div className="flex flex-col md:w-200 px-10 py-8">
                        <h3 className={`${philosopher.className} antialiased text-red-600 font-bold text-4xl md:text-5xl mb-1`}>Mirna delgado Glave</h3>

                        <h4 className="font-bold text-2xl mb-6">Maquilladora Profesional</h4>

                        <p className="mb-5">Hola, soy Mirna.</p>

                        <p className="mb-8">Me especialicé y certifiqué en la agencia TNT agency en la ciudad de Los Ángeles, Estados Unidos, donde tuve el privilegio de formarme con mi maestra Alejandra Barraza. Esa experiencia no solo fortaleció mi técnica, sino que también definió mi visión del maquillaje como un arte que transforma desde lo más auténtico de cada persona.</p>

                        <p className="mb-8">Desde entonces, mi vocación me ha llevado a perfeccionarme constantemente y a disfrutar profundamente cada servicio que realizo. Creo en un enfoque exclusivo y personalizado, ya sea en mi estudio o a domicilio, donde cada detalle está pensado para que vivas mucho más que una sesión de maquillaje: una experiencia.</p>

                        <p className="mb-8">Me apasiona escuchar, observar y descubrir lo que hace única a cada clienta. Ya sea en una boda, un rodaje o un taller, mi trabajo va más allá del maquillaje. Busco crear un espacio de confianza donde puedas relajarte, sentirte cuidada y disfrutar del momento, sabiendo que estás en manos profesionales.</p>

                        <p className="mb-8">Mi objetivo es resaltar tu belleza de forma natural y elegante, respetando tu esencia y haciendo que te sientas segura, cómoda y radiante en cada ocasión.</p>

                        {/* links */}
                        <div className="flex justify-between md:items-center flex-col md:flex-row">
                            <div className="">
                                <ul>
                                    <li className="flex items-center space-x-3 text-gray-600 hover:text-red-600">
                                        <Mail size={16} className="text-red-600" />{" "}
                                        {/* Updated icon color */}
                                        <Link href="mailto:mirnadelgadoglave@gmail.com" >
                                            <span>mirnadelgadoglave@gmail.com</span> {/* Updated email */}
                                        </Link>
                                    </li>
                                    <li className="flex items-center space-x-3 text-gray-600 hover:text-red-600">
                                        <Mail size={16} className="text-red-600" />{" "}
                                        {/* Updated icon color */}
                                        <Link href="mailto:estudio@mirnadelgadoglavemakeup.com">
                                            <span>estudio@mirnadelgadoglavemakeup.com</span> {/* Updated email */}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-x-3 text-gray-600 hover:text-red-600 mt-2 md:mt-0">
                                <Phone size={16} className="text-red-600" />{" "}
                                {/* Added phone icon */}
                                <Link href="tel:+51913349438">
                                    <span>(51) 913349438</span> {/* Dummy phone number */}
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>



                {/* servicios que  ofrecemos */}
                <div className="flex flex-col items-center">
                    <h4 className={`${philosopher.className} antialiased text-red-600 font-bold text-4xl mb-3`}>Te ofrecemos soluciones</h4>
                    <p className="mb-10">Disponemos de un equipo dedicado a brindarte una experiencia increible.</p>

                    <ModalSobreMi />

                </div>
            </div>


        </section>
    )
}
export default SobreMiPage