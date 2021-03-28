import Header from './Header'
import Navbar from './Navbar'

function Layout({children}) {
    return (
        <div>
            <Header/>
            <div className="font-monkeytext text-gray-900">
                <div className="min-h-screen relative bg-gray-50">
                    {/* <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-30 relative"> */}
                    <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-24 relative">
                        <Navbar
                            navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-24 h-24 md:h-36 lg:h-24"
                        // navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-30 h-24 md:h-36 lg:h-30"

                        // navcartheightlg="transform lg:-translate-y-24" 
                        />
                        {children}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
