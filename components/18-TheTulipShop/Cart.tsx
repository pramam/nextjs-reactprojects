import cartphotosData from './cartphotos.json'

export default function Cart() {
    return (
        <div className="flex items-center">
            <div className="flex-1 max-w-10/12 sm:max-w-10/12 lg:max-w-10/12 mx-auto pt-5 pb-10 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-10">
                <div className="flex justify-center">Cart Total</div>
                <ul className="grid grid-cols-12 sm:gap-x-3 gap-y-6 sm:gap-y-8 lg:gap-y-8 grid-flow-row">
                    {cartphotosData.map((obj, index) => {
                        const all_props = "col-span-12 sm:col-span-6 md:col-span-4"
                        const footer_props = `col-span-12`
                        return (
                            <li key={index}
                                className={`${obj.id === 16 ? footer_props : all_props}`}
                            >
                                <div className="flex flex-col">
                                    <img
                                        className="bg-white object-cover h-88 sm:h-80 w-full"
                                        src={obj.img}
                                        alt={obj.alt}
                                    />
                                    <div className="text-yellow-50 flex items-center justify-center relative text-center">
                                        <span className="justify-center py-2 capitalize text-center tracking-widest">{obj.name}</span>
                                    </div>
                                    <div className="flex flex-row justify-around">
                                        <h3>${obj.price}</h3>
                                        <h3> + 0 - </h3>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}