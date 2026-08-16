'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { philosopher } from '@/libs/fonts';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5'
import clsx from 'clsx';


const navLinks = [
    { label: 'Sobre mí', link: "/sobre-mi" },
    { label: 'Servicios', link: "/servicios" },
    { label: 'Portafolio', link: "/portafolio" },
    { label: 'Contacto', link: "/contacto" },
];


const LogoLetras = () => {
    return (
        <Link href="/" className=" relative flex flex-col justify-center items-center cursor-pointer">
            <div className='relative w-37.5 h-15 md:w-55 md:h-31.25'>
                <Image src="/images/logo-letras.png" alt='logo letras' fill priority sizes='90px' className='object-contain' />
            </div>
            <p className={`${philosopher.className} absolute hidden md:block text-xl text-center tracking-widest w-62.5 text-black bg-[#ebdfcf] rounded-lg top-13 -left-3`}>Mirna delgado Glave</p>
            <p className={`${philosopher.className} hidden md:block text-white tracking-widest text-[22px] text-center text-shadow-lg -mt-4`}>Make up</p>
        </Link>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <nav
                className={clsx(
                    'pointer-events-auto flex w-full items-center justify-between transition-all duration-500 ease-out',
                    scrolled && 'mt-3 max-w-6xl rounded-full border border-white/10 bg-[#160f0c]/60 px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 ease-out',
                    !scrolled && 'mt-0 max-w-none rounded-none border-b border-transparent bg-transparent md:px-10 xl:px-40 py-5 transition-all duration-500 ease-out',
                    open && "hidden",
                    !open && "flex"
                )}
                style={{ width: scrolled ? '92%' : '100%' }}
            >
                {/* Logo */}
                {
                    scrolled ? (
                        <Link href="/" className="relative flex shrink-0 items-center h-10 w-20 p-0 overflow-visible">
                            <Image src="/images/logo-letras.png" alt='logo letras' fill sizes='80px' priority className='object-cover scale-110 cursor-pointer' />
                        </Link>
                    ) : (
                        <LogoLetras />
                    )
                }

                {/* Enlaces centrales */}
                <div className="hidden items-center gap-7 text-[14.5px] text-white/80 lg:flex">
                    {navLinks.map((link) => (
                        <Link href={link.link} key={link.label} className={`flex items-center gap-1 text-[18px] transition-all hover:text-white hover:-translate-y-1 text-shadow-lg font-semibold tracking-wider`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Lado derecho */}
                <div className="hidden lg:flex shrink-0 items-center gap-4">
                    <Button
                        variant={'outline'}
                        className={clsx(
                            `border-red-600 bg-transparent`,
                            scrolled ? `text-[18px] font-medium text-white transition py-4 px-3` : `text-[18px] font-medium text-red-600 transition py-6 px-4`
                        )}>
                        <Link
                            href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita"
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Reservar Cita
                        </Link>
                    </Button>
                </div>

                {/* Menu responsivo */}

                {/* Menu Hamburguesa */}
                <div className={clsx(
                    'block lg:hidden transition-all',
                    scrolled && 'mx-0',
                    !scrolled && 'mx-10 bg-black/30 px-1 py-1 rounded'
                )
                }>
                    <IoMenuSharp onClick={() => setOpen(true)} className='text-3xl text-white hover:scale-120 cursor-pointer' />
                </div>
            </nav>


            <div className={clsx(
                "pointer-events-auto fixed top-0 right-0 h-screen w-screen bg-black/90 transition-transform duration-500 ease-in-out",
                open ? "translate-x-0" : "translate-x-full"
            )}>
                {/* menu principal */}

                <div className="flex justify-between items-center w-full h-15 px-5 mt-5">
                    <Link href="/" className="relative flex items-center h-10 w-20 p-5">
                        <Image src="/images/logo-letras.png" alt='logo letras' fill sizes='80px' priority className='object-cover scale-110' />
                    </Link>

                    <IoCloseSharp onClick={() => setOpen(false)} className='text-white text-3xl font-bold cursor-pointer' />

                </div>

                <div className="w-full h-0.5 bg-slate-800 my-5"></div>

                {/* Links mobile */}
                <ul className="flex flex-col justify-center items-center gap-6 mt-10 text-2xl font-bold text-gray-300">
                    {
                        navLinks.map(link => (
                            <li key={link.label} className='text-center border-b border-slate-800 py-4 w-[70%] hover:bg-gray-800 rounded-lg transition-all duration-300'>
                                <Link href={link.link} onClick={() => setOpen(false)} >
                                    {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className='flex justify-center mt-20'>
                    <Button
                        className="bg-red-600 text-xl font-bold py-6 hover:bg-red-800 w-[70%] cursor-pointer"
                    >
                        <Link
                            href="https://wa.me/51913349438?text=Hola%2C%20quiero%20reservar%20una%20cita"
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={() => setOpen(false)}
                        >
                            Reservar Cita
                        </Link>
                    </Button>
                </div>


            </div>

        </header>
    );
}
