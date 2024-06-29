// Show.js
import React from 'react';

function Show({ filteredProducts, addToCart, availableQuantities }) {
    return (
        <div className="d1">
            {filteredProducts.map(product => (
                <center key={product.id}>
                    <div className="d2">
                        <img id="images" src={product.imgurl} alt="img" />
                        <h3>Available : <span style={{ color: availableQuantities[product.id] === 0 ? 'red' : 'green' }}>{availableQuantities[product.id]}</span></h3>
                        <h3>Size : {product.size}</h3>
                        <h3>Cost : ₹{product.price}</h3>
                        <button onClick={() => addToCart(product)} disabled={availableQuantities[product.id] === 0}>Add to Cart</button> {/* Step 1 */}
                    </div>
                </center>
            ))}
        </div>
    );
}

export default Show;
