import { Transition } from '@headlessui/react'
import { useGlobalTulipContext } from "./Context"

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
                    <div className="flex flex-row justify-between mb-10">
                        <div className="ml-10 md:mr-7 mt-5 md:mt-7 lg:mt-7 lg:mr-7 text-3xl flex flex-row">
                            <div className="hidden sm:block text-gray-900 font-semibold">Your&nbsp;</div>
                            <div className="text-indigo-700 font-bold">Logo&nbsp;</div>
                            <div className="hidden sm:block text-gray-900 font-semibold">Here</div>
                        </div>
                    </div>
                    <div className="text-gray-900">Tulip Shop content</div>
                </div>
            </Transition>
        </div >
    )
}