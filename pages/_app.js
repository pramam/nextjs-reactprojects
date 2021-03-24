// pages/_app.js
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { TulipProvider } from '../components/18-TheTulipShop/Context'
import ProjectNavbarContainerSimple from '../components/projects/ProjectNavbarContainerSimple'

// https://spin.atomicobject.com/2019/12/11/role-based-routing-with-next-js/
function MyApp({ Component, pageProps }) {
    const router = useRouter()

    if (router.pathname.startsWith("/thetulipshop")) {
        console.log(`_app.js:  ${router.pathname}`)

        if (router.pathname.endsWith("/thetulipshop")) {
            return (
                <TulipProvider>
                    <div className="relative">
                        <ProjectNavbarContainerSimple
                            projectId={18}
                            textColor="text-gray-900"
                            includeBlogs={false}
                        />
                        <Component {...pageProps} />
                    </div>
                </TulipProvider>
            )
        }
        else {
            return (
                <TulipProvider>
                    <Component {...pageProps} />
                </TulipProvider>
            )
        }
    }
    else
        return <Component {...pageProps} />
}

export default MyApp