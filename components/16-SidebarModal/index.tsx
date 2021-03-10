import { useState } from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'

export default function SidebarModal() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const menuHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <>
            <div className="flex flex-row">
                {menuIsOpen ?
                <Sidebar menuIsOpen={menuIsOpen} closeHandler={menuHandler} />
                    :
                    <Menu clickHandler={menuHandler} />
                }
            </div>
            <div className="mx-auto text-center h-full">
                <button className="transform translate-y-60 sm:translate-y-60 md:translate-y-96 bg-indigo-700 text-white px-3 py-3 rounded-md focus:outline-none border border-transparent">Show Modal</button>
            </div>
        </>
    )
}