import { useGlobalStripeContext } from './Context'
import submenuData from './submenudata'
import Link from 'next/link'

export default function SubmenuCard() {
    const { navButtonToShow, navButtonIndex, navPrevButtonIndex, coordinates } = useGlobalStripeContext()
    const topSpacePx = 0 //-3
    const links = submenuData[navButtonIndex].links;

    return (
        <div>
            <div className="absolute py-7 bg-gray-50 z-10 inline-block rounded-md shadow-lg"
                style={{ left: `${coordinates.left}px`, top: `${coordinates.bottom + topSpacePx}px` }}
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
                                    <div className="flex flex-row">
                                        {/* TODO: #BUG: Document icon displays here,
                                          *             not displaying on < lg: screens*/}
                                        {obj.icon({ css: `h-6 w-6 ${obj.textcolor}` })}
                                        <Link href={obj.url}>
                                            <a className="ml-2 mr-10">{obj.name}</a>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}