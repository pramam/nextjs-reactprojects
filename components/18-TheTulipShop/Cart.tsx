import { useEffect } from 'react'
import { useGlobalTulipContext } from './Context'
import ShopItemCounter from './ShopItemCounter'

// This component displays the items from the inventory, stored in cartItems
// For the amount to display, it fetches it from the global cartState by calling getItemsInCart()
// which is a `filter` on cartItems
export default function Cart() {
    const { getItemsInCart, totalCount, totalPrice, decrementCartItemCount, incrementCartItemCount } = useGlobalTulipContext()

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
                    <h2 className="flex justify-center text-3x py-10 font-semibold">Your Cart Is Empty</h2> :
                    <>
                        <h2 className="flex justify-center text-3x py-10 font-semibold">Your Cart</h2>
                        <div className="max-w-full">
                            <table className="table-fixed">
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
                                        return (
                                            <tr className="">
                                                <td className="">
                                                    <img
                                                        className="bg-white object-cover h-32 w-32 sm:h-40 sm:w-40"
                                                        src={obj.img}
                                                        alt={obj.alt}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="capitalize tracking-widest text-left ml-5">{obj.name}</div>
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
                        </div>
                    </>
                }
            </div>
        </div>
    )
}