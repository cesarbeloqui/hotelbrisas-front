import { useState, useEffect } from 'react'
import TextFormatter from "@/components/TextFormatter/TextFormatter"
import useLocalizedContent from "@/hooks/useLocalizedContent"
import { fondoHabitaciones } from "@/media/media"
import SVG from "@/components/SVG"
import img from "@historia/1.jpg"
import LazyImage from "@/components/LazyImage/LazyImage"
import * as Dialog from '@radix-ui/react-dialog'
import { cn, truncateFormattedContent } from '@/lib/utils'
import CloseIcon from "@icons/CloseIcon.svg?react"

const Button = ({ className, ...props }) => (
    <button
        className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
            className
        )}
        {...props}
    />
)

export default function Historia() {
    const localizedContent = useLocalizedContent()
    const { historia } = localizedContent
    const { title, content } = historia
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)

        return () => {
            window.removeEventListener('resize', checkIfMobile)
        }
    }, [])

    const truncatedContent = truncateFormattedContent(content, 1000)

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center bg-blanco p-8 sm:mt-8">
            <div className="absolute inset-0 z-0">
                <SVG svg={fondoHabitaciones} className="w-[200vw] sm:h-auto sm:w-custom absolute top-[3vh] sm:-top-[10vh] left-1/2 transform -translate-x-1/2 -z-10" />
            </div>
            <div className="md:w-1/4 mb-8 md:mb-0">
                <LazyImage
                    src={img}
                    alt="Imagen de un libro sobre una mesa de madera"
                    className=""
                />
            </div>
            <div className="md:w-3/4 md:pl-8 md:-ml-16 z-10">
                <h2 className="text-3xl font-cutive font-bold text-celeste mb-4">{title}</h2>
                <div className="bg-beige p-6">
                    {isMobile ? (
                        <>
                            <p className="text-gray-700">
                                <TextFormatter content={truncatedContent} />
                            </p>
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <Button className="mt-2 text-celeste">
                                        Ver más
                                    </Button>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <Dialog.Overlay className="bg-black bg-opacity-50 fixed inset-0" />
                                    <Dialog.Content className="fixed top-[60%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg max-w-[425px] max-h-[85vh] overflow-y-auto">
                                        <Dialog.Close asChild>
                                            <button className="sticky top-0 left-[400px] rounded-full bg-black opacity-35 text-white">
                                                <CloseIcon />
                                            </button>
                                        </Dialog.Close>
                                        <div className="mt-2">
                                            <p className="text-gray-700">
                                                <TextFormatter content={content} />
                                            </p>
                                        </div>

                                    </Dialog.Content>
                                </Dialog.Portal>
                            </Dialog.Root>
                        </>
                    ) : (
                        <p className="text-gray-700">
                            <TextFormatter content={content} />
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}