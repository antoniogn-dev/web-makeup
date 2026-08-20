import GaleriaPortafolio from "@/components/secciones/GaleriaPortafolio";
import LlamadaAccion from "@/components/ui/LlamadaAccion";
import { philosopher } from "@/libs/fonts"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Portafolio | Mirna Delgado Glave",
    description: "Portafolio de Maquilladora profesional en Arequipa - Perú",
};


const PortafolioPage = () => {

    return (
        <section className="w-full">
            {/* portada */}
            <div className="bg-linear-to-r from-red-300 to-yellow-900 bg-cover bg-no-repeat h-25 md:h-60" />

            {/* contenido */}
            <div className={`md:w-[70%] mx-auto mt-15 px-5 mb-40`}>

                <h3 className={`${philosopher.className} antialiased  text-4xl font-bold mb-4`}>Portafolio</h3>
                <p className="text-gray-500 md:w-280 mb-10">Descubre una selección de trabajos de maquillaje que resaltan la belleza y personalidad de cada rostro. Cada imagen refleja atención al detalle, técnica y creatividad, desde looks naturales y elegantes hasta estilos sofisticados para ocasiones especiales.</p>

                {/* galeria */}
                <GaleriaPortafolio />

            </div>

            {/* llamada a la accion */}
            <LlamadaAccion />


        </section>
    )
}

export default PortafolioPage