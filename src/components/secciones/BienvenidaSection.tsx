import { philosopher } from "@/libs/fonts"
import { Button } from "../ui/button"



const BienvenidaSection = () => {
    return (
        <section className="flex flex-col py-20 lg:flex-row 2xl:px-50">
            <div className="flex gap-2 p-2 sm:px-10 lg:w-2/3 items-center lg:gap-4">
                <div className="bg-[url('/images/imagen-rectangular1.webp')] bg-cover bg-no-repeat h-100 w-full rounded-lg bg-amber-200 md:h-150 lg:h-180" />
                <div className="bg-[url('/images/imagen-rectangular2.webp')] bg-cover bg-no-repeat h-100 w-full rounded-lg mt-10 md:h-150 lg:h-180 lg:mt-20" />
                <div className="bg-[url('/images/imagen-rectangular3.webp')] bg-cover bg-no-repeat h-100 w-full rounded-lg md:h-150 lg:h-180" />
                <div className="bg-[url('/images/imagen-rectangular4.webp')] bg-cover bg-no-repeat h-100 w-full rounded-lg mt-10  md:h-150 lg:h-180 lg:mt-20" />

            </div>
            <div className="flex flex-col mt-10 p-4 sm:p-10 lg:w-1/3 2xl:w-162.5 lg:justify-center">
                <h4 className={`${philosopher.className} antialiased text-red-600 font-bold text-xl mb-4 lg:text-2xl`}>Bienvenidas</h4>
                <h2 className={`${philosopher.className} antialiased text-3xl font-bold text-blue-400 mb-2 lg:text-4xl`}>Mi Estudio de Belleza</h2>
                <p className="text-gray-500 lg:text-xl">Bienvenida a Mirna Delgado Glave Studio, un espacio dedicado a realzar tu belleza con elegancia, técnica y pasión. Nos especializamos en maquillaje profesional y peinados personalizados, diseñados para resaltar tu estilo único y acompañarte en tus momentos más importantes. Cada servicio es una experiencia pensada en ti, donde cuidamos cada detalle para que te sientas segura, radiante y completamente tú. Ya sea para un evento especial, una celebración o el día más importante de tu vida, estamos aquí para hacer que luzcas y te sientas espectacular.</p>

                <Button className={`${philosopher.className} antialiased bg-red-600 mt-15 font-semibold text-xl py-6 px-5 hover:bg-red-800 self-start`}>SERVICIOS</Button>
            </div>
        </section>
    )
}
export default BienvenidaSection