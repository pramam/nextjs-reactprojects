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
                    <a id="introduction"></a>
                    <CenterTextCard 
                        title="Introduction"
                        blog="/posts/introduction"
                        about="/general/about" />
                    {allprojectsData.map((obj, index) => {

                        return (
                            <>
                                {index % 2 === 0 ?
                                    <LeftCard key={index} {...obj} />
                                    :
                                    <RightCard key={index} {...obj} />
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