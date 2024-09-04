import { Button } from "@/components/ui/button";
import useLocalizedContent from "@/hooks/useLocalizedContent";

const MasterSuites = () => {
    const contentLocalized = useLocalizedContent()
    const { masterSuites } = contentLocalized
    const { title, content, subcontent, button } = masterSuites
    return (
        <div className="p-0 -mt-[20vh]">
            <div className="bg-beige px-5 mx-5 sm:px-12 py-5 sm:py-10 max-w-4xl sm:ml-[10vw] relative w-[90vw] sm:w-[60vw]">
                <h2 className="text-4xl md:text-5xl font-montserrat text-gris sm:mb-6">{title}</h2>
                <p className="text-lg text-gray-700 mb-12">
                    {content}
                </p>
                {subcontent ? <div className="bg-darkceleste text-gris p-6 rounded-tl-0 rounded-br-0 rounded-tr-[3rem] rounded-bl-[3rem] absolute -right-[] md:-right-[25vw] mr-[1vw] sm:ml-0 -bottom-[15vh] md:-bottom-[8vh] lg:-bottom-[10vh] sm:max-w-[50vw]">
                    <p className="text-sm md:text-base">
                        {subcontent}
                    </p>
                </div> : null}
            </div>
            <Button variant="outline" className="bg-white text-celeste border-celeste rounded-none hover:bg-gray-100 mt-[9rem] sm:mt-40 md:mt-[2vh] md:ml-[10vw] font-cutive text-sm pt-2 w-[90vw] sm:w-auto mx-5">
                {button}
            </Button>
        </div>
    );
};

export default MasterSuites;