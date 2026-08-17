import BienvenidaSection from "@/components/secciones/BienvenidaSection"
import HeroSection from "@/components/secciones/HeroSection"
import PreguntasSection from "@/components/secciones/PreguntasSection"
import ServiciosSection from "@/components/secciones/ServiciosSection"

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <BienvenidaSection />
            <ServiciosSection />
            <PreguntasSection />
            <h1 className="text-5xl">Home Page</h1>
        </main>
    )
}
export default HomePage