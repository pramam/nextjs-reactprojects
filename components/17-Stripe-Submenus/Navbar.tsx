import SVGLogo from './svgimages/SVGLogo'
import Button from './Button'
import SVGMenu from '../svgicons/SVGMenu'
import { useGlobalStripeContext } from './Context'
import submenuData from './submenudata'

import { signin_url } from './submenudata'

// Navbar displays:
// on lg: screens:   the Stripe logo, the Nav bar, the Sign In Button
// on < lg: screens: the Stripe logo, the Menu button(which opens the Sidebar)
export default function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu, navButtonIndex } = useGlobalStripeContext();
    // The submenu needs to overlap the bounds of the button it represents
    const submenuTopAdjustment = -3 // 3px
    // onMouseOver could call openSubmenu, but it calls this function instead
    // to add additional functionality
    const displaySubmenu = (e, menuIndex) => {
        const btn = e.target.getBoundingClientRect()
        // Left is left shifted to half the width
        // Bottom is used to position the top of the Submenu
        // Center is needed for the arrow
        const left = btn.left - (btn.width / 2)
        const bottom = btn.bottom + submenuTopAdjustment
        const center = (btn.right + btn.left) / 2

        const label = e.target.textContent
        console.log(btn)
        console.log(e.target.textContent)
        // console.log(`displaySubmenu: e.target.value ${e.target.value}`)
        console.log(`displaySubmenu button, ${btn}, left ${left}, center ${center}, bottom ${btn.bottom}`)
        openSubmenu(label, menuIndex, { left, bottom, center })
    }

    const handleLeave = (e) => {
        //https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
        // let id = (e.target as Element).id;
        // console.log(`handleLeave: e.target.id: ${id}`)

        if (!e.target.classList.contains('stripedummy')) {
            // console.log(`handleLeave: Does not contain stripedummy`)
            closeSubmenu()
        }
        else {
            // console.log(`handleLeave: Contains stripedummy`)
        }
    }

    return (
        <div className="w-full" onMouseOver={handleLeave}>
            <div className="flex flex-row justify-between">
                <h1 className="mt-8 ml-10 sm:ml-16"><SVGLogo /></h1>
                <ul className="hidden text-white w-5/12 mt-10 lg:flex lg:flex-row">
                    {submenuData.map((obj, index) => {
                        return (
                            <li key={index}>
                                <button
                                    // id="stripenavbutton"
                                    // * 1. Don't wrap 'Use cases' on 2 lines:whitespace-nowrap
                                    // * 2. `stripedummy` is read from classList to determine if we are on top of this button.
                                    // *    Do not change the name or remove from styles/globals.css 
                                    // * 3. Do not  use `stripedummy` on any other element other than these buttons
                                    className="stripedummy whitespace-nowrap text-xl font-semibold"
                                    onMouseOver={(e) => displaySubmenu(e, index)}

                                >
                                    {/* px-4 py-2 here prevents the bottom-px reading from shifting as the mouse moves */}
                                    <div className="stripedummy px-4 py-2">{obj.page}</div>
                                </button>
                            </li>
                        )
                    })}
                </ul>
                {/* Sign in Button shows on large screens only */}
                <div className="hidden lg:flex mt-10 mr-1/12">
                    <Button text="Sign in" url={signin_url} />
                </div>
                {/* Menu Button shows on small screens only  */}
                {/* The Sign In button appears in the Sidebar on small screens  */}
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