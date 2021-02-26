import { useState } from 'react'
export default function SampleForm() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = { id: new Date().getTime().toString(), firstName, email } // ES6 equivalent of {firstName: firstName, email: email}
            console.log(person)
            setPeople(oldPeople => {
                // oldPeople.push(person)
                // return oldPeople
                return [...oldPeople, person];
            })
            setFirstName('')
            setEmail('')
        } else
            console.log("not added")
        // const newpeople = people
        // newpeople.push({ 'name': `${firstName}`, 'email': `${email}` })

        // setPeople(newpeople)
        // console.log(`submitted: name: ${firstName}, email: ${email}`)
        // console.log(`no people: ${people.length}`)
    }
    return (
        <div className="flex flex-col justify-center mt-6">
            <form className="form" onSubmit={handleSubmit}>
                <div className="">
                    <div className="mt-1 mb-2">Form</div>
                    <label htmlFor="firstName">Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                    <label htmlFor="email"> Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <button type="submit">Add Person</button>
                </div>
            </form>
            <ul>
                {people.map((obj, index) => {
                    const { id, firstName, email } = obj
                    return <li key={id} className="text-green-700"> {firstName} : {email}</li>
                })}
            </ul>
        </div>
    )
}