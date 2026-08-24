import ModalPresentacion from "@/components/ui/ModalPresentacion";
import ModalServicios from "@/components/ui/ModalServicios";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Sobre Mi | Mirna Delgado Glave",
    description: "Presentación de Mirna Delgado Glave Maquilladora profesional en Arequipa - Perú",
};


const SobreMiPage = () => {
    return (
        <section>
            {/* portada */}
            <div className="bg-linear-to-l from-black to-yellow-900 bg-cover bg-no-repeat h-25 md:h-60" />

            {/* contenido pagina */}

            {/* presentacion */}
            <div className="md:w-[80%] mx-auto py-10 2xl:w-[70%]">

                <ModalPresentacion />

            </div>

            {/* servicios que  ofrecemos */}
            <div className="xl:px-5 2xl:px-40">

                <ModalServicios />
            </div>




        </section>
    )
}
export default SobreMiPage