import { useState } from 'react'
import SVGMenu from '../svgicons/SVGMenu'
import SVGX from '../svgicons/SVGX'
import { menuData } from './menudata'

export default function SidebarModal() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const menuHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className="flex">
            <div className="lg:w-3/12 lg:h-screen">
                {menuIsOpen ?
                    (<div className="bg-white w-full h-full">
                        <div className="flex flex-row mb-10">
                            <div className="ml-2 sm:ml-5 md:ml-10 lg:ml-10 lg:mr-7 lg:mt-7 text-3xl flex flex-row">
                                <div className="hidden md:block text-gray-900 font-semibold">Your&nbsp;</div>
                                <div className="text-indigo-700 font-bold">Logo&nbsp;</div>
                                <div className="hidden md:block text-gray-900 font-semibold">Here</div>
                            </div>
                            <button onClick={menuHandler}
                                className="lg:mt-7 focus:outline-none border border-transparent">
                                <SVGX css="mt-1.5 h-8 w-8 text-red-700" />
                            </button>
                        </div>
                        <ul className="lg:mb-20">
                            {menuData.map((obj) => {
                                return (
                                    <li key={obj.id}>
                                        <div className="flex flex-row mb-10 ml-10">
                                            {obj.icon({ css: 'h-6 w-6 text-gray-500 mr-3' })}
                                            <h3 className="text-xl tracking-wider">{obj.label}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>)
                    :
                    <button onClick={menuHandler}
                        className="ml-2 sm:ml-5 md:ml-10 lg:ml-10 lg:mr-7 lg:mt-7 focus:outline-none border border-transparent">
                        <SVGMenu css="h-10 w-10 text-indigo-700" />
                    </button>

                }
            </div>
        </div>
    )
}