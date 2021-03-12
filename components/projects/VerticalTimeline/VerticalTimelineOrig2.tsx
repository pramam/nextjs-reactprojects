import LeftCardOrig2 from './LeftCardOrig2'
import RightCardOrig2 from './RightCardOrig2'

export default function VerticalTimelineOrig2() {
    return (
        <>
            {/* component */}
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                    {/* left Red */}
                    <LeftCardOrig2
                        index={1}
                        day={70}
                        demo=""
                        blog=""
                        inspiration=""
                        github="" />
                    {/* left Red */}
                    <LeftCardOrig2
                        index={2}
                        day={24}
                        demo=""
                        blog=""
                        inspiration=""
                        github=""
                    />
                    {/* right Blue*/}
                    <RightCardOrig2
                        index={3}
                        day={33}
                        demo=""
                        blog=""
                        inspiration=""
                        github=""
                    />
                    {/* left Red */}
                    <LeftCardOrig2
                        index={3}
                        day={34}
                        demo=""
                        blog=""
                        inspiration=""
                        github="" />
                    {/* left Red*/}
                    <LeftCardOrig2
                        index={4}
                        day={44}
                        demo=""
                        blog=""
                        inspiration=""
                        github="" />
                    {/* right Blue */}
                    <RightCardOrig2
                        index={2}
                        day={22}
                        demo=""
                        blog=""
                        inspiration=""
                        github=""
                    />
                </div>
            </div>
        </>
    )
}