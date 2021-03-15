import SVGPhone from './svgimages/SVGPhone'
import Button from './Button'

export default function Home() {
    return (
        <div className="ml-10 sm:ml-16">
            <div className="flex flex-row justify-between">
                <div className="w-10/12 sm:w-6/12 lg:w-7/12">
                    <h1 className="mt-10 text-4xl sm:text-5xl lg:text-8xl font-semibold font-roboto text-gray-800 lg:leading-tight">Payments <br />infrastructure <br /> for the internet</h1>
                    <p className="text-gray-700 text-xl mt-10">Millions of companies of all sizes&#8212;from startups to Fortune 500s&#8212;use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.
                    </p>
                    <div className="mt-7 sm:mt-5">
                        <Button text="Start now" />
                    </div>
                </div>
                <div className="hidden sm:block mt-6 lg:mr-2/12">
                    <SVGPhone css="" />
                </div>
            </div>
        </div>
    )
}