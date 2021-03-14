import Home from './Home'
import Footer from './Footer'
export default function Hero({ children }) {
    const stripeHeroImage = "/stripe/stripe-hero-image.png"

    const bgImage = { backgroundImage: `url(${stripeHeroImage})` }

    const bgSVG = { backgroundImage: `url("/stripe/hero.svg")` }
    return (
        // <div className="min-h-screen bg-auto bg-no-repeat" style={{
        //     backgroundImage: `url("/stripe/stripe-hero-image.png")`
        // }
        // }>

        // <div className="min-h-screen bg-auto bg-no-repeat" style={{
        //     backgroundImage: `url(${stripeHeroImage})`
        // }}>

        <div className="w-full bg-cover bg-no-repeat" style={bgSVG}>
            {/* <div> */}
            {children}
            <Footer></Footer>
        </div >
    )
}