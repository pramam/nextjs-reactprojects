import { useState } from 'react'
export default function FormMultipleInputs() {
    // const [firstName, setFirstName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
    const [people, setPeople] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setPerson({ ...person, [name]: value }) // dynamic object properties
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            // const newPerson = {'firstName': person.firstName, 'email': person.email, 'age': person.age}
            // setPeople([...people, newPerson])
            const newPerson = { ...person, id: new Date().getTime().toString() }
            setPeople([...people, newPerson])
            setPerson({ firstName: '', email: '', age: '' })
        }
    }
    return (
        <div className="mt-6 max-w-2xl shadow-lg flex justify-center mx-auto">
            <div className=""> {/*flex flex-row justify-center*/}
                <div className="w-full">
                    <form className="form mb-6 max-w-lg" >
                        <div className="flex flex-col">
                            <div className="mt-1 mb-2 text-xl">Form</div>
                            <label htmlFor="firstName"
                                className="text-gray-700 font-semibold mb-2">First name</label>
                            <input
                                type="text"
                                className="w-full bg-gray-100 rounded-md border border-transparent mb-6"
                                id="firstName"
                                name="firstName"
                                value={person.firstName}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="email"
                                className="text-gray-700 font-semibold mb-2"> Email address</label>
                            <input
                                type="text"
                                className="bg-gray-100 rounded-md border border-transparent mb-6"
                                id="email"
                                name="email"
                                value={person.email}
                                onChange={handleChange}
                            ></input>
                            <label htmlFor="age"
                                className="text-gray-700 font-semibold mb-2"> Age</label>
                            <input
                                type="text"
                                className="bg-gray-100 rounded-md border border-transparent mb-6"
                                id="age"
                                name="age"
                                value={person.age}
                                onChange={handleChange}
                            ></input>
                            <button
                                type="submit"
                                className="bg-indigo-500 py-2 rounded-md text-white focus:outline-none"
                                onClick={handleSubmit}
                            >
                                Add Person
                        </button>
                        </div>
                    </form>
                    <ul className="mx-auto shadow-lg mb-6 w-full">
                        {people.map((obj, index) => {
                            const { id, firstName, email, age } = obj
                            return (
                                <li key={id} className="text-gray-900">
                                    <span className="font-bold">{firstName}</span>
                                    <span>Email : {email}</span>
                                    <span>Age : {age}</span>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}