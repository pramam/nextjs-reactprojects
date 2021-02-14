import { IJob } from './definitions'

export interface IProps {
    job: IJob
}
export default function SingleTab({ job }: IProps) {
    return (
        <div>
            <h1>{job.title}</h1>
            <h3>{job.dates}</h3>
            <h2>{job.company}</h2>
            <ul>
                {job.duties.map((obj, index) =>
                    <li key={index}>
                        {obj}
                    </li>)}
            </ul>
        </div>
    )
}