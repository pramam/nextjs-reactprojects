import SVGChevronLeft from '../svgicons/SVGChevronLeft'
import SVGChevronRight from '../svgicons/SVGChevronRight'
import Link from 'next/link'

export interface IProps {
    projectNum: number,
    dayNum: number,
    blogUrl?: string,
    prevProjectUrl?: string,
    nextProjectUrl?: string,
    githuburl?: string,
    inspiration: string,
    textColor: string
}

export default function ProjectNavbar({
    projectNum,
    dayNum,
    blogUrl,
    prevProjectUrl,
    nextProjectUrl,
    githuburl,
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
                    <Link href={prevProjectUrl}>
                        <a>
                            <li className="flex flex-col"
                            >
                                <SVGChevronLeft css={prevProjectUrl ? chevronCss : chevronCssGray} />
                            </li>
                        </a>
                    </Link>
                    <a href={inspiration} className="ml-3 hidden sm:block">
                        <div className={inspiration ? text : textgray}>Inspiration</div>
                    </a>
                    <li className="flex ml-3 mr-3 no-underline font-semibold">
                        <div className={text}>Project {projectNum}&nbsp;</div>
                        <div className={text}>Day {dayNum}</div>
                    </li>
                    <Link href={blogUrl}>
                        <a className="mr-3 hidden sm:block">
                            <div className={blogUrl ? text : textgray}>Blog</div>
                        </a>
                    </Link>
                    <a href={githuburl} className="mr-3 hidden sm:block">
                        <div className={githuburl ? text : textgray}>Github</div>
                    </a>
                    <Link href={nextProjectUrl}>
                        <a>
                            <li className="flex flex-col">
                                <SVGChevronRight css={nextProjectUrl ? chevronCss : chevronCssGray} />
                            </li>
                        </a>
                    </Link>
                </div>
                <div className="mt-2 flex flex-row justify-center sm:hidden">
                    <a href={inspiration} className="mr-3">
                        <div className={inspiration ? text : textgray}>Inspiration</div>
                    </a>
                    <Link href={blogUrl}>
                        <a className="mr-3">
                            <div className={blogUrl ? text : textgray}>Blog</div>
                        </a>
                    </Link>
                    <a href={githuburl}>
                        <div className={githuburl ? text : textgray}>Github</div>
                    </a>
                </div>
            </div>
        </div>
    )
}