import React from 'react'
import"./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"
import Subtotal from "./Subtotal"
function Checkout() {
    const[{basket},dispatch] =useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"

            />   
            {basket?.length === 0 ?
            ( <div>
                <h1>Empty</h1>
                <p>Your basket items are listed below.</p>
            </div>
            ):(
                 <div>
                <h2 className="checkout__title">not empty</h2>
                {basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    
                    
                    />
                ))}
               
            </div>
            )}     
            </div>
            {basket.length > 0 &&(
                 <div className="checkout__right">
                      <Subtotal/>
                 </div>
            )}
        </div>
    )
}

export default Checkout
