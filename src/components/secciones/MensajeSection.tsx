import { philosopher } from "@/libs/fonts"



const MensajeSection = () => {
    return (
        <section className="mt-10 mb-20">

            <div className="relative bg-[url('/images/fondo-seccion-mensajes.webp')] bg-cover bg-no-repeat bg-fixed flex flex-col items-center h-62.5 justify-center">
                
                {/* Capa oscura */}
                <div className="absolute inset-0 bg-pink-800/20" />

                <h3 className={`${philosopher.className} z-10 antialiased text-white text-xl px-5 text-shadow-md text-shadow-black/30 font-bold text-center mb-4 md:text-3xl xl:px-40 2xl:px-50 2xl:text-4xl`}>El maquillaje no solo transforma el rostro, sino que potencia lo que ya existe dentro. Seguridad, actitud y esencia. Cuando una mujer se maquilla, no se oculta… <span className="text-red-600">SE EXPRESA</span>.</h3>
                <div className="w-25 bg-red-600 h-0.5 rounded-full"></div>
            </div>
        </section>
    )
}
export default MensajeSection