import OneSlideKeyframe from './OneSlideKeyframe'

import { ISlide } from '../definitions'

export interface IProps {
    slides: ISlide[]
}

export default function SliderKeyframe({ slides }: IProps) {
    return (
        // This solution is an implementation of this article:
        // http://thenewcode.com/627/Make-A-Responsive-CSS3-Image-Slider
        // lg:w-224, assume this is the width of every OneSlide
        // lg:max-w-1120
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
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}