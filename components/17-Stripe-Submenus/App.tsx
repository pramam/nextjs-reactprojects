import Hero from './Hero'
import Home from './Home'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useGlobalStripeContext } from './Context'

export default function App() {
    const { isSidebarOpen } = useGlobalStripeContext()

    return (
        <Hero >
            {/* Sidebar, when open, will cover the entire screen hiding Navbar and Home behind it  */}
            {/* Sidebar's position is fixed, so it covers Home/Navbar */}
            {isSidebarOpen ?
                <Sidebar /> : ``}
            <Navbar />
            <Home />
        </Hero>
    )
}