import { useContext } from 'react'
import Landing from './Landing'
// import Footer from './Footer'

import { useGlobalTulipContext } from './Context'

export default function App() {
    // const { isMenuOpen, showModal } = useGlobalTulipContext()

    return (
        <div className="relative">
            {/* <Navbar/> and <Sidebar/> are in <Landing/>
              * Sidebar is before the Hero Image so its content
              * shows up `relative` to the fixed Navbar */}
            <Landing />
            {/* <Footer /> */}
        </div>
    )
}