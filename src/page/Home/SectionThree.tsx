import WiseIcon from "@/components/icon";
import { Button } from "@/components/ui/button";

export default function SectionThree() {

    return (
        <section className="flex flex-col lg:flex-row items-center px-4 py-16 min-h-screen sm:px-12 md:px-24 lg:px-48 border-b border-slate-200">
            {/* Left content */}
            <div className="w-full order-2">
                {/* Main heading */}
                <div className='flex flex-col'>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-4 quicksand-font leading-tight">
                        The learning materials
                    </h1>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-4 quicksand-font leading-tight">
                        provided are{' '}
                        <span className="relative inline-block courgette text-wise-primary">
                            enjoyable
                            {/* Yellow underline effect */}
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 -z-10 transform -rotate-2"></span>
                        </span>
                    </h1>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 quicksand-font leading-tight">
                        for children
                    </h1>
                </div>

                <p className="text-gray-600 mb-8 text-lg max-w-xl">
                    Don't worry! Your children will be having a fun time while learning with our
                    materials that are easy to understand.
                </p>

                {/* Learn More Button */}
                <div className='flex justify-start items-center gap-3 border w-max border-wise-primary px-1 py-1 rounded-full hover:shadow-md transition-shadow'>
                    <p className='text-wise-primary font-semibold ml-3'>Learn More</p>
                    <Button className='rounded-full w-8 h-8 bg-wise-primary text-white hover:bg-wise-primary/90 transition-colors'>
                        <WiseIcon iconName="GoArrowUpRight" />
                    </Button>
                </div>
            </div>

            {/* Right content - Image */}
            <div className="w-full sm:w-3/4 lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
                <img
                    src="28.png"
                    alt="Learning child 1"
                    className="w-full max-w-md lg:max-w-none lg:scale-125 transition-transform sm:relative sm:right-14"
                />
            </div>
        </section>
    );
}
