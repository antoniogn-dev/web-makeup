import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Formulario from "./Formulario";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white  border-t border-sky-500/10">
            {" "}
            {/* Updated border color */}
            <div className="max-w-337.5 mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">

                            <Image src="/images/logo-letras-rojo.png" alt="logo mirna delgado" height={100} width={100}/>
                            {/* <h2 className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r clash-display from-red-600 to-zinc-900`}>
                                {" "}
                                mirnadelgadoglavemakeup.com
                            </h2> */}
                        </div>
                        <p className="text-gray-600 max-w-md">
                            Belleza, elegancia y confianza en cada detalle. Creamos looks personalizados que reflejan tu estilo y personalidad.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-600 transition-colors"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/mirnadelgadoglavemakeup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-600 transition-colors"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-600 transition-colors"
                            >
                                <FaYoutube size={20} />
                            </a>
                        </div>

                        <h3 className="clash-display text-zinc-800  mb-4 pb-2 ">
                            {" "}
                            {/* Updated border color */}
                            Enlaces
                        </h3>

                        <Formulario />

                    </div>



                    {/* Quick Links */}
                    <div className="md:ml-20">
                        <h3 className="clash-display text-zinc-800  mb-4 pb-2 border-b border-sky-500/10">
                            {" "}
                            {/* Updated border color */}
                            Enlaces
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sobre-mi"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    Sobre Mí
                                </Link>
                            </li>{" "}
                            {/* Updated path */}
                            <li>
                                <Link
                                    href="/servicios"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portafolio"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    Portafolio
                                </Link>
                            </li>{" "}
                            {/* Updated path */}
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    Contacto
                                </Link>
                            </li>{" "}
                            {/* Updated path */}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="clash-display text-zinc-800  mb-4 pb-2 border-b border-sky-500/10">
                            {" "}
                            {/* Updated border color */}
                            Contacto
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-gray-600">
                                <Mail size={16} className="text-red-600" />{" "}
                                {/* Updated icon color */}
                                <Link href="mailto:mirnadelgadoglave@gmail.com" >
                                    <span>mirnadelgadoglave@gmail.com</span> {/* Updated email */}
                                </Link>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600">
                                <Mail size={16} className="text-red-600" />{" "}
                                {/* Updated icon color */}
                                <Link href="mailto:estudio@mirnadelgadoglavemakeup.com">
                                    <span>estudio@mirnadelgadoglavemakeup.com</span> {/* Updated email */}
                                </Link>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600">
                                <Phone size={16} className="text-red-600" />{" "}
                                {/* Added phone icon */}
                                <Link href="tel:+51913349438">
                                    <span>(51) 913349438</span> {/* Dummy phone number */}
                                </Link>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-600">
                                <MapPin size={16} className="text-red-600" />{" "}
                                {/* Added location icon */}
                                <span className="w-full md:w-87.5">Urb. Quinta Tristan S-4 José Luis Bustamante y Rivero - Arequipa</span> {/* Dummy address */}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-sky-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    {" "}
                    {/* Updated border color */}
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} antoniodev. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-red-600 text-sm transition-colors"
                        >
                            Politicas de Privacidad
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-red-600 text-sm transition-colors"
                        >
                            Terminos del Servicio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
