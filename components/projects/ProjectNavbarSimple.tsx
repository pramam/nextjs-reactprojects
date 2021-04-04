import SVGChevronLeft from '../svgicons/SVGChevronLeft'
import SVGChevronRight from '../svgicons/SVGChevronRight'
import Link from 'next/link'

export interface IProps {
    projectNum: number,
    prevProjectUrl?: string,
    nextProjectUrl?: string,
    about: string,
    timeline: string,
    textColor: string,
    isProject: boolean
    includeBlogs: boolean
    fixed: boolean
}

export default function ProjectNavbarSimple({
    projectNum,
    prevProjectUrl,
    nextProjectUrl,
    about,
    timeline,
    textColor,
    isProject,
    includeBlogs,
    fixed }: IProps) {
    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"
    const chevronCss = `mt-1 h-4 w-4 text-center ${textColor}`
    const chevronCssGray = `mt-1 h-4 w-4 text-gray-500 text-center cursor-not-allowed`

    const cssfixed = "z-50 bg-white fixed left-0 right-0 opacity-100 transform -translate-y-7"
    return (
        <div className={fixed ? `${cssfixed}` : ``} >
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
                    <Link href={nextProjectUrl}>
                        <a>
                            <li className="flex flex-col">
                                <SVGChevronRight css={nextProjectUrl ? chevronCss : chevronCssGray} />
                            </li>
                        </a>
                    </Link>
                </div>
            </div>
        </div >
        </div>
    )
}