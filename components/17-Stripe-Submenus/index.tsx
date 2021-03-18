import Footer from './Footer'
import App from './App'
import { StripeProvider } from './Context'

export default function Index() {
    return (
        // `relative` is for `absolute` Footer
        <div className="min-h-screen relative">
            <StripeProvider>
                <App />
                <Footer />
            </StripeProvider>
        </div>
    )
}