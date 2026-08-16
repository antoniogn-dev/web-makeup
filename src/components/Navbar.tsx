'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { philosopher } from '@/libs/fonts';
import { IoMenuSharp } from 'react-icons/io5'
import clsx from 'clsx';



const navLinks = [
    { label: 'Sobre mí' },
    { label: 'Servicios' },
    { label: 'Portafolio' },
    { label: 'Contacto' },
];


const LogoLetras = () => {
    return (
        <div className=" relative flex flex-col justify-center items-center">
            <div className='relative w-37.5 h-15 md:w-55 md:h-31.25'>
                <Image src="/images/logo-letras.png" alt='logo letras' fill priority sizes='90px' className='object-contain' />
            </div>
            <p className={`${philosopher.className} absolute hidden md:block text-xl text-center tracking-widest w-62.5 text-black bg-[#ebdfcf] rounded-lg top-13 -left-3`}>Mirna delgado Glave</p>
            <p className={`${philosopher.className} hidden md:block text-white tracking-widest text-[22px] text-center text-shadow-lg -mt-4`}>Make up</p>
        </div>
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
                    !scrolled && 'mt-0 max-w-none rounded-none border-b border-transparent bg-transparent md:px-10 xl:px-40 py-5 transition-all duration-500 ease-out'
                )}
                style={{ width: scrolled ? '92%' : '100%' }}
            >
                {/* Logo */}
                {
                    scrolled ? (
                        <div className="relative flex shrink-0 items-center h-10 w-20 p-0 overflow-visible">
                            <Image src="/images/logo-letras.png" alt='logo letras' fill sizes='80px' priority className='object-cover scale-110' />
                        </div>
                    ) : (
                        <LogoLetras />
                    )
                }

                {/* Enlaces centrales */}
                <div className="hidden items-center gap-7 text-[14.5px] text-white/80 lg:flex">
                    {navLinks.map((link) => (
                        <button key={link.label} className={`flex items-center gap-1 text-[18px] transition-all hover:text-white hover:-translate-y-1 text-shadow-lg font-semibold tracking-wider`}>
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Lado derecho */}
                <div className="hidden lg:flex shrink-0 items-center gap-4">
                    <Button variant={'outline'} className={[`border-red-600 bg-transparent`,
                        scrolled ?
                            `text-[18px] font-medium text-white transition py-4 px-3`
                            :
                            `text-[18px] font-medium text-red-600 transition py-6 px-4`
                    ].join(" ")}>
                        <Link
                            href="#"
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
                    <IoMenuSharp onClick={() => console.log("click")} className='text-3xl text-white hover:scale-120' />
                </div>
            </nav>

            <div className="">

            </div>
        </header>
    );
}
