import { useState } from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'
import SVGX from '../svgicons/SVGX'

export default function SidebarModal() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const menuHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const showModalHandler = () => {
        setShowModal(!showModal)
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

            {showModal ?
                <div className="bg-gray-600 z-10 min-h-screen ">
                    <div className="flex justify-center z-20">
                    <div className="relative w-4/5 sm:w-3/5 lg:w-1/2 2xl:w-1/5 mt-32 sm:mt-32 md:mt-40 shadow-lg bg-gray-50 rounded-md">
                        <div className="flex flex-row justify-end">
                            <p className="flex justify-center py-20 sm:py-28 lg:py-40 mx-auto text-3xl">Modal Content</p>
                            <div className="absolute mt-2">
                                <button onClick={showModalHandler}
                                    className="mt-5 md:mt-7 mr-5 focus:outline-none border border-transparent">
                                    <SVGX css="mt-1.5 h-8 w-8 text-red-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                : 
            <div className="mx-auto text-center h-full">
                    <button className="transform translate-y-60 sm:translate-y-60 md:translate-y-96 bg-indigo-700 text-white px-3 py-3 rounded-md focus:outline-none border border-transparent"
                        onClick={showModalHandler}
                    >
                        Show Modal
                </button>
            </div>
            }
        </>
    )
}