import Header from './Header'
import Cart from './Cart'
import Navbar from './Navbar'
import Footer from './Footer'
import { TulipProvider } from './Context'

export default function CartLanding() {
    return (
        <>
            <Header />
            <div className="font-tuliptext text-yellow-50">
                <div className="min-h-screen relative bg-gray-900">
                    <TulipProvider>
                        <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-1/10">
                            <Navbar navheight="h-24 md:h-36 lg:h-1/5" />
                        </div>
                        <Cart />
                        <Footer />
                    </TulipProvider>
                </div>
            </div>
        </>
    )
}