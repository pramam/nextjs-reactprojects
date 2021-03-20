import Header from './Header'
import App from './App'
import { TulipProvider } from './Context'
export default function Index() {
    return (
        <>
            <Header />
            <div className="font-tuliptext text-yellow-50">
                <div className="min-h-screen relative bg-gray-900">
                    <TulipProvider>
                        <App />
                    </TulipProvider>
                </div>
            </div>
        </>
    )
}