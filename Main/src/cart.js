// Cart.js
import React from 'react';

function Cart({ cartItems, updateQuantity }) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    
    return (
        <div style={{ marginBottom: "0%", marginLeft: "20px", bottom: "0" }}>
            <br />
            <hr></hr>
            <center>
                <h2 style={{ color: 'purple', fontWeight: 'bold' }}>Your Cart Items</h2>
            </center>
            {cartItems.map((cartItem, index) => (
                <div key={index} className="d11">
                    <img id="i1" src={cartItem.product.imgurl} alt="img" />
                    <div style={{ paddingLeft: "20px" }}>
                        <h3>Size : {cartItem.product.size}</h3>
                        <h3>Cost : ₹{cartItem.product.price}</h3>
                    </div>
                    <div className="d3">
                        <button onClick={() => updateQuantity(index, cartItem.quantity - 1)}>-</button>
                        <p style={{ padding: "5px" }}>{cartItem.quantity}</p>
                        <button
                            onClick={() => updateQuantity(index, cartItem.quantity + 1)}
                            disabled={cartItem.quantity >= cartItem.product.qty}
                        >+</button>
                        {cartItem.quantity > cartItem.product.qty && (
                            <p style={{ color: 'red', textAlign: 'center', paddingLeft: '20px' }}> Out of Stock</p>
                        )}
                    </div>
                    <hr></hr>
                </div>
            ))}
            <h3>Total Price : ₹{totalPrice}</h3>
        </div>
    );
}

export default Cart;
