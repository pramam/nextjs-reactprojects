import Header from './Header'
import Cart from './Cart'
import { TulipProvider } from './Context'

export default function CartLanding() {
    return (
        <>
            <Header />
            <body className="font-tuliptext text-yellow-50">
                <div className="min-h-screen relative bg-gray-900">
                    <TulipProvider>
                        <Cart />
                    </TulipProvider>
                </div>
            </body>
        </>
    )
}