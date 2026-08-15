import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/libs/fonts";



export const metadata: Metadata = {
    title: "Mirna Delgado Glave",
    description: "Maquilladora profesional en Arequipa - Perú",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${inter.className} h-full antialiased`} >
            <body className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}
