import { useEffect } from 'react'
import { useGlobalStripeContext } from './Context'
import { Transition } from '@headlessui/react'
import SubmenuCard from './SubmenuCard'

export default function Submenu() {
    const { isSubmenuOpen, navButtonToShow, navButtonIndex, navPrevButtonIndex, coordinates } = useGlobalStripeContext()
    const topSpacePx = 0 //-3
    // const refContainer = useRef(null)
    useEffect(() => {
        // const submenu = refContainer.current
        // const { center, bottom } = coords
        // // He used this for inline styling which I don't need
    }, [coordinates])
    return (
        <div
        // ref={refContainer}
        >
            {isSubmenuOpen ?
                <Transition
                    // appear doesn't seem to do what I expect
                    appear={false}
                    // #SubmenuTransition
                    show={navButtonIndex != navPrevButtonIndex}
                    // enter="transform duration-700"
                    // enterFrom="scale-0 "
                    // enterTo="scale-100"
                    // leave="transform duration-700"
                    // leaveFrom="scale-100"
                    // leaveTo="scale-0"

                    enter="transition ease-in-out duration-700 transform"
                    enterFrom="translate-x-0" //"-translate-x-1/2"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-700 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-1/2"
                >
                    <SubmenuCard />
                    {/* <div>
                    <div className="absolute py-10 bg-gray-50 z-10 inline-block rounded-md"
                        style={{ left: `${coords.left}px`, top: `${coords.bottom + topSpacePx}px` }}
                    >
                        <div className="flex flex-col">

                            <li>Submenu: {navButtonToShow}: index: {navButtonIndex}</li>
                            <li>PrevButtonIndex: {navPrevButtonIndex} NavButtonIndex: {navButtonIndex} </li>
                            <li>Coords: {coords.center}, {coords.bottom}</li>
                        </div>
                    </div>
                </div> */}
                </Transition>
                : ``
            }
        </div>
    )
}