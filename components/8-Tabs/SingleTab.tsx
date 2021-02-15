import { IJob } from './definitions'

export interface IProps {
    job: IJob
}
export default function SingleTab({ job }: IProps) {
    return (
        <div className="lg:max-w-5xl">
            <div className="flex flex-col lg:pl-10">
                <h1 className="md:text-3xl">{job.title}</h1>
            <h3>{job.dates}</h3>
            <h2>{job.company}</h2>
            <ul>
                {job.duties.map((obj, index) =>
                    <li key={index}>
                        {obj}
                    </li>)}
            </ul>
        </div>
        </div>
    )
}