import { useRef, useEffect } from 'react'
import { useGlobalStripeContext } from './Context'
import submenuData from './submenudata'
import Link from 'next/link'
import Arrow from './Arrow'

export default function SubmenuCard() {
    const { navButtonToShow, navButtonIndex, navPrevButtonIndex, coordinates } = useGlobalStripeContext()
    const refSubmenuCard = useRef(null)
    const refArrow = useRef(null)
    const links = submenuData[navButtonIndex].links;

    useEffect(() => {
        refSubmenuCard.current.style.left = `${coordinates.left}px`
        refSubmenuCard.current.style.top = `${coordinates.bottom}px`
        refArrow.current.style.left = `${coordinates.center - 4}px`
        refArrow.current.style.top = `${coordinates.bottom - 8}px `
    }, [coordinates])

    return (
        <div>
            <div className="fixed z-10"
                // These pixels are calculated based on the size of the arrow(8px) in globals.css
                // style={{ left: `${coordinates.center - 4}px`, top: `${coordinates.bottom - 8}px ` }}
                ref={refArrow}>
                <Arrow />
            </div>


            <div className="fixed py-7 bg-white z-10 inline-block rounded-md shadow-lg"
                // Adding inline style here gives me a bug when TIMELINE is added
                // The submenu is too low and I cannot close it
                // Follow the original tutorial that uses a useRef here to do inline styles on the submenu           
                // style={{ left: `${coordinates.left}px`, top: `${coordinates.bottom}px` }}
                // Update: Changed `absolute` positioning to `fixed`
                ref={refSubmenuCard}
            >
                <div className="flex flex-col">

                    <h3 className="ml-3 mb-3 font-semibold text-indigo-900 uppercase text-sm">{navButtonToShow}</h3>
                    {/* <li>Submenu: {navButtonToShow}: index: {navButtonIndex}</li>
                    <li>PrevButtonIndex: {navPrevButtonIndex} NavButtonIndex: {navButtonIndex} </li>
                    <li>Coords: {coordinates.center}, {coordinates.bottom}</li> */}
                    <ul className="ml-3 flex flex-row">
                        {links.map((obj, index) => {
                            return (
                                <li key={index}>
                                        {/* TODO: #BUG: Document icon displays here,
                                          *             not displaying on < lg: screens*/}
                                    <Link href={obj.url}>
                                        <a>
                                            <div className="flex flex-row">
                                                {obj.icon({ css: `h-6 w-6 ${obj.textcolor}` })}
                                                <div className="ml-2 mr-10">{obj.name}</div>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}