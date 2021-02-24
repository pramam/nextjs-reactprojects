import quoteData from './sliderdatageneric.json'
import SliderKeyframe from './SliderKeyframe'

export default function SliderKeyframeWrapper() {
    return (
        <SliderKeyframe slides={quoteData} />
    )
}