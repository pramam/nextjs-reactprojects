import { useState, useEffect, useRef } from 'react'
import { navlinks, sociallinks } from './navbaritems'
import SVGMenu from '../svgicons/SVGMenu'

export default function Navbar() {
    const [isopen, setIsOpen] = useState(false)
    const refDropdownTotal = useRef(null)
    const refLinks = useRef(null)
    const refSocial = useRef(null)

    const clickHandler = () => {
        setIsOpen(!isopen)
    }

    useEffect(() => {
        console.log(`refDropdowntotal: ${refDropdownTotal}`)
        console.log(`refDropdownTotal height: ${refDropdownTotal.current.getBoundingClientRect().height}`)
        console.log(`refLinks: ${refLinks.current.getBoundingClientRect().height}`)
        console.log(`refSocial: ${refSocial.current.getBoundingClientRect().height}`)
    }, [isopen])

    return (
        <div className="bg-white mt-5">
            <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="ml-2 sm:ml-5 md:ml-10 lg:ml-20 mb-5 text-3xl flex flex-row">
                    <div className="hidden md:block text-gray-900 font-semibold">Your&nbsp;</div>
                    <div className="text-red-600 font-bold">Logo&nbsp;</div>
                    <div className="hidden md:block text-gray-900 font-semibold">Here</div>
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
                        <button type="button" onClick={clickHandler}>
                    <SVGMenu css="h-10 w-10 text-gray-400" />
                        </button>
                    </div>
                </div>
                {/* Drop down menu  */}
                <div className="flex flex-col" ref={refDropdownTotal}>
                    <div className="sm:hidden flex flex-col" ref={refLinks}>
                        {isopen ? (<ul className="flex flex-col mt-3">
                        {navlinks.map((obj, index) => {
                            return (
                                <li key={index} className="mt-2">{obj.label}</li>
                            )
                        })}
                    </ul>) : ''}
                </div>
                    <div className="mt-3 mb-3 sm:hidden flex flex-col" ref={refSocial}>
                    {isopen ? (<ul className="flex flex-row mr-3">
                        {sociallinks.map((obj, index) => {
                            return (
                                <li key={index} className="mr-2 text-blue-500">{obj.icon}</li>
                            )
                        })}
                    </ul>) : ''}
                </div>
                </div>
            </div>
        </div>
    )
}