import React, { useContext } from 'react';
import './MyCart.css';
import { Contexts } from './MyCart';


export default function MyCartCart({Navigation}) {

    const { isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart } = useContext(Contexts);

    if (isEmpty) return <div className='emptycart'>Your Cart is Empty</div>


    return (
        <div className="mycart">
            <div className="total_items">
                <h2>&nbsp;cart:({totalUniqueItems})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; total Items:({totalItems})</h2>
            </div>
            <div className="add_cart_details">
                {items.map((item, index) => {
                    return (
                        <>
                            <div className="cart_in_line">
                                <img src={item.image} className='cart_image' alt="hj" />
                                <h3>{item.title}</h3>
                                <h3>{item.price}</h3>
                                <h3>Quantity({item.quantity})</h3>

                                <button className="button_inc_dec" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-
                                </button>

                                <button className="button_inc_dec" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+
                                </button>

                                <button className="button_remove" onClick={() => removeItem(item.id)}>remove
                                </button>

                            </div>

                        </>
                    )
                })}
            </div>
            <div className="total">
                <div>
                    <h2 style={{ color: "grey" }}>Total Price:₹ {cartTotal}</h2>
                </div>
                <div className>
                    <button className="button_clear" onClick={() => { emptyCart() }}>Clear Cart</button>
                </div>
                <div className>
                    <button className="button_buy" onClick={() => Navigation('/Buy')}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
