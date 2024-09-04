import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import SVG from "../SVG";
import { arrowLeft2, arrowRight2 } from "@/media/media";
import Autoplay from "embla-carousel-autoplay";
import LazyImage from "../LazyImage/LazyImage";


export default function FullscreenCarousel({images}) {

    return (
        <Carousel plugins={[
            Autoplay({
                delay: 3000,
            }),
        ]} className="w-[98.786dvw] h-auto">
            <CarouselContent className="h-full w-full">
                {images.map((image, index) => (
                    <CarouselItem key={`${index}`} className="h-full w-full">
                        <div className="h-full flex items-center justify-center">
                            <Card className="w-full h-full border-none">
                                <CardContent className="flex flex-col p-0 items-center justify-center h-full w-full">
                                    <div className="flex justify-center items-center h-[60vh] w-full">
                                        <LazyImage src={image} alt={`Slide ${index + 1}`} className="object-cover h-full w-full" />
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 top-[30vh] border-none">
                <SVG className="h-6 w-6" svg={arrowLeft2} />
            </CarouselPrevious>
            <CarouselNext className="right-4 top-[30vh] border-none">
                <SVG className="h-6 w-6" svg={arrowRight2} />
            </CarouselNext>
        </Carousel>
    );
}
