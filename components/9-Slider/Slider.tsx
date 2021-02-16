import quoteData from './sliderdata.json'
import OneSlide from './OneSlide'

export default function Slider() {
    return (
        <div>
            <div className="flex justify-center">
                {/* {quoteData.map((obj, index) => ( */}
                <div className="lg:mt-32">
                    <OneSlide data={quoteData[1]} />
                    {/* ))
                } */}
                </div>
            </div>
        </div>
    )
}