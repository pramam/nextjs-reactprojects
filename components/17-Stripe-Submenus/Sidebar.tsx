import SVGX from '../svgicons/SVGX'
import { useGlobalStripeContext } from './Context'
import Button from './Button'
import submenuData from './submenudata'
import Link from 'next/link'
import { signin_url } from './submenudata'

//TODO: #BUG: When there is a lot of data on the Sidebar Modal I cannot scroll down on small screens in landscape mode
//      This is probably because it is in position `fixed`
export default function Sidebar() {
    const { closeSidebar } = useGlobalStripeContext();

    return (
        <div className="bg-gray-300 bg-opacity-70 fixed  z-20 pointer-events-auto w-full min-h-screen">
            <div className="flex justify-center z-20">
                {/* This was relative because the close X button was absolute earlier */}
                <div className="relative w-11/12 h-11/12 mt-5 sm:mt-5 md:mt-10 shadow-lg bg-gray-50 rounded-md">
                    <div className="flex flex-col">
                        <div className="flex justify-end mt-2 mr-2">
                            <button onClick={closeSidebar}
                                className="mt-2 mr-2 focus:outline-none border border-transparent">
                                <SVGX css="mt-1.5 h-4 w-4 text-gray-700" />
                            </button>
                        </div>

                        {/* List of items and Sign in Button  */}
                        <ul>
                            {submenuData.map((menu, index) => {
                                return (
                                    <li key={index} className="">
                                        <h1 className="ml-3 mb-5 font-bold text-gray-900 uppercase text-sm">{menu.page}</h1>
                                        <div className="grid grid-cols-2 gap-1 mb-3">
                                            {menu.links.map((item, index2) => {
                                                return (
                                                    <div key={index2}>

                                                            {/* TODO: #BUG: Document icon not displaying in Sidebar,
                                                              *             It displays on lg: screens*/}
                                                        <Link href={item.url}>
                                                            <a>
                                                                <div className="ml-3 flex flex-row whitespace-nowrap">
                                                                    {item.icon({ css: `h-6 w-6 ${item.textcolor}` })}
                                                                    <div className="ml-2 mr-10">{item.name}</div>
                                                                </div>
                                                            </a>
                                                            </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <span className="flex justify-center mt-4 mb-4">
                            <Button text="Sign in" url={signin_url} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}