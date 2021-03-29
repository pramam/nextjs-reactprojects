import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className="font-monkeytext text-monkey-charcoal">
                <div className="min-h-screen relative bg-white">
                    {/* <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-30 relative"> */}
                    <div className="pt-16 pb-12 sm:pt-16 sm:pb-16 md:pb-16 md:pt-20 lg:pt-24 relative">
                        <Navbar
                            navheight="transform -translate-y-16 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24 h-16 sm:h-16 md:h-20 lg:h-24"
                        // navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-30 h-24 md:h-36 lg:h-30"

                        // navcartheightlg="transform lg:-translate-y-24" 
                        />
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout
