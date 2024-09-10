import useLocalizedContent from "@/hooks/useLocalizedContent"

export default function HotelGallery() {
    const localizedContent = useLocalizedContent()
    const { hotelGallery } = localizedContent
    const { title, subtitle } = hotelGallery
    return (
        <section id="galeria" className="flex flex-col items-center justify-center p-8  min-h-[200px] scroll-m-3 sm:scroll-m-16">
            <div className=" bg-beige px-7 pt-4 pb-1 mb-3">
                <h2 className="text-3xl font-serif text-celeste ">{title}</h2>
            </div>
            <p className="text-gris text-lg font-semibold text-center sm:text-left">
                {subtitle}
            </p>
        </section>
    )
}