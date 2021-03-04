export interface IProps {
    projectNum: number,
    dayNum: number,
    blogUrl?: string,
    prevProjectUrl?: string,
    nextProjectUrl?: string,
    githubUrl?: string,
    textColor: string
}

export default function ProjectNavbar({
    projectNum,
    dayNum,
    blogUrl,
    prevProjectUrl,
    nextProjectUrl,
    githubUrl,
    textColor }: IProps) {
    const text = `text-sm uppercase text-center ${textColor}`
    const textgray = "text-sm uppercase text-gray-500 cursor-not-allowed text-center"
    return (
        <div className="flex justify-center mx-auto">
            <div className="mt-2 flex flex-col">
                <div className="flex flex-row">

                    <a href={prevProjectUrl}>
                        <li className="flex flex-col"
                        >
                            <div className={prevProjectUrl ? text : textgray}>Previous</div>
                            <div className={prevProjectUrl ? text : textgray}>Project</div>
                        </li>
                    </a>
                    <li className="flex flex-col ml-3 mr-3 no-underline font-semibold">
                        <div className={text}>Project {projectNum}</div>
                        <div className={text}>Day {dayNum}</div>
                    </li>
                    <a href={nextProjectUrl}>
                        <li className="flex flex-col">
                            <div className={nextProjectUrl ? text : textgray}>Next</div>
                            <div className={nextProjectUrl ? text : textgray}>Project</div>
                        </li>
                    </a>
                </div>
                <div className="mt-2 flex flex-row justify-center">
                    <a href={blogUrl} className="mr-3">
                        <div className={blogUrl ? text : textgray}>Blog</div>
                    </a>
                    <a href={githubUrl}>
                        <div className={githubUrl ? text : textgray}>Github</div>
                    </a>
                </div>
            </div>
        </div>
    )
}