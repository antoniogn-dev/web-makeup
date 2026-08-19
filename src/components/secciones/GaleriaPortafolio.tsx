"use client"

import clsx from "clsx";
import Image from "next/image"
import { useState } from "react";
import galeriaImagenes from "@/data/imagenesData"


interface GalleryImage {
    url: string;
    category: string;
}


const GaleriaPortafolio = () => {

    const obcionesMenu = ["todos", "novias", "maquillaje social", "peinado"]

    const [active, setActive] = useState<string>("todos")
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const [galeriaFiltrada, setGaleriaFiltrada] = useState(galeriaImagenes)


    const handleClick = (item: string) => {
        setActive(item)

        if (item === "todos") {
            setGaleriaFiltrada(galeriaImagenes)
        } else {
            setGaleriaFiltrada(galeriaImagenes.filter(img => img.category === item))
        }

    }

    return (
        <>
            {/* botones */}
            <div className="flex mb-5">
                {
                    obcionesMenu.map(item => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className={clsx(
                                "mx-1 text-[10px] border px-2 py-1 rounded-full cursor-pointer hover:bg-red-700 hover:text-white transition-colors",
                                active === item ? "bg-red-700 text-white" : "bg-transparent text-black"
                            )}
                        >
                            {item.toLocaleUpperCase()}
                        </button>
                    ))
                }
            </div>

            {/* galeria */}

            <div className="">

                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                    {galeriaFiltrada.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedImage(image)}
                            className="group mb-4 block w-full overflow-hidden rounded-lg text-left cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-md">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    width={800}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw,
                                    (max-width: 1024px) 50vw,
                                    (max-width: 1280px) 33vw,
                                    25vw"
                                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-4 transition duration-300 group-hover:bg-black/30">
                                    <span className="translate-y-4 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        {image.category.toUpperCase()}
                                    </span>
                                    <span className="translate-y-4 text-sm font-medium text-gray-400 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        © {image.author}
                                    </span>

                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Cerrar */}
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                            aria-label="Cerrar"
                        >
                            ×
                        </button>

                        {/* Imagen grande */}
                        <div
                            className="relative max-h-[90vh] max-w-6xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.url}
                                alt={selectedImage.category}
                                width={1600}
                                height={1200}
                                className="max-h-[90vh] w-auto rounded-lg object-contain"
                            />
                        </div>
                    </div>
                )}


            </div>
        </>
    )
}
export default GaleriaPortafolio