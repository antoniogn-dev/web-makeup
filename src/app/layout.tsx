import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/libs/fonts";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";
import BotonWhatsapp from "@/components/ui/BotonWhatsapp";



export const metadata: Metadata = {
    title: {
        default: "Maquilladora Profesional en Arequipa | Mirna Delgado Glave",
        template: "%s | Mirna Delgado Glave",
    },
    description:
        "Maquilladora profesional en Arequipa. Especialista en maquillaje social, novias y peinados. Reserva tu cita.",
    metadataBase: new URL("https://mirnadelgadoglavemakeup.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Mirna Delgado Glave | Maquilladora Profesional en Arequipa",
        description:
            "Maquillaje profesional para novias, eventos y ocasiones especiales en Arequipa.",
        url: "https://mirnadelgadoglavemakeup.com",
        siteName: "Mirna Delgado Glave Makeup",
        locale: "es_PE",
        type: "website",
    },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="es" className={`${inter.className} h-full antialiased`} >
            <body className="min-h-full flex flex-col">
                <Navbar />
                {children}
                <BotonWhatsapp />
                <Footer />
            </body>
        </html>
    );
}
