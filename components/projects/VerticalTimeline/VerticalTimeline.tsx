import LeftCard from './LeftCard'
import RightCard from './RightCard'
import allprojectsData from '../../../data/allprojects.json'
import CenterTextCard from './CenterTextCard'

// Code initially copied from https://tailwindcomponents.com/component/vertical-timeline
export default function VerticalTimeline() {
    return (
        <>
            {/* component */}
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                    <CenterTextCard 
                        title="Introduction"
                        blog="" />
                    <LeftCard
                        index={1}
                        image={allprojectsData[0].image}
                        title={allprojectsData[0].name}
                        day={allprojectsData[0].day}
                        demo={allprojectsData[0].url}
                        blog={allprojectsData[0].blogurl}
                        inspiration={allprojectsData[0].inspiration}
                        github={allprojectsData[0].githuburl}
                    />
                    <RightCard
                        index={2}
                        image={allprojectsData[1].image}
                        title={allprojectsData[1].name}
                        day={allprojectsData[1].day}
                        demo={allprojectsData[1].url}
                        blog={allprojectsData[1].blogurl}
                        inspiration={allprojectsData[1].inspiration}
                        github={allprojectsData[1].githuburl}
                    />
                    <LeftCard
                        index={3}
                        image={allprojectsData[2].image}
                        title={allprojectsData[2].name}
                        day={allprojectsData[2].day}
                        demo={allprojectsData[2].url}
                        blog={allprojectsData[2].blogurl}
                        inspiration={allprojectsData[2].inspiration}
                        github={allprojectsData[2].githuburl}
                    />
                    <RightCard
                        index={4}
                        image={allprojectsData[3].image}
                        title={allprojectsData[3].name}
                        day={allprojectsData[3].day}
                        demo={allprojectsData[3].url}
                        blog={allprojectsData[3].blogurl}
                        inspiration={allprojectsData[3].inspiration}
                        github={allprojectsData[3].githuburl}
                    />
                    <LeftCard
                        index={5}
                        image={allprojectsData[4].image}
                        title={allprojectsData[4].name}
                        day={allprojectsData[4].day}
                        demo={allprojectsData[4].url}
                        blog={allprojectsData[4].blogurl}
                        inspiration={allprojectsData[4].inspiration}
                        github={allprojectsData[4].githuburl}
                    />
                </div>
            </div>
        </>
    )
}