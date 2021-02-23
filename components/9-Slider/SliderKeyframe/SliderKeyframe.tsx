import OneSlideKeyframe from './OneSlideKeyframe'

import { ISlide } from '../definitions'

export interface IProps {
    slides: ISlide[]
}

export default function SliderKeyframe({ slides }: IProps) {
    return (
        // This solution is an implementation of this article:
        // http://thenewcode.com/627/Make-A-Responsive-CSS3-Image-Slider
        // lg:w-224, assume this is the width of every OneSlideKeyframe, from the calculations in that file.
        //
        // This solution has 4 images, with the first image repeated as the last image, for a total of 5 images
        // If you add one more image, the 500% and 1/5th need to be changed to 600% and 1/6th(600%, 1/6 need to be added to tailwind.config.js),
        // and animate-slidy also needs to be changed
        //
        // OneSlideKeyframe currently sizes all the images to be the same width and height, which looks nice as the images
        // slide across and one doesn't need to ensure that all images are the same dimensions.
        // I am happy with this solution and will leave it alone for now.
        <div className="flex justify-center">
            <div className="w-4/5 max-w-xs sm:max-w-lg md:max-w-lg lg:max-w-224 lg:mt-20 overflow-hidden">
                <div className="relative w-5/1 lg:m-0 lg:p-0 text-left animate-slidy">
                    <div className="flex flex-row justify-center">
                        {slides.map((obj, index) => {
                            // Do I need common props? Seems to work without it
                            // const common_props = "lg:w-1/5 lg:h-auto"
                            return (
                                <div
                                    key={index}
                                // className={common_props}
                                >
                                    <OneSlideKeyframe data={obj} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}