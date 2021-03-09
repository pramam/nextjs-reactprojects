import { useState } from 'react'
import { data } from './data'

export default function Index() {
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        setPeople((oldpeople) => {
            console.log(`Removing id ${id}`)
            return oldpeople.filter(item => item.id != id)
        })
    }
    return (
        <section>
            <h3 className="text-3xl text-center">Prop Drilling</h3>
            <List people={people} removePerson={removePerson} />
        </section>
    )
}

const List = ({ people, removePerson }) => {
    return (
        <>
            {people.map((obj) => {
                return <SinglePerson key={obj.id} {...obj}
                    removePerson={removePerson} />
            })}
        </>
    )
}

const SinglePerson = ({ id, name, removePerson }) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row max-w-2xl justify-between mb-2">
                <h4 className="text-xl text-center capitalize mr-3">{name}</h4>
                <button className="bg-blue-500 text-white focus:outline-none border border-transparent rounded-md"
                    onClick={() => removePerson(id)}>
                    Remove
            </button>
            </div>
        </div>
    )
}