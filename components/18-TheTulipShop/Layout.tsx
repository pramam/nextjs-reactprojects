import Header from './Header'
import Navbar from './Navbar'
// import Footer from './Footer'
import Sidebar from './Sidebar'
import { TulipProvider } from './Context'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="font-tuliptext text-yellow-50">
                <div className="min-h-screen relative bg-gray-900">
                    <TulipProvider>
                        {/* This should be lg:py-1/5 I can't understand why it is 1/10
                        Add pb for the <Footer/>
                        The sizes of the top margins here(in the container) need to be passed
                        to Navbar as navheight. The top margin compensates for the height of the Navbar.
                        The Navbar has `fixed` positioning. Removed lg:pt-1/10 ; Navbar lg:h-1/5

                        IMP: Update the container mt-{num} and Navbar parameters in CartLanding
                        COMMENTED: */}

                        {/* Margin top creating space for fixed Navbar  */}
                        {/* `relative` here because Navbar is fixed  */}
                        <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-30 relative">
                            {/* <Navbar navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-1/5 h-24 md:h-36 lg:h-1/5" /> */}
                            <Navbar
                                navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-30 h-24 md:h-36 lg:h-30"
                                navcartheightlg="transform lg:-translate-y-24" />
                            <div className="lg:hidden">
                                <Sidebar />
                            </div>
                            {children}
                        </div>

                        {/* <Footer /> */}
                    </TulipProvider>
                </div>
            </div>
        </>
    )
}