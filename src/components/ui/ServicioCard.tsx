import { philosopher } from '@/libs/fonts'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    imagen: string
    titulo: string
    descripcion: string
}

const ServicioCard = ({imagen, titulo, descripcion}: Props) => {
  return (
    <div className=' w-[320px] shadow-md shadow-black/20 bg-white rounded-lg overflow-hidden'>
        <Link href="/servicios">
            <div className='flex flex-col items-center hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-textos/10 p-10 '>
                <Image src={imagen} alt={titulo} height={60} width={60} className=''/>
                <h3 className={`${philosopher.className} antialiased text-titulos text-2xl font-bold pt-2 pb-3`}>{titulo}</h3>
                <p className='text-textos text-center'>{descripcion}</p>
            </div>
        </Link>
    </div>
  )
}
export default ServicioCard