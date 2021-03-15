export default function Hero({ children }) {
    const stripeHeroImage = "/stripe/stripe-hero-image.png"

    const bgImage = { backgroundImage: `url(${stripeHeroImage})` }

    const bgSVG = { backgroundImage: `url("/stripe/hero.svg")` }
    return (
        // This works:
        // <div className="min-h-screen bg-auto bg-no-repeat" style={{
        //     backgroundImage: `url("/stripe/stripe-hero-image.png")`
        // }
        // }>

        // This works:
        // <div className="min-h-screen bg-auto bg-no-repeat" style={{
        //     backgroundImage: `url(${stripeHeroImage})`
        // }}>

        <div className="w-full bg-cover bg-no-repeat" style={bgSVG}>
            {children}
        </div >
    )
}