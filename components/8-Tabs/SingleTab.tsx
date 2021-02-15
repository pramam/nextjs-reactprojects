import SVGChevronDoubleRightSmall from '../svgicons/SVGChevronDoubleRight'

import { IJob } from './definitions'

export interface IProps {
    job: IJob
}
export default function SingleTab({ job }: IProps) {
    return (
        <div className="ml-2 mr-2 lg:ml-0 lg:mr-0 max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col lg:pl-10">
                <h1 className="text-2xl md:text-3xl mb-2 tracking-wide">{job.title}</h1>
                <h1><span className="inline-flex items-center mb-4 lg:mb-3 mt-3 px-3 py-0.5 rounded text-sm font-medium bg-gray-400 text-gray-900">{job.company}</span></h1>
                <h3 className="mb-3 text-gray-700 tracking-wide">{job.dates}</h3>
            <ul>
                {job.duties.map((obj, index) =>
                    <li key={index} className="mb-3">
                        <div className="flex flex-row">
                            <span className="flex items-center">
                                <SVGChevronDoubleRightSmall css="h-4 w-4 text-red-700" />
                            </span>
                            <p className="ml-6 font-normal text-gray-900">{obj}</p>
                        </div>
                    </li>)}
            </ul>
        </div>
        </div>
    )
}