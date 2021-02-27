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
        <div className="mt-6 max-w-2xl shadow-lg flex justify-center mx-auto">
            <div className=""> {/*flex flex-row justify-center*/}
                <div className="w-full">
                    <form className="mb-6 max-w-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mt-1 mb-2 text-xl">Form</div>
                            <label htmlFor="firstName"
                                className="text-gray-700 font-semibold mb-2">First name</label>
                        <input
                            type="text"
                                className="w-full bg-gray-100 rounded-md border border-transparent mb-6"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                            <label htmlFor="email"
                                className="text-gray-700 font-semibold mb-2"> Email address</label>
                        <input
                            type="text"
                                className="bg-gray-100 rounded-md border border-transparent mb-6"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                            <button
                                type="submit"
                                className="bg-indigo-500 py-2 rounded-md text-white focus:outline-none"
                            >
                                Add Person
                        </button>
                </div>
            </form>
                    <ul className="mx-auto shadow-lg mb-6 w-full">
                {people.map((obj, index) => {
                    const { id, firstName, email } = obj
                    return (
                        <li key={id} className="text-gray-900">
                            <span className="font-bold">{firstName}</span>
                            <span> : {email}</span>
                        </li>)
                })}
            </ul>
            </div>
            </div>
        </div>
    )
}