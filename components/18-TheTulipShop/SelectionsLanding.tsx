import Header from './Header'
import Selections from './Selections'
import Navbar from './Navbar'
// import Footer from './Footer'
import Sidebar from './Sidebar'
import { TulipProvider } from './Context'
import Layout from './Layout'
export default function SelectionsLanding() {
    return (
        <Layout>
            <Selections />
        </Layout>
        // <>
        //     <Header />
        //     <div className="font-tuliptext text-yellow-50">
        //         <div className="min-h-screen relative bg-gray-900">
        //             <TulipProvider>
        //                 <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-30 relative">
        //                     <Navbar
        //                         navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-30 h-24 md:h-36 lg:h-30"
        //                         navcartheightlg="transform lg:-translate-y-24" />
        //                     <div className="lg:hidden">
        //                         <Sidebar />
        //                     </div>
        //                     <Cart />
        //                 </div>

        //                 <Footer />
        //             </TulipProvider>
        //         </div>
        //     </div>
        // </>
    )
}