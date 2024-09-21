import React, { useState, useEffect } from 'react'
import TextFormatter from "@/components/TextFormatter/TextFormatter"
import useLocalizedContent from "@/hooks/useLocalizedContent"
import { fondoHabitaciones } from "@/media/media"
import SVG from "@/components/SVG"
import img from "@historia/historia-1.webp"
import LazyImage from "@/components/LazyImage/LazyImage"
import * as Dialog from '@radix-ui/react-dialog'
import { cn, truncateFormattedContent } from '@/lib/utils'
import CloseIcon from "@icons/CloseIcon.svg?react"

const Button = React.forwardRef(({ className, ...props }, ref) => (
    <button
        className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
            className
        )}
        ref={ref}
        {...props}
    />
))

Button.displayName = 'Button'

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
        <section id='historia' className="relative flex flex-col md:flex-row items-center justify-center bg-blanco p-8 sm:mt-8">
            <div className="absolute inset-0 z-0 w-custom overflow-x-hidden">
                <SVG svg={fondoHabitaciones} className="w-[200vw] sm:h-auto sm:w-custom absolute top-[3vh] sm:-top-[10vh] left-1/2 transform -translate-x-1/2 -z-10" />
            </div>
            <div className="md:w-1/4 mb-8 md:mb-0">
                <LazyImage
                    src={img}
                    alt="Imagen de un libro sobre una mesa de madera"
                    className="hidden sm:inline"
                />
            </div>
            <div className="md:w-3/4 md:pl-8 md:-ml-16 z-0">
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
                                <Dialog.Portal >
                                    <Dialog.Overlay className="bg-blanco bg-opacity-95 fixed inset-0" />
                                    <Dialog.Content className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-beige p-6 rounded-lg w-[90vw] max-h-[80vh] overflow-y-auto duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
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