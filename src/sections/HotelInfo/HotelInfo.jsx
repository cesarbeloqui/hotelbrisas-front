import { Card, CardContent } from "@/components/ui/card"
import PhoneXIcon from "@icons/PhoneXIcon.svg?react";
import UsersIcon from "@icons/UsersIcon.svg?react";
import SmokingIcon from "@icons/SmokingIcon.svg?react";
import CarIcon from "@icons/CarIcon.svg?react";
import InfoIcon from "@icons/InfoIcon.svg?react";
import CheckInIcon from "@icons/CheckInIcon.svg?react";
import PoolIcon from "@icons/PoolIcon.svg?react";
import TextFormatter from "@/components/TextFormatter/TextFormatter";
import "./index.css"
import useLocalizedContent from "@/hooks/useLocalizedContent";



export default function HotelInfo() {
    const localizedContent = useLocalizedContent()
    const { hotelInfo } = localizedContent
    return (
        <div className="w-full md:w-[84vw] mx-auto p-4">
            <h1 className="text-2xl md:text-3xl text-celeste font-cutive mb-4 md:mb-6">A tener en cuenta:</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap md:gap-16">
                {hotelInfo.map((card, cardIndex) => (
                    <div key={cardIndex} className="relative flex-1 min-w-full md:min-w-[calc(50%-10rem)] flex flex-col mb-8 md:mb-0">
                        {/* Ribbon */}
                        <div className="ribbon"></div>
                        {/* Card */}
                        <Card className="flex-1 border-beige rounded-none pt-8 md:pt-10 pl-2 md:pl-4">
                            <CardContent className="p-4 md:p-6">
                                <ul className="space-y-3 md:space-y-4">
                                    {card.items.map((item, itemIndex) => {
                                        const Icon = item.icon;
                                        return (
                                            <li key={itemIndex} className="flex items-center">
                                                <Icon className="w-8 h-8 md:w-10 md:h-10 mr-3 md:mr-5 text-celeste flex-shrink-0" />
                                                <div className="text-sm md:text-base">
                                                    <TextFormatter content={item.content} />
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}