import { useContext } from 'react'
import { menuData, socialData } from './menudata'
import { Transition } from '@headlessui/react'
import SVGX from '../svgicons/SVGX'
import { AppContext } from './Context'

export default function Sidebar() {

    const { menuIsOpen, closeSidebar, showModal } = useContext(AppContext)
    const common_props = "z-0 fixed w-full h-screen md:w-1/2 lg:w-3/12 lg:h-screen"
    // Do not allow operation of Sidebar if Modal is open
    const gray_out_function_props = "pointer-events-none opacity-50"

    return (
        <div className={`${showModal ? `${common_props} ${gray_out_function_props}` : `${common_props}`}`}>
            <Transition
                show={menuIsOpen}
                enter="transition-opacity ease-in-out duration-3000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in-out duration-3000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="relative bg-white w-full h-screen">
                    <div className="flex flex-row justify-between mb-10">
                        <div className="ml-10 md:mr-7 mt-5 md:mt-7 lg:mt-7 lg:mr-7 text-3xl flex flex-row">
                            <div className="hidden sm:block text-gray-900 font-semibold">Your&nbsp;</div>
                            <div className="text-indigo-700 font-bold">Logo&nbsp;</div>
                            <div className="hidden sm:block text-gray-900 font-semibold">Here</div>
                        </div>
                        <button onClick={closeSidebar} 
                            className="mt-5 md:mt-7 mr-5 focus:outline-none border border-transparent">
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
                    <ul className="absolute flex flex-row ml-10 bottom-0">
                        {socialData.map((obj) => {
                            return (
                                <li key={obj.id}
                                    className="mr-3 text-blue-500">
                                    {obj.icon}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Transition>
        </div>
    )
}