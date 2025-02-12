import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { useGlobalTulipContext } from "./Context"
import menuoptionsData from './menuoptions.json'

// This is lg:hidden, controlled in <Layout/>
export default function Sidebar() {
    const { isMenuOpen, menuHandler, setCategory } = useGlobalTulipContext()

    // on clicking an option in the Sidebar:
    // close the Menu
    // Filter selections based on category in the context
    // Go to selections page with the <Link>
    const sidebarHandler = (category) => {
        menuHandler()
        setCategory(category)
    }
    return (
        <div>
            <Transition
                show={isMenuOpen}
                enter="transition-opacity ease-in-out duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed z-50 bg-yellow-50 w-full h-screen">
                    <div className="pt-5 md:pt-7"></div>
                    <ul className="flex flex-col">
                        {menuoptionsData.map((obj, index) => {
                            return (
                                <li key={index}>
                                    <Link href={obj.url}>
                                        {/* Menu is open here. On clicking an option, menuHandler closes the menu  */}
                                        <a className="text-gray-900 uppercase text-base"
                                            onClick={() => sidebarHandler(obj.category)}
                                        >
                                            <div className="mb-3 ml-10">
                                                {obj.label}
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Transition>
        </div >
    )
}