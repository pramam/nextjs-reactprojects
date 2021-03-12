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
                        image="/screenshots/Screenshot-Bubblewrap.png"
                        title="Hello"
                        day={70}
                        demo=""
                        blog=""
                        inspiration=""
                        github="" />
                    {/* left Red */}
                    <LeftCardOrig2
                        index={2}
                        image="/screenshots/Screenshot-Birthdays.png"
                        title="Two"
                        day={24}
                        demo=""
                        blog=""
                        inspiration=""
                        github=""
                    />
                    {/* right Blue*/}
                    <RightCardOrig2
                        index={3}
                        image="/screenshots/Screenshot-Githubusers.png"
                        title="three"
                        day={33}
                        demo=""
                        blog=""
                        inspiration=""
                        github=""
                    />
                    {/* left Red */}
                    <LeftCardOrig2
                        index={4}
                        image="/screenshots/Screenshot-Tours.png"
                        title="Three"
                        day={34}
                        demo=""
                        blog=""
                        inspiration=""
                        github="" />
                    {/* left Red*/}
                    <LeftCardOrig2
                        index={4}
                        image="/screenshots/Screenshot-Navbar.png"
                        title="Four"
                        day={44}
                        demo=""
                        blog=""
                        inspiration=""
                        github="" />
                    {/* right Blue */}
                    <RightCardOrig2
                        index={2}
                        image="/screenshots/Screenshot-Slider.png"
                        title="five"
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