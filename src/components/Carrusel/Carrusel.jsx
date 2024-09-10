import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useLocalizedContent from "@/hooks/useLocalizedContent";
import ArrowLeft from "@icons/arrowLeft.svg?react";
import ArrowRight from "@icons/arrowRight.svg?react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "@carrusel/1.jpg";
import image2 from "@carrusel/2.jpg";
import image3 from "@carrusel/3.jpg";
import image4 from "@carrusel/4.jpg";
import image5 from "@carrusel/5.jpg";
import image6 from "@carrusel/6.jpg";
import image7 from "@carrusel/7.jpg";
import LazyImage from "../LazyImage/LazyImage";

const images = [
    image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7
];

function* pairGenerator(array1, array2) {
    let i = 0, j = 0;

    while (true) {
        yield [array1[i], array2[j]];

        i = (i + 1) % array1.length;
        j = (j + 1) % array2.length;
    }
}

export default function FullscreenCarousel() {
    const { slides } = useLocalizedContent();
    const generator = pairGenerator(slides, images);

    // Aquí se asegura que se generen suficientes pares para cubrir todas las imágenes
    const pairs = Array.from({ length: Math.max(slides.length, images.length) }, () => generator.next().value);

    return (
        <Carousel plugins={[
            Autoplay({
                delay: 3000,
            }),
        ]} className="w-custom h-screen">
            <CarouselContent className="h-full w-full">
                {pairs.map(([slide, image], index) => (
                    <CarouselItem key={`${slide.id}-${index}`} className="h-full w-full">
                        <div className="h-full flex items-center justify-center">
                            <Card className="w-full h-full border-none">
                                <CardContent className="flex flex-col p-0 items-center justify-center h-full w-full">
                                    <div className="flex justify-center items-center h-[70vh] w-full">
                                        <LazyImage src={image} alt={`Slide ${index + 1}`} className="object-cover h-full w-full" />
                                    </div>
                                    <a href={slide.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="relative z-10 flex h-[30vh] md:w-[50vw] flex-col items-center justify-center text-center">
                                        <h1 className="text-xl md:text-3xl font-cutive text-celeste mb-0">
                                            {slide.content}
                                        </h1>
                                        <p className="text-xl md:text-lg font-montserrat italic text-gris mt-0 ">
                                            {slide.sub}
                                        </p>
                                    </div>

                                    </a>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 top-[65vh] border-none">
                <ArrowLeft className="h-8 w-8" />
            </CarouselPrevious>
            <CarouselNext className="right-4 top-[65vh] border-none">
                <ArrowRight className="h-8 w-8" />
            </CarouselNext>
        </Carousel>
    );
}
