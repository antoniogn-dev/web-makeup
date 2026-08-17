import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/libs/fonts";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";



export const metadata: Metadata = {
    title: "Mirna Delgado Glave",
    description: "Maquilladora profesional en Arequipa - Perú",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${inter.className} h-full antialiased`} >
            <body className="min-h-full flex flex-col">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
