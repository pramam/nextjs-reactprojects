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
                <div className="flex flex-col md:grid md:grid-cols-9 mx-auto p-2 text-blue-50">
                    <CenterTextCard 
                        title="Introduction"
                        blog="" />
                    {allprojectsData.map((obj, index) => {


                        return (
                            <>
                                {index % 2 === 0 ?
                                    <LeftCard
                                        index={index + 1}
                                        image={obj.image}
                                        title={obj.name}
                                        day={obj.day}
                                        demo={obj.url}
                                        blog={obj.blogurl}
                                        inspiration={obj.inspiration}
                                        github={obj.githuburl}
                                    /> :
                                    <RightCard
                                        index={index + 1}
                                        image={obj.image}
                                        title={obj.name}
                                        day={obj.day}
                                        demo={obj.url}
                                        blog={obj.blogurl}
                                        inspiration={obj.inspiration}
                                        github={obj.githuburl}
                                    />

                                }
                            </>

                        )
                    }

                    )}
                </div>
            </div>
        </>
    )
}