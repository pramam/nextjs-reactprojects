import { useGlobalTulipContext } from './Context'
import ShopItemCounter from './ShopItemCounter'

// This component displays the items from the inventory, stored in cartItems
// For the amount to display, it fetches it from the global cartState by calling getItemsInCart()
// which is a `filter` on cartItems
export default function Cart() {
    const { getItemsInCart, totalCount, totalPrice,
        decrementCartItemCount, incrementCartItemCount,
        clearCart } = useGlobalTulipContext()

    const incrHandler = (id) => {
        incrementCartItemCount(id)
    }
    const decrHandler = (id) => {
        decrementCartItemCount(id)
    }
    return (
        <div className="flex items-center">
            <div className="flex-1 max-w-10/12 sm:max-w-10/12 lg:max-w-10/12 mx-auto pt-5 pb-10 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-10">
                {getItemsInCart().length === 0 ?
                    <h2 className="flex justify-center text-3x py-10 font-semibold">Your Cart Is Empty</h2>
                    :
                    <>
                        <h2 className="flex justify-center text-3x py-10 font-semibold">Your Cart</h2>
                        <div className="max-w-full">
                            {/* Show in table format for sm: and larger
                            Images disappearing on < sm:,change format for mobiles */}
                            <table className="hidden sm:block sm:table-fixed">
                                <thead>
                                    <tr>
                                        <th className="w-1/5"></th>
                                        <th className="w-1/5 ">Name</th>
                                        <th className="w-1/5">Price</th>
                                        <th className="w-1/5">Quantity</th>
                                        <th className="w-1/5">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* getItemsInCart returns positive counts in Cart. */}
                                    {getItemsInCart().map((obj, index) => {
                                        console.log(`Cart has: ${obj.name}`)
                                        return (
                                            <tr key={index}>
                                                <td className="">
                                                    <img
                                                        className="bg-white object-cover h-16 w-16 sm:h-40 sm:w-40"
                                                        src={obj.img}
                                                        alt={obj.alt}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="capitalize tracking-widest text-center sm:text-left sm:ml-5">{obj.name}</div>
                                                </td>
                                                <td>
                                                    <h3 className="text-center">${obj.price}</h3>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <ShopItemCounter
                                                            id={obj.id}
                                                            incrHandler={incrHandler}
                                                            decrHandler={decrHandler}
                                                            // obj.quantity is the count of this item in the cart, in state,
                                                            // as changed by the user
                                                            count={obj.quantity}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        ${obj.quantity * obj.price}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="uppercase font-semibold text-lg text-center">Total</td>
                                        <td className="text-center font-semibold text-lg">{totalCount}</td>
                                        <td className="text-center font-semibold text-lg">${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* For mobiles */}
                            <table className="table-fixed sm:hidden">
                                <thead>
                                    <tr>
                                        <th className="w-1/4"></th>
                                        <th className="w-1/4"></th>
                                        <th className="w-1/4"></th>
                                        <th className="w-1/4">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* getItemsInCart returns positive counts in Cart. */}
                                    {getItemsInCart().map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="">
                                                    <div className="flex flex-col">
                                                        <img
                                                            className="bg-white object-cover h-16 w-16 sm:h-40 sm:w-40"
                                                            src={obj.img}
                                                            alt={obj.alt}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="capitalize tracking-widest text-center sm:text-left sm:ml-5">{obj.name}</div>
                                                </td>
                                                <td>
                                                    <div className="flex flex-col">
                                                        <div className="text-center">
                                                            <ShopItemCounter
                                                                id={obj.id}
                                                                incrHandler={incrHandler}
                                                                decrHandler={decrHandler}
                                                                // obj.quantity is the count of this item in the cart, in state,
                                                                // as changed by the user
                                                                count={obj.quantity}
                                                            />
                                                        </div>
                                                        <h3 className="text-center">${obj.price}</h3>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        ${obj.quantity * obj.price}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td></td>
                                        <td className="uppercase font-semibold sm:text-lg text-center">Total</td>
                                        <td className="text-center font-semibold sm:text-lg">{totalCount}</td>
                                        <td className="text-center font-semibold sm:text-lg">${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex items-center justify-center mx-auto py-5">
                                <button className="focus:outline none"
                                    onClick={() => clearCart()}>
                                    <span className="border justify-center border-yellow-50 px-2 py-1 sm:px-8 sm:py-2 text-yellow-50 text-sm sm:text-base md:text-lg uppercase text-center tracking-widest">Clear Cart</span>
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}