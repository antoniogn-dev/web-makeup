"use client"

import { philosopher } from '@/libs/fonts'
import Image from 'next/image'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

interface ComentariosProps {
    name: string
    title: string
    description: string
    valoration: number
}

const TestimonialCard = ({ name, title, description, valoration }: ComentariosProps) => {

    const desvaloration = 5 - valoration

    return (
        <div className="bg-white rounded-md flex flex-col p-8 w-87.5">
            <div className='h-80'>
                {/* estrellas */}
                <div className='flex gap-1 mb-8'>
                    {Array.from({ length: valoration }, (_, index) => (
                        <span key={index}><RiStarFill className='text-red-600/70'/></span>
                    ))}
                    {Array.from({ length: desvaloration }, (_, index) => (
                        <span key={index}><RiStarLine className='text-red-600/70'/></span>
                    ))}
                </div>
                {/* titulo */}
                <h3 className={`${philosopher.className} antialiased text-3xl font-bold font-serif italic mb-5`}>{title}</h3>
                {/* descripcion */}
                <p className='text-red-950 mb-10'>{description}</p>
            </div>

            {/* clienta */}
            <div className="flex items-center gap-4">
                <div className="">
                    <Image src="/iconos/comillas.png" alt='comillas' height={30} width={30}/>
                </div>
                <div>
                    <p className='font-bold'>{name}</p>
                    <p className='text-red-900 text-[14px] font-semibold tracking-wider'>CLIENTE VERIFICADA</p>
                </div>
            </div>
        </div>
    )
}
export default TestimonialCard