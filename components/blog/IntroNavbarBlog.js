import allprojectsData from '../../data/allprojects.json'


// Display <TIMELINE> BLOG <ABOUT> without left and right arrows on Introduction blog post

export default function IntroNavbarBlog({ textColor }) {
    const timeline = allprojectsData[0].timeline;
    const about = allprojectsData[0].about;

    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"

    // console.log(`In intro navbar blog timeline: ${timeline}, about: ${about}`)
    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">
                    {/* #TIMELINE */}
                    {timeline === '/' ?
                        <a href={`/#introduction`} className="ml-3">
                            <div className={timeline ? text : textgray}>Timeline</div>
                        </a>
                        :
                        <a href={`${timeline}/#introduction`} className="ml-3">
                            <div className={timeline ? text : textgray}>Timeline</div>
                        </a>
                    }
                    <li className="flex ml-3 mr-3 no-underline font-semibold">
                        <div className={text}>Blog</div>
                    </li>
                    <a href={about} className="mr-3">
                        <div className={about ? text : textgray}>About</div>
                    </a>
                </div>
            </div>
        </div >
    )
}