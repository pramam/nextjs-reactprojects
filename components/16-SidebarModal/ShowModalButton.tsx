import { useContext } from 'react'
import { AppContext } from './Context'

export default function ShowModalButton() {
    const { openModal } = useContext(AppContext)
    return (
        <div className="z-10 mx-auto text-center h-full">
            <button className="transform translate-y-60 sm:translate-y-60 md:translate-y-96 bg-indigo-700 text-white px-3 py-3 rounded-md focus:outline-none border border-transparent"
                onClick={openModal}>
                Show Modal
                </button>
        </div>
    )
}