const birthdays = [
    {
        "name": "Alan",
        "dummy_field": "placeholder"
    },
    {
        "name": "Peter",
        "dummy_field": "placeholder"
    }
]
export default function ObjectManipulation() {

    // Add a dummy field to birthdays and display it
    birthdays.map((obj, index) =>
        obj.dummy_field = `hello ${index}`
    )
    return (
        <div>
            <div> hello world {birthdays.length}</div>
            <ul>
                {birthdays.map((obj, index) => (

                    <li key={index}>
                        <h1>{obj.name}</h1>
                        <h2>{obj.dummy_field}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}