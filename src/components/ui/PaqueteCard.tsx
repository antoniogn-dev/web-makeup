
import { PaqueteData } from "@/data/paquetesData"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"
import Link from "next/link"
import { philosopher } from "@/libs/fonts"
import { IoCheckmarkSharp } from 'react-icons/io5'
import clsx from "clsx"

interface PaqueteCardProps {
    paquete: PaqueteData
}

const PaqueteCard = ({ paquete }: PaqueteCardProps) => {
    return (
        <div className={clsx(
            `relative flex flex-col border-2 rounded-xl py-10 border-red-900/50 justify-between h-300 shadow-md shadow-black/3`,
            paquete.id === "platinum" ? "bg-[#fdf0d5]/60" : "bg-[#fdf0d5]/30"
        )}>
            <div>
                <div className="px-5">
                    <h4 className={`${philosopher.className} antialiase text-3xl font-semibold`}>Novia {paquete.name}</h4>
                    <p>{paquete.tagline}</p>

                    {/* badget */}
                    <p className={clsx(
                        `absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold text-center w-65 py-2 rounded-full text-md tracking-wider`,
                        paquete.badge ? "block" : "hidden"
                    )}
                    >
                        EXPERIENCIA PREMIUM
                    </p>
                </div>

                <div className="bg-red-800/20 h-0.5 w-full rounded-full my-10" />


                <Accordion
                    className="max-w-lg rounded-lg my-5"
                    defaultValue={["entrevista", "maquillaje"]}
                >
                    {paquete.detalle.map((item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className=" px-4"
                        >
                            <AccordionTrigger className={`font-bold text-lg text-red-600/70`}>{item.trigger}</AccordionTrigger>
                            <AccordionContent className={`text-gray-500`}>
                                {
                                    item.data.map((dato, index) => (
                                        <div key={index} className="flex items-center gap-3 mb-2">
                                            <div>
                                                <IoCheckmarkSharp className="text-red-500 size-4" />
                                            </div>
                                            <span>{dato}</span>
                                        </div>
                                    ))
                                }
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <Link href="#" className="bg-red-600/20 text-red-700 text-lg font-semibold py-4 px-4 mx-5 text-center tracking-wider border border-red-600 rounded-lg hover:bg-red-100 transition-colors">RESERVAR CITA</Link>


        </div>
    )
}
export default PaqueteCard