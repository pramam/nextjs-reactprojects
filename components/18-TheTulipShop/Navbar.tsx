export interface IProps {
    navheight: string
}
export default function Navbar({ navheight }: IProps) {
    const nav_common_props = "z-50 bg-gray-900 fixed opacity-100 inset-x-0 top-0 flex items-center justify-center"
    return (
        // fixed left-0 right-0 makes it centered and fixed
        <div className={`${nav_common_props} ${navheight}`}>
            {/* // < div className=`{${nav_common_props} ${navheight}}`>  */}
            {/* "z-50 bg-gray-900 fixed opacity-100 inset-x-0 top-0 flex items-center justify-center h-24 md:h-36 lg:h-1/5" > */}
            <div className="flex flex-col justify-center items-center">
                {/* <h1 className="font-tuliplogo text-yellow-50 text-center py-6 lg:py-10 text-4xl sm:text-5xl lg:text-6xl"> The Tulip Shop</h1> */}
                <h1 className="font-tuliplogo text-yellow-50 text-center py-6 lg:py-4 text-4xl sm:text-5xl lg:text-6xl"> The Tulip Shop</h1>
                <h2 className="hidden lg:block text-base">
                    <div className="flex flex-row">
                        <div className="mr-3">Reds</div>
                        <div className="mr-3">Multicolors</div>
                        <div className="mr-3">Bunches</div>
                        <div className="mr-3">Weddings</div>
                        <div className="">Subscribe</div>
                    </div>
                </h2>
            </div>
        </div >
    )
}