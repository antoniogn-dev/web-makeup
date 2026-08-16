import BienvenidaSection from "@/components/secciones/BienvenidaSection"
import HeroSection from "@/components/secciones/HeroSection"

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <BienvenidaSection />
            <h1 className="text-5xl">Home Page</h1>
        </main>
    )
}
export default HomePage