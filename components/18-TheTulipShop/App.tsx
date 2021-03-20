import { useContext } from 'react'
// import Sidebar from './Sidebar'
// import Navbar from './Navbar'
import Landing from './Landing'
import Footer from './Footer'

import { useGlobalTulipContext } from './Context'

export default function App() {
    const { isMenuOpen, showModal } = useGlobalTulipContext()

    return (
        <div className="relative">
            {/* {isMenuOpen ?
                            <Sidebar /> : <Navbar />} */}
            {/* <Navbar/> */}
            <Landing />
            <Footer />
        </div>
    )
}