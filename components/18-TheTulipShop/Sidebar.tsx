import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { useGlobalTulipContext } from "./Context"
import menuoptionsData from './menuoptions.json'

// This is lg:hidden, controlled in <Landing/>
export default function Sidebar() {
    const { isMenuOpen } = useGlobalTulipContext()
    return (
        <div>
            <Transition
                show={isMenuOpen}
                enter="transition-opacity ease-in-out duration-3000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in-out duration-3000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="relative bg-yellow-50 w-full h-screen">
                    <div className="pt-5 md:pt-7"></div>
                    <ul className="flex flex-col">
                        {menuoptionsData.map((obj, index) => {
                            return (
                                <li key={index}>
                                    <Link href={obj.url}>
                                        <a className="text-gray-900 uppercase text-base">
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