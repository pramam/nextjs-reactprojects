import Footer from './Footer'
import App from './App'
import { StripeProvider } from './Context'

export default function Index() {
    return (
        <div className="min-h-screen relative">
            <StripeProvider>
                <App />
                <Footer />
            </StripeProvider>
        </div>
    )
}