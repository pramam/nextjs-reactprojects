import { AppProvider } from './Context'
import App from './App'

export default function SidebarModal() {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    )
}