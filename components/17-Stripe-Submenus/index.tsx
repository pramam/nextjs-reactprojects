import Footer from './Footer'
import App from './App'
import { StripeProvider } from './Context'

export default function Index() {
    // const bgImage = {backgroundImage: url('/stripe/stripe-hero-image.png')} 
    return (
        // <div className="min-h-screen bg-auto bg-no-repeat" style={{
        //     backgroundImage: `url("/stripe/stripe-hero-image.png")`
        // }
        // }>
        //     Hello World
        // </div >
        <div className="min-h-screen relative">
            <StripeProvider>
                <App />
                <Footer />
            </StripeProvider>
        </div>
    )
}