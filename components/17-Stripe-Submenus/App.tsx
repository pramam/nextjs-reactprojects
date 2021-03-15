import Hero from './Hero'
import Home from './Home'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import { useGlobalStripeContext } from './Context'
import { Transition } from '@headlessui/react'

export default function App() {
    const { isSidebarOpen } = useGlobalStripeContext()

    return (
        <Hero >
            {/* Sidebar, when open, will cover the entire screen hiding Navbar and Home behind it  */}
            {/* Sidebar's position is fixed, so it covers Home/Navbar */}
            <Transition
                show={isSidebarOpen}
                enter="transform duration-700"
                enterFrom="scale-0 "
                enterTo="scale-100"
                leave="transform duration-700"
                leaveFrom="scale-100"
                leaveTo="scale-0"
            >
                <Sidebar />
            </Transition>
            {/* {isSidebarOpen ?
                <Sidebar /> : ``} */}
            <Navbar />
            <Submenu />
            <Home />
        </Hero>
    )
}