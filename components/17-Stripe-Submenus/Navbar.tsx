import { useState } from 'react'
import SVGLogo from './svgimages/SVGLogo'
import Button from './Button'
import SVGMenu from '../svgicons/SVGMenu'
import { useGlobalStripeContext } from './Context'
import Link from 'next/link'
import submenuData from './submenudata'

export default function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalStripeContext();
    const [pageindex, setPageIndex] = useState(0);
    // onMouseOver could call openSubmenu, but it calls this function instead
    // to add additional functionality
    const displaySubmenu = (e) => {
        const btn = e.target.getBoundingClientRect()
        // Left is left shifted to half the width
        const left = btn.left - (btn.width / 2)
        // Bottom is used to position the top of the Submenu
        const bottom = btn.bottom
        // Center is needed for the arrow
        const center = (btn.right - btn.left) / 2

        const label = e.target.textContent
        console.log(btn)
        console.log(e.target.textContent)
        // console.log(`displaySubmenu: e.target.value ${e.target.value}`)
        // console.log(`displaySubmenu button, ${btn}, center ${center}, bottom ${btn.bottom}`)
        openSubmenu(label, left, bottom, center)
    }
    const handleLeave = (e) => {
        //https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
        // let classList = e.target.classList;

        // console.log(`handleLeave: e.target.classList: ${e.target.classList}`)
        // const containsresult = e.target.classList.contains('stripedummy')
        // if (!e.target.classList.contains('stripedummy')) {
        //     console.log(`handleLeave does not contain stripedummy`)
        //     // console.log(containsresult)
        //     closeSubmenu()
        // }
        // else {
        //     console.log(`handleLeave: contains YES`)
        //     // console.log(containsresult)
        // }
        if (e.target.classList.item[0] = 'stripedummy') {
            console.log(`handleLeave: YES stripedummy`)
            closeSubmenu()
        }
        else {
            console.log(`handleLeave: Staying`)
            // closeSubmenu()
        }
            // if (!e.target.classList.contains('stripedummy')) {
        //     closeSubmenu()
        // }
        // else
        //     console.log(`handleLeave: not leaving`)

    }
    return (
        <div className="w-full">
            <div className="flex flex-row justify-between">
                <h1 className="mt-8 ml-10 sm:ml-16"><SVGLogo /></h1>
                <ul className="hidden text-white w-5/12 mt-10 lg:flex lg:flex-row">
                    {submenuData.map((obj, index) => {
                        return (
                            <li key={index}>
                                <button
                                    // Don't wrap Use cases on 2 lines:whitespace-nowrap
                                    className="stripedummy whitespace-nowrap text-xl font-semibold"
                                    onMouseOver={displaySubmenu}
                                // onMouseLeave={handleLeave}
                                >
                                    {/* px-4 py-2 here prevents the bottom-px reading from shifting as the mouse moves */}
                                    <div className="px-4 py-2">{obj.page}</div>
                                </button>
                            </li>
                        )
                    })}
                    {/* <li>
                        <button
                            className="stripedummy text-xl font-semibold"
                            onMouseOver={displaySubmenu}
                        // onMouseLeave={handleLeave}
                        >
                            <div className="mx-8 my-2">Products</div>
                        </button>
                    </li> */}
                    {/* <li>
                        <button
                            className="stripedummy text-xl font-semibold"
                            onMouseOver={displaySubmenu}
                        // onMouseLeave={handleLeave}
                        >
                            <div className="mx-8 my-2">Developers</div>
                        </button>
                    </li> */}
                    {/* <li>
                        <button
                            className="stripedummy text-xl font-semibold"
                            onMouseOver={displaySubmenu}
                        // onMouseLeave={handleLeave}
                        >
                            <div className="mx-8 my-2">Company</div>
                        </button>
                    </li> */}
                    {/* <button className="stripedummy border-1 border-yellow-400"
                        onMouseOver={displaySubmenu}
                        // onMouseLeave={handleLeave}
                    >
                        <li className="stripedummy mx-8 text-xl font-semibold">Products</li>
                    </button> */}
                    {/* <button className="stripedummy border border-transparent"
                        onMouseOver={displaySubmenu}
                        // onMouseLeave={handleLeave}
                    >
                        <li className="stripedummy mx-8 text-xl font-semibold">Developers</li>
                    </button> */}
                    {/* <button className="stripedummy border border-transparent"
                        onMouseOver={displaySubmenu}
                        // onMouseLeave={handleLeave}
                    >
                        <li className="stripedummy mx-8 text-xl font-semibold">Company</li>
                    </button> */}
                    {/* <button>
                        <Link href={"/stripe/company"} >
                            <a className="hover:cursor-pointer">

                                <span className="text-xl font-semibold">Company</span>
                            </a>
                        </Link>
                    </button> */}
                </ul>
                <div className="hidden lg:flex mt-10 mr-1/12">
                    <Button text="Sign in" />
                </div>
                <div className="lg:hidden mt-8 mr-5">
                    <button type="button"
                        className="focus:outline-none border-2 border-gray-800 rounded-md transform hover:scale-110 motion-reduce:transform-none transition duration-500 ease-in-out"
                        onClick={openSidebar}
                    >
                        <SVGMenu css="h-12 w-12 text-gray-800" />
                    </button>
                </div>
            </div>
        </div>
    )
}