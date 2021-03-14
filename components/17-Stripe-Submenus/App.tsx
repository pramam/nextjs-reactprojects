import Hero from './Hero'
import Home from './Home'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { useGlobalStripeContext } from './Context'

export default function App() {
    const { sidebarIsOpen } = useGlobalStripeContext()

    return (
        <Hero >
            <Navbar />
            <Home />
            <Sidebar />
        </Hero>
    )
}