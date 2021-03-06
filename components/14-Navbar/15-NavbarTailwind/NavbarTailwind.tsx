import { useState, useEffect, useRef } from 'react'
import { navlinks, sociallinks } from '../navbaritems'
import SVGMenu from '../../svgicons/SVGMenu'
import SVGX from '../../svgicons/SVGX'
import { Transition } from '@headlessui/react'

export default function NavbarTailwind() {
    const [isopen, setIsOpen] = useState(false)
    const refDropdownTotal = useRef(null)
    const refLinks = useRef(null)
    const refSocial = useRef(null)
    
    const clickHandler = () => {
        setIsOpen(!isopen)
    }

    // useEffect(() => {
        // const linksHeight = refLinks.current.getBoundingClientRect().height;
        // const socialHeight = refSocial.current.getBoundingClientRect().height;

        // const dropdownCalcHeight = refDropdownTotal.current.getBoundingClientRect().height;

        // as I close the dropdown, it shows me the previous heights
        // console.log(`refDropdownCalcHeight: ${dropdownCalcHeight}`)
        // console.log(`refDropdownTotal height: ${refDropdownTotal.current.getBoundingClientRect().height}`)
        // console.log(`refLinks: ${linksHeight}`)
        // console.log(`refSocial: ${socialHeight}`)
        // use height of refLinks and refSocial to change the height of refDropdownTotal.
        // why doesn't he calculate the height of refDropdownTotal directly?
        // if (isopen)
        //     refDropdownTotal.current.style.height = `${linksHeight + socialHeight}px`
        // else
        //     refDropdownTotal.current.style.height = '0px';
    // }, [isopen])

    const dropdownmenu_common_props = `flex flex-col transition-all duration-700 ease-in-out h-0 overflow-hidden`
    // move this to a separate div contained inside <Transition/>
    // const dropdownmenu_twtransition_props = `flex flex-col`

    // We cannot hard code this height 
    const dropdownmenu_clicked_props = "h-52" // This doesn't work: `height: '210px'` 

    const style_common = { height: '0px' }
    const style_open = { height: '208px' }
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
                {/* <div 
                    This works:
                    className={`${isopen ? `${dropdownmenu_common_props} ${dropdownmenu_clicked_props}` : `${dropdownmenu_common_props}`}`}
                    
                    This works:
                    className={`${isopen ? 'navbar-container navbar-show-container' : 'navbar-container'}`}
                    
                    This works, but might have issues on older browsers:
                    https://reactjs.org/docs/dom-elements.html#style
                    style={isopen ? { height: '208px', overflow: 'hidden', transition: "all 0.3s linear" } : { height: '0px', overflow: 'hidden', transition: "all 0.3s linear" }}
                    ref={refDropdownTotal}> */}
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
                    <div className="sm:hidden flex flex-col" ref={refLinks}>
                        <ul className="flex flex-col mt-3">
                        {navlinks.map((obj, index) => {
                            return (
                                <li key={index} className="mt-2">{obj.label}</li>
                            )
                        })}
                        </ul>
                    </div>
                    <div ref={refSocial}>
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