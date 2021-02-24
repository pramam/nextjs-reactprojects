import Slider from './Slider'
import quoteData from './sliderdata.json'

export default function SliderWrapper() {
    return (
        <Slider slides={quoteData} />
    )
}