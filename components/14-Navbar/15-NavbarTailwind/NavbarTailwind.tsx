import { useState } from 'react'
import { navlinks, sociallinks } from '../navbaritems'
import SVGMenu from '../../svgicons/SVGMenu'
import SVGX from '../../svgicons/SVGX'
import { Transition } from '@headlessui/react'

export default function NavbarTailwind() {
    const [isopen, setIsOpen] = useState(false)
    
    const clickHandler = () => {
        setIsOpen(!isopen)
    }


    return (
        <div className="bg-white mt-5">
            <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="ml-2 sm:ml-5 md:ml-10 lg:ml-20 mb-5 text-3xl flex flex-row">
                        <div className="hidden md:block text-gray-900 font-semibold">Tailwind&nbsp;</div>
                        <div className="text-indigo-600 font-bold">Transition&nbsp;</div>
                        {/* <div className="hidden md:block text-gray-900 font-semibold">Here</div> */}
                </div>
                <div className="hidden sm:block">
                    <ul className="flex flex-row mt-3">
                        {navlinks.map((obj, index) => {
                            return (
                                <li key={index} className="mr-2">{obj.label}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="hidden sm:block">
                        <ul className="flex flex-row mt-3 mr-20">
                        {sociallinks.map((obj, index) => {
                            return (
                                <li key={index} className="mr-2 text-blue-500">{obj.icon}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="sm:hidden mr-2">
                        <button type="button"
                            className="focus:outline-none border border-transparent"
                            onClick={clickHandler}>
                            {isopen ? <SVGX css="h-10 w-10 text-gray-400" />
                                : <SVGMenu css="h-10 w-10 text-gray-400" />
                            }
                        </button>
                    </div>
                </div>
                {/* Drop down menu  */}
                <Transition
                    show={isopen}
                    enter="transition-opacity duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* The following div and its contents will be rendered as a part of the transition */}
                    <div className="flex flex-col">
                        <div className="sm:hidden flex flex-col">
                        <ul className="flex flex-col mt-3">
                        {navlinks.map((obj, index) => {
                            return (
                                <li key={index} className="mt-2">{obj.label}</li>
                            )
                        })}
                        </ul>
                    </div>
                        <div>
                        <div className="sm:hidden flex flex-col"> {/* had to move mt, mb down to ul to get height calculations to include mt/mb */}
                            <ul className="mt-3 mb-3 flex flex-row mr-3">
                        {sociallinks.map((obj, index) => {
                            return (
                                <li key={index} className="mr-2 text-blue-500">{obj.icon}</li>
                            )
                        })}
                        </ul>
                        </div>
                    </div>
                    </div>
                </Transition>
                {/* </div> End of dropdown menu */}
            </div>
        </div>
    )
}