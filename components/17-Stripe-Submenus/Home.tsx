import { useGlobalStripeContext } from './Context'
import SVGPhone from './svgimages/SVGPhone'
import SVGChevronRight from '../svgicons/SVGChevronRight'
import Button from './Button'

export default function Home() {
    const { isSidebarOpen } = useGlobalStripeContext();

    console.log(isSidebarOpen)
    return (
        <div className="ml-10">
            <div className="flex flex-row justify-between">
                <div className="w-7/12">
                    <h1 className="mt-10 text-7xl">Payments infrastructure <br /> for the internet</h1>
                    <p className="text-gray-800 text-3xl mt-10">Millions of companies of all sizes&#8212;from startups to Fortune 500s&#8212;use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
                    </p>
                    <div className="mt-28">
                        <Button text="Start now" />
                    </div>
                </div>
                <div className="mt-6 mr-2/12">
                    {/* <img className="h-96 w-48 object-cover rounded-md" src="/screenshots/Screenshot-Accordion.png"
                        alt="phone"
                    /> */}
                    {/* <img className="h-96 w-48 object-cover rounded-md" src="/svgimages/phone.svg"
                        alt="phone"
                    /> */}
                    <SVGPhone css="" />

                </div>
            </div>
        </div>
    )
}