export default function SingleTab({ data }) {
    return (
        <div>
            <h1>{data.title}</h1>
            <h3>{data.dates}</h3>
            <h2>{data.company}</h2>
        </div>
    )
}