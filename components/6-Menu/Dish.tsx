export default function Dish({ dish }) {
    return (
        // <div className="lg:max-w-2xl flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-2 lg:ml-2 lg:mr-2">
            {/* <div className="flex flex-row"> */}
            <div className="flex justify-center pr-2 pl-2  lg:pr-2 lg:pl-2">
                <img className="w-full md:max-w-md lg:w-full h-40 object-cover flex justify-center items-center"
                     src={dish.image}
                     alt="photo of dish"
                />
                </div>
            <div className="flex flex-col">
                    <div className="flex justify-between max-w-md container">
                    <h2 className="uppercase font-semibold tracking-tight">{dish.title}</h2>
                        <h3 className="font-semibold">{dish.price}</h3>
                    </div>

                <p className="mt-3 font-extralight font-sans text-gray-900">{dish.info}</p>
            </div>
                {/* <hr className="mt-2 h-0.5 rounded-lg bg-gray-500"></hr> */}
            {/* </div> */}
        </div>
    )
}