import LeftCard from './LeftCard'
import RightCard from './RightCard'

// Code copied from https://tailwindcomponents.com/component/vertical-timeline
export default function VerticalTimeline() {
    return (
        <>
            {/* component */}
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                    <LeftCard />
                    <RightCard />
                    <LeftCard />
                    <LeftCard />
                    <RightCard />
                </div>
            </div>
        </>
    )
}