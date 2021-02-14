import { IMenu } from './definitions'

export interface IProps {
    dish: IMenu
}
export default function Dish({ dish }: IProps) {
    return (
        // I need grid here to get evenly sized width of images, max-w doesn't fix it
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-2 ml-2 mr-2">
            <div className="flex justify-center lg:pr-2 lg:pl-2">
                <img className="w-full md:max-w-md lg:max-w-lg h-40 object-cover flex justify-center items-center"
                     src={dish.image}
                     alt="photo of dish"
                />
            </div>
            <div className="md:max-w-md">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="uppercase font-semibold tracking-tight">{dish.title}</h2>
                        <h3 className="font-semibold">{dish.price}</h3>
                    </div>
                    {/* <hr className="mt-2 h-0.5 rounded-lg bg-gray-500"></hr> */}
                    <p className="mt-3 font-extralight font-sans text-gray-900">{dish.info}</p>
                </div>
            </div>
        </div>
    )
}