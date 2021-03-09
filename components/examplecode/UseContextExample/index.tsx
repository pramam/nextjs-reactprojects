import { useState, useContext } from 'react'
import React from 'react'
import { data } from './data.js'

const PersonContext = React.createContext(null)
// two Components: Provider, Consumer
// Provider works as a distributer

export default function Index() {
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        setPeople((oldpeople) => {
            console.log(`Removing id ${id}`)
            return oldpeople.filter(item => item.id != id)
        })
    }
    return (
        <div className="mb-5">
            <PersonContext.Provider value={{ removePerson, people }}>
                <h3 className="text-3xl text-center">useContext Example</h3>
                <List />
            </PersonContext.Provider>
        </div>
    )
}

const List = () => {
    const mainData = useContext(PersonContext)

    return (
        <>
            {mainData.people.map((obj) => {
                return <SinglePerson key={obj.id} {...obj} />
            })}
        </>
    )
}

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext)
    // console.log(removePerson)
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