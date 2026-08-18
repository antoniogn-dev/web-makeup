import { Metadata } from "next";
import BienvenidaSection from "@/components/secciones/BienvenidaSection"
import HeroSection from "@/components/secciones/HeroSection"
import PreguntasSection from "@/components/secciones/PreguntasSection"
import ServiciosSection from "@/components/secciones/ServiciosSection"
import MensajeSection from "@/components/secciones/MensajeSection";
import GaleriaSection from "@/components/secciones/GaleriaSection";
import { ComentarioSection } from "@/components/secciones/ComentarioSection";


export const metadata: Metadata = {
    title: "Home Page | Mirna Delgado Glave",
    description: "Maquilladora profesional en Arequipa - Perú",
};

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <BienvenidaSection />
            <ServiciosSection />
            <PreguntasSection />
            <MensajeSection />
            <GaleriaSection />
            <ComentarioSection />
        </main>
    )
}
export default HomePage