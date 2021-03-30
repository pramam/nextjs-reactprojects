import data from './data.json'

export default function Index() {
    return (
        <div className="flex">
            <ul className="flex flex-row">
                {data.map((obj, index) => {
                    const common_props = "flex flex-col flex-1 border-2 border-red-700"
                    return (
                        <li key={index}
                            className={index % 2 ? `${common_props} bg-gray-300` : `${common_props} bg-blue-300`}>

                            <img
                                className="rounded-t-lg sm:w-full sm:object-cover sm:h-64 md:h-64 2xl:h-76"
                                src={obj.image} alt="" />
                            <div className="flex flex-col flex-1">
                                <p className="flex-1 border border-pink-500 bg-white">{obj.text}</p>
                                <p className="">Details</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}