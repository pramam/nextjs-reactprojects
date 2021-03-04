import SVGChevronLeft from '../svgicons/SVGChevronLeft'
import SVGChevronRight from '../svgicons/SVGChevronRight'

export interface IProps {
    projectNum: number,
    dayNum: number,
    blogUrl?: string,
    prevProjectUrl?: string,
    nextProjectUrl?: string,
    githubUrl?: string,
    inspiration: string,
    textColor: string
}

export default function ProjectNavbar({
    projectNum,
    dayNum,
    blogUrl,
    prevProjectUrl,
    nextProjectUrl,
    githubUrl,
    inspiration,
    textColor }: IProps) {
    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"
    const chevronCss = `mt-1 h-4 w-4 text-center ${textColor}`
    const chevronCssGray = `mt-1 h-4 w-4 text-gray-500 text-center cursor-not-allowed`
    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">

                    <a href={prevProjectUrl}>
                        <li className="flex flex-col"
                        >
                            <SVGChevronLeft css={prevProjectUrl ? chevronCss : chevronCssGray} />
                            {/* <div className={prevProjectUrl ? text : textgray}>Previous</div>
                            <div className={prevProjectUrl ? text : textgray}>Project</div> */}
                        </li>
                    </a>
                    <li className="flex ml-3 mr-3 no-underline font-semibold">
                        <div className={text}>Project {projectNum}&nbsp;</div>
                        <div className={text}>Day {dayNum}</div>
                    </li>
                    <a href={nextProjectUrl}>
                        <li className="flex flex-col">
                            <SVGChevronRight css={nextProjectUrl ? chevronCss : chevronCssGray} />
                            {/* <div className={nextProjectUrl ? text : textgray}>Next</div>
                            <div className={nextProjectUrl ? text : textgray}>Project</div> */}
                        </li>
                    </a>
                </div>
                <div className="mt-2 flex flex-row justify-center">
                    <a href={inspiration} className="mr-3">
                        <div className={inspiration ? text : textgray}>Inspiration</div>
                    </a>
                    {/* <span className={`mr-2 mt-1.5 rounded-full h-1.5 w-1.5 flex-items-center justify-center bg-gray-50`}></span> */}
                    <a href={blogUrl} className="mr-3">
                        <div className={blogUrl ? text : textgray}>Blog</div>
                    </a>
                    {/* <span className={`mr-2 mt-1.5 rounded-full h-1.5 w-1.5 flex-items-center justify-center bg-gray-50`}></span> */}
                    <a href={githubUrl}>
                        <div className={githubUrl ? text : textgray}>Github</div>
                    </a>
                </div>
            </div>
        </div>
    )
}