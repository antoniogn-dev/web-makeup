import { philosopher } from '@/libs/fonts'
import Image from 'next/image'


interface Props {
    imagen: string
    titulo: string
    descripcion: string
}

const ServicioCard = ({imagen, titulo, descripcion}: Props) => {
  return (
    <div className='flex flex-col items-center w-[320px] p-10 shadow-lg shadow-black/20 bg-white rounded-lg'>
        <Image src={imagen} alt={titulo} height={60} width={60} className=''/>
        <h3 className={`${philosopher.className} antialiased text-red-600 text-2xl font-bold pt-2 pb-3`}>{titulo}</h3>
        <p className='text-gray-500 text-center'>{descripcion}</p>
    </div>
  )
}
export default ServicioCard