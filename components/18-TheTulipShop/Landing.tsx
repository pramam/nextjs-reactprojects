import Link from 'next/link'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import tulipphotos from './tulipphotos.json'

const shoppingurl = "/thetulipshop/selections"

export default function Landing() {
    return (
        // This should be lg:py-1/5 I can't understand why it is 1/10
        // Add pb for the <Footer/>
        // The sizes of the top margins here(in the container) need to be passed
        // to Navbar as navheight. The top margin compensates for the height of the Navbar.
        // The Navbar has `fixed` positioning. Removed lg:pt-1/10 ; Navbar lg:h-1/5

        // IMP: Update the container mt-{num} and Navbar parameters in CartLanding
        <div className="pt-24 pb-12 md:pt-36 md:pb-16 lg:pt-30 relative">
            {/* <Navbar navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-1/5 h-24 md:h-36 lg:h-1/5" /> */}
            <Navbar
                navheight="transform -translate-y-24 md:-translate-y-36 lg:-translate-y-30 h-24 md:h-36 lg:h-30"
                navcartheightlg="transform lg:-translate-y-24" />

            <div className="lg:hidden">
                <Sidebar />
            </div>
            {/* All the images below are `absolute` in `relative` container(grid for the hero image, and 
              * cols-span-{num} container for the other images.  
              */}
            {/* Hero Image  */}
            <div className="grid grid-cols-1 relative h-32 sm:h-48 md:h-60 lg:h-96">
                {/* Putting text over image: https://www.youtube.com/watch?v=Zo1JtXnLDdA  */}
                <img
                    className="absolute inset-0 object-cover w-full h-32 sm:h-48 md:h-60 lg:h-96"
                    src={tulipphotos[0].img}
                    alt={tulipphotos[0].alt}
                />
                <div className="bg-gray-900 absolute inset-0 h-32 sm:h-48 md:h-60 lg:h-96 bg-opacity-30 sm:bg-opacity-40 lg:bg-opacity-50"></div>
                <div className="flex items-center justify-center relative transform -translate-y-2 sm:-translate-y-5 h-32 sm:h-48 md:h-60 lg:h-96 text-center">
                    <Link href={shoppingurl}>
                        <a>
                            <span className="border-2 md:border-4 justify-center border-yellow-50 px-3 py-1 sm:px-6 sm:py-2 md:px-10 md:py-4 lg:px-20 lg:py-8 text-yellow-50 uppercase text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-wider">
                                Bring Beauty Inside
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center justify-center relative transform -translate-y-8 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-24 text-center">
                    <Link href={shoppingurl}>
                        <a>
                            <span className="border justify-center border-yellow-50 px-2 py-1 sm:px-8 sm:py-2 text-yellow-50 text-sm sm:text-base md:text-lg uppercase text-center tracking-widest">Shop now</span>
                        </a>
                    </Link>
                </div>
            </div>

            {/* <--------------Hero Image[0]------------->
                <--Image[1]--><--Image[2]--><--Image[3]-->
                <----------------Image[4]---------------->
                <------Image[5]-----><------Image[6]----->
                <----------------Image[7]---------------->
                <----------------Image[8]----------------> */}

            {/* Images Hero, 1, 3, 5, 6 have text overlay on top */}

            {/* I cannot specify max-h as a percentage in the parent and then say h-full in the child.
                I need to specify an actual h-{num} 
                So here are the documented heights of the images:

                All images have max-w-[%]: max-w-10/12 sm:max-w-10/12 lg:max-w-4/6
                Hero image: w-full h-32 sm:h-48 md:h-60 lg:h-96
                Images 1-8, widths: max-w-10/12 sm:max-w-10/12 lg:max-w-4/6
                Images 1, 2, 3: h-88 sm:h-80 (mobile:h-80 is too short for Image[2] cuts off her face)
                Image 4: h-32 sm:h-72
                Image 5, 6: h-80 sm:h-96 md:h-112 lg:h-128
                Image 7, 8: h-32 sm:h-72 */}
            <div className="flex items-center">
                <div className="flex-1 max-w-10/12 sm:max-w-10/12 lg:max-w-4/6 mx-auto pt-10 pb-10 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10">
                    <ul className="grid grid-cols-12 sm:gap-x-3 gap-y-6 sm:gap-y-4 grid-flow-row">
                        <li className="col-span-12 sm:col-span-4 relative h-88 sm:h-80">
                            <Link href={tulipphotos[1].url}>
                                <a>
                                    <img
                                        className="transform hover:opacity-60 motion-reduce:transform-none transition duration-700 ease-in-out object-cover inset-0 absolute h-88 sm:h-80 w-full bg-yellow-50 opacity-80"
                                        src={tulipphotos[1].img}
                                        alt={tulipphotos[1].alt}
                                    />
                                    <div className="hover:text-white text-yellow-50 hover:opacity-100 motion-reduce:transform-none transition duration-700 ease-in-out flex items-center justify-center relative transform translate-y-44 sm:translate-y-40 text-center">
                                        <span className="justify-center px-8 py-2 uppercase text-center tracking-widest">Shop Single Colors</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="col-span-12 sm:col-span-4 relative h-88 sm:h-80">
                            <img
                                className="object-cover inset-0 absolute h-88 sm:h-80 w-full opacity-80"
                                src={tulipphotos[2].img}
                                alt={tulipphotos[2].alt}
                            />
                        </li>
                        <li className="col-span-12 sm:col-span-4 relative h-88 sm:h-80">
                            <Link href={tulipphotos[3].url}>
                                <a>
                                    <img
                                        className="transform hover:opacity-60 motion-reduce:transform-none transition duration-700 ease-in-out object-cover inset-0 absolute h-88 sm:h-80 w-full opacity-80"
                                        src={tulipphotos[3].img}
                                        alt={tulipphotos[3].alt}
                                    />
                                    <div className="hover:text-white text-yellow-50 hover:opacity-100 motion-reduce:transform-none transition duration-700 ease-in-out flex items-center justify-center relative transform translate-y-44 sm:translate-y-40 text-center">
                                        <span className="justify-center px-8 py-2 uppercase text-center tracking-widest">Shop Multicolors</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="col-span-12 relative h-32 sm:h-72">
                            <img
                                className="object-cover h-32 sm:h-72 w-full opacity-80"
                                src={tulipphotos[4].img}
                                alt={tulipphotos[4].alt}
                            />
                        </li>
                        <li className="col-span-12 sm:col-span-6 relative h-80 sm:h-96 md:h-112 lg:h-128">
                            <Link href={tulipphotos[5].url}>
                                <a>
                                    <img
                                        className="transform hover:opacity-60 motion-reduce:transform-none transition duration-700 ease-in-out object-cover inset-0 absolute h-80 sm:h-96 md:h-112 lg:h-128 w-full opacity-80"
                                        src={tulipphotos[5].img}
                                        alt={tulipphotos[5].alt}
                                    />
                                    <div className="hover:text-white text-yellow-50 hover:opacity-100 motion-reduce:transform-none transition duration-700 ease-in-out flex items-center justify-center relative transform translate-y-36 sm:translate-y-44 md:translate-y-52 lg:translate-y-60 text-center">
                                        <span className="justify-center px-8 py-2 uppercase text-center tracking-widest">Shop Bunches</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="col-span-12 sm:col-span-6 relative h-80 sm:h-96 md:h-112 lg:h-128">
                            <Link href={tulipphotos[6].url}>
                                <a>
                                    <img
                                        className="transform hover:opacity-60 motion-reduce:transform-none transition duration-700 ease-in-out object-cover inset-0 absolute h-80 sm:h-96 md:h-112 lg:h-128 w-full opacity-80"
                                        src={tulipphotos[6].img}
                                        alt={tulipphotos[6].alt}
                                    />
                                    <div className="hover:text-white text-yellow-50 hover:opacity-100 motion-reduce:transform-none transition duration-700 ease-in-out flex items-center justify-center relative transform translate-y-36 sm:translate-y-44 md:translate-y-52 lg:translate-y-60 text-center">
                                        <span className="justify-center px-8 py-2 uppercase text-center tracking-widest">Shop Bunches</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="col-span-12 relative h-32 sm:h-72">
                            <Link href={tulipphotos[7].url}>
                                <a>
                                    <img
                                        className="transform hover:opacity-60 motion-reduce:transform-none transition duration-700 ease-in-out object-cover h-32 sm:h-72 w-full opacity-80"
                                        src={tulipphotos[7].img}
                                        alt={tulipphotos[7].alt}
                                    />
                                    <div className="hover:text-white text-yellow-50 hover:opacity-100 motion-reduce:transform-none transition duration-700 ease-in-out flex items-center justify-center relative transform -translate-y-24 sm:-translate-y-40 text-center">
                                        <span className="justify-center px-8 py-2 uppercase text-center tracking-widest">Shop weddings and special occasions</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li className="col-span-12 relative h-32 sm:h-72">
                            <img
                                className="object-cover h-32 sm:h-72 w-full opacity-80"
                                src={tulipphotos[8].img}
                                alt={tulipphotos[8].alt}
                            />
                            <div className="absolute inset-0 bg-gray-900 h-32 sm:h-72 bg-opacity-70 sm:bg-opacity-0"></div>

                            {/* <form className="flex relative transform -translate-y-24 sm:-translate-y-64 text-yellow-50">
                                <div className="mt-1 mb-4 ml-10 text-xl text-center" >Some text here</div>
                                <div className="ml-10 flex flex-col">
                                    <input
                                        className=""
                                        type="text"
                                    >
                                    </input>
                                    <button
                                        className="border-2 border-yellow-50"
                                    >Button</button>
                                </div>
                            </form> */}
                            <form className="flex relative transform -translate-y-24 sm:-translate-y-64 text-center">
                                <div className="mt-1 mb-4 sm:ml-10 text-base sm:text-xl text-yellow-50 text-center">Weekly flower subscription</div>
                                <div className="ml-2 sm:ml-10 flex flex-col justify-center mx-auto">
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        // autocomplete="email"
                                        required
                                        // className="bg-transparent text-yellow-50 border border-yellow-50 rounded-md"
                                        className="bg-transparent appearance-none relative block w-full px-3 py-2 border border-yellow-50 placeholder-yellow-50 text-yellow-100 sm:text-gray-700 rounded-md focus:outline-none focus:ring-yellow-50 focus:border-yellow-50 focus:z-10 sm:text-sm"
                                        placeholder="Email address">
                                    </input>
                                    <button type="submit"
                                        // <span className="border justify-center border-yellow-50 px-2 py-1 sm:px-8 sm:py-2 text-yellow-50 text-sm sm:text-base md:text-lg uppercase text-center tracking-widest">Shop now</span>
                                        className="mt-2 inline-flex border-2 border-yellow-50 focus:outline-none justify-center text-yellow-50 uppercase text-center tracking-widest"
                                    >Subscribe</button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}