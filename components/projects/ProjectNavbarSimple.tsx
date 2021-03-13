import SVGChevronLeft from '../svgicons/SVGChevronLeft'
import SVGChevronRight from '../svgicons/SVGChevronRight'
import Link from 'next/link'

export interface IProps {
    projectNum: number,
    // dayNum: number,
    // blogUrl?: string,
    prevProjectUrl?: string,
    nextProjectUrl?: string,
    // githubUrl?: string,
    // inspiration: string,
    about: string,
    timeline: string,
    textColor: string,
    isProject: boolean
    includeBlogs: boolean
}

export default function ProjectNavbarSimple({
    projectNum,
    // dayNum,
    // blogUrl,
    prevProjectUrl,
    nextProjectUrl,
    // githubUrl,
    // inspiration,
    about,
    timeline,
    textColor,
    isProject,
    includeBlogs }: IProps) {
    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"
    const chevronCss = `mt-1 h-4 w-4 text-center ${textColor}`
    const chevronCssGray = `mt-1 h-4 w-4 text-gray-500 text-center cursor-not-allowed`

    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row justify-center">

                    <Link href={prevProjectUrl}>
                        <a>
                            <li className="flex flex-col"
                            >
                                <SVGChevronLeft css={prevProjectUrl ? chevronCss : chevronCssGray} />
                            </li>
                        </a>
                    </Link>
                    {/* #TIMELINE  */}
                    {timeline === "/" ?
                        <Link href={`/#project${projectNum}`}>
                            <a className="ml-3">
                                <div className={timeline ? text : textgray}>Timeline</div>
                            </a>
                        </Link> :
                        <Link href={`${timeline}/#project${projectNum}`}>
                            <a className="ml-3">
                                <div className={timeline ? text : textgray}>Timeline</div>
                            </a>
                        </Link>
                    }
                    <li className="flex ml-3 mr-3 no-underline font-semibold">
                        {!isProject ?
                            <div className={text}>{includeBlogs ? `Blog` : ``}</div>
                            :
                        <div className={text}>Project {projectNum}&nbsp;</div>
                        }
                    </li>
                    <Link href={about}>
                        <a className="mr-3">
                            <div className={about ? text : textgray}>About</div>
                        </a>
                    </Link>
                    {/* <a href={githubUrl} className="mr-3 hidden sm:block">
                        <div className={githubUrl ? text : textgray}>Github</div>
                    </a> */}
                    <Link href={nextProjectUrl}>
                        <a>
                            <li className="flex flex-col">
                                <SVGChevronRight css={nextProjectUrl ? chevronCss : chevronCssGray} />
                            </li>
                        </a>
                    </Link>
                </div>
                {/* <div className="mt-2 flex flex-row justify-center sm:hidden">
                    <a href={inspiration} className="mr-3">
                        <div className={inspiration ? text : textgray}>Inspiration</div>
                    </a>
                    <span className={`mr-2 mt-1.5 rounded-full h-1.5 w-1.5 flex-items-center justify-center bg-gray-50`}></span>
                    <a href={blogUrl} className="mr-3">
                        <div className={blogUrl ? text : textgray}>Blog</div>
                    </a>
                    <span className={`mr-2 mt-1.5 rounded-full h-1.5 w-1.5 flex-items-center justify-center bg-gray-50`}></span>
                    <a href={githubUrl}>
                        <div className={githubUrl ? text : textgray}>Github</div>
                    </a>
                </div> */}
            </div>
        </div >
    )
}