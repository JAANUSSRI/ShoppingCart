// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './search';
import Show from './show';
import Cart from './cart';

function App() {
    const [name, setName] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [availableQuantities, setAvailableQuantities] = useState({}); // Step 1

    const products = [
        { id: 1, pdtname: 'shirt', imgurl: 'https://www.aristobrat.in/cdn/shop/files/ClassicShirt_FrenchBlue_New5.jpg?v=1709565676&width=2048', size: 12, qty: 6, price: 449 },
        { id: 2, pdtname: 'shirt', imgurl: 'https://tiimg.tistatic.com/fp/1/008/501/men-full-sleeves-winter-fur-shirt-for-casual-wear-445.jpg', size: 16, qty: 8, price: 649 },
        { id: 3, pdtname: 'shirt', imgurl: 'https://assets.ajio.com/medias/sys_master/root/20231017/L5zo/652e0c27afa4cf41f549c0a4/-288Wx360H-466714539-grey-MODEL.jpg', size: 17, qty: 10, price: 649 },
        { id: 4, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/71wAR5-lggL._AC_UY1100_.jpg', size: 18, qty: 11, price: 649 },
        { id: 5, pdtname: 'shirt', imgurl: 'https://me99.in/wp-content/uploads/2023/03/Cotton-Full-Sleeve-Men-Shirt-For-Summer-2.jpg', size: 14, qty: 7, price: 749 },
        { id: 6, pdtname: 'shirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoUmnrd4njujRgUtAcvFiQJvq73VlTM0uRw&s', size: 13, qty: 9, price: 849 },
        { id: 7, pdtname: 'shirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQG53vrP_FBg66pWzYeYuS-AMWH0bFu2v2hA&s', size: 11, qty: 10, price: 549 },
        { id: 8, pdtname: 'shirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnTw7yTridWMfqwrQ1YkuXpHN6y1KA9r9aw&s', size: 19, qty: 18, price: 649 },
  
        { id: 9, pdtname: 'Tshirt', imgurl: 'https://contents.mediadecathlon.com/p2567760/06cf21e3f5a8a75af7ac0659729255e7/p2567760.jpg?format=auto&quality=70&f=650x0', size: 14, qty: 7, price: 549 },
        { id: 10, pdtname: 'Tshirt', imgurl: 'https://blurrstore.in/cdn/shop/files/T-ShirtMock-UpBackcopy_b0ee8eea-f40e-44bd-bb04-629918ac1310.jpg?v=1698694026&width=1946', size: 15, qty: 17, price: 649 },
        { id: 11, pdtname: 'Tshirt', imgurl: 'https://www.teez.in/cdn/shop/products/Link-Data-T-Shirt-4_1024x1024.jpg?v=1583558754', size: 16, qty: 8, price: 579 },
        { id: 12, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76tW9TE50SgutzlzQhBfQRf3egT2G9OLH44Czh3iCrsAGFFTK2rGA7vbzpRY3w7sRua4&usqp=CAU', size: 17, qty: 9, price: 249 },
        { id: 13, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEbzuPLTv-dSWd7FK-XcuGY4I8rcQNh5Sb6kI7FdBdlb-exQU-5YLdzS4eDnikhvgb64&usqp=CAU', size: 18, qty: 5, price: 149 },
        { id: 14, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZU09iNJohNnsFXqJmOE8hs5blfHGTmU0hePULrupogDlWRVKx_8A2OjqMqH7iCedjCI&usqp=CAU', size: 19, qty: 7, price: 349 },
        { id: 15, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5_FjSSAi2uDrAs_ZNYHqGhiUbB1E7dyiJNMQGFWdFKdSxczsMQKGprTQqULVY4hfR_c&usqp=CAU', size: 20, qty: 8, price: 199 },
        { id: 16, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxICCadbnPVblsxBzNQ5spq8efyqnAK7O-nlPJ51iFtxa0VdHidccVuSTqSQU6olKPMmY&usqp=CAU', size: 11, qty: 6, price: 549 },
        { id: 17, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_TyGtwQEiiE4WO6wh3J8J1PFeV-zzxRtYx4-nV0MgfIcfn2ydtBo2sXpAv_KEp80_8I&usqp=CAU', size: 14, qty: 10, price: 549 },
        { id: 18, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7D8YzQj_G56a3dKkWC7G4fNNjxQjz75XG0w7eektVklVu1Fq0NPoVN1jDzXn57lE0AI&usqp=CAU', size: 13, qty: 12, price: 549 },
        { id: 19, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliK5cZvtaRhtj6QWT0K6wyB0XkImI04CCcaPq7ZfJ-ZvU8Hf3aEnNWv3OHrD9tUkYh28&usqp=CAU', size: 18, qty: 9, price: 349 },
        { id: 20, pdtname: 'Tshirt', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-VHqRmFQpTjuxzQDM4sRrWgqNMzGOYjjY6JTX6deaFRsrVy6I-_-6aNGVbWWIqdqDVw&usqp=CAU', size: 12, qty: 6, price: 799 },

        { id: 21, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsMtB2DGBVgE9t2QNF83k1TpXDbsG3LuVug&s', size: 24, qty: 7, price: 799 },
        { id: 22, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbVHjOc2QNCz2xQvpttMZdmcuShFbheMvie4K6GE9LvB9AaTq2yRJZeFMoPYMMa7XpLg&usqp=CAU', size: 24, qty: 7, price: 799 },
        { id: 23, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2q06SaIXPGoKIbwJuBuvkPz6XwPEWtO-OsbZhYlve4gcaHOKhZe6_e4deM_lNAdZs8A&usqp=CAU', size: 26, qty: 17, price: 899 },
        { id: 24, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV0GZE2tFItcswE5QRhkoCw7vgxz8m7Ae-M-65Kebqttx_DCAteZ0RkVGjafCXSkZ0ik&usqp=CAU', size: 22, qty: 18, price: 499 },
        { id: 25, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSG5kmIkaa9RQRfFi753FWxW25aYIdZBHPA&s', size: 22, qty: 17, price: 799 },
        { id: 26, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mTvIFsRE6qQXqxyjDbgfWGD27-Ut1UBONg&s', size: 28, qty: 18, price: 1799 },
        { id: 27, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HVNzZs4S1qDwcPI0CtxlX2IjX2N06X5wcg&s', size: 32, qty: 10, price: 699 },
        { id: 28, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fIYxF2zVl7wqsUIZRHRGBv4xN3gY2a4FBA&s', size: 24, qty: 7, price: 799 },
        { id: 29, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqyALI7WfO14oLKbs6sSlaftNJpnf-oZmyg&s', size: 24, qty: 7, price: 799 },
        { id: 30, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRzLUyoEfV4ipS4_SuxH76HIl3P4KdB9tUQ&s', size: 24, qty: 7, price: 799 },
        { id: 31, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEf7mWrxXN3XTGa6hu1vVNT7uqLdFEZ7TsQ&s', size: 24, qty: 7, price: 799 },
        { id: 32, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWWgUR0ceI4ZMfjLbdU89MoSnwtu8306EAw&s', size: 24, qty: 7, price: 799 },
        { id: 33, pdtname: 'kurtiset', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MtN4wTgn6Vvt3PoYPSKCxhO3l3OeC5rwwg&s', size: 24, qty: 7, price: 799 },
  
        { id: 34, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMQvX4haL4XLhqK25m-vN5Y4xoe6k_1kj9Q&s', size: 24, qty: 7, price: 799 },
        { id: 35, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsX42nK6ioOT_-56SwVCW7TzqA2lfj1Sxgg&s',  size: 17, qty: 9, price: 249 },
        { id: 36, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkOl0HcZXWlNNH69Z19vMCLrdlWj-_RFe7A&s', size: 18, qty: 5, price: 149 },
        { id: 37, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1I11C8Sv5H1zW2IVD6e2hxljMQhdHe0qvyQ&s', size: 19, qty: 7, price: 3499 },
        { id: 38, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXN0lEg2gnSB-JmgfBGBxvWC8099AVyKw5_g&s', size: 20, qty: 8, price: 199  },
        { id: 39, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNw0KRi7q_bgQ85RTYqUkAPZ1Y2W7B8TVBA&s', size: 11, qty: 6, price: 549 },
        { id: 40, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4R2bz24A0QnSIyiLMsJ-syNXpyrr6yZ4YA&s', size: 12, qty: 6, price: 799 },
        { id: 41, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3T4FkIvZbTvNm4EJ6SYZFXmp8G_06FpHLQ&s', size: 18, qty: 9, price: 349 },
        { id: 42, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8lMh0mB-kr9CNraz7YdPaailo-16lIBc1g&s', size: 13, qty: 12, price: 549 },
        { id: 43, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lmEjPS8eBR0IAEr0YVbYA31y0qF2xjBV2w&s', size: 24, qty: 7, price: 799 },
        { id: 44, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8qdniEDsWaq3bYOAS_CjTlSgRr43Rqjkug&s', size: 11, qty: 6, price: 549 },
        { id: 45, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSK2ICzg5I_DrYsnLxuVnWJhgcv50ab-h4ZQ&s', size: 32, qty: 10, price: 699 },
        { id: 46, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzsdjq0Niq9Mwbqie4R5_r9TQtct1PdUhVQ&s', size: 19, qty: 18, price: 649 },
        { id: 47, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3iCx0SQpGnA-ZiCzWcjTUa-qid1iS1v69A&s', size: 16, qty: 8, price: 579},
        { id: 48, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnZqZBnwIYdrcLJwtW19i3xcq7v-PkecCVA&s', size: 24, qty: 7, price: 799 },
        { id: 49, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgrPijGDl8jG4vGNi2XX6KbdlOocTdxOksQ&s', size: 19, qty: 18, price: 649 },
        { id: 50, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsA_KwcZ8cNOYnVnCQrjY-GNoZvTk1aWE10Q&s', size: 24, qty: 7, price: 799 },
        { id: 51, pdtname: 'kurti', imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqEj0dc4niBSYhBO26_1yw0xFVo6AElV6kQ&s', size: 24, qty: 7, price: 799 },
    ];

    // Initialize availableQuantities state with the initial quantities of each product
    // useEffect(() => {
    //   const initialQuantities = {};
    //   products.forEach(product => {
    //       initialQuantities[product.id] = product.qty;
    //   });
    //   setAvailableQuantities(initialQuantities);
    // }, [products]);
    useState(() => {
        const initialQuantities = {};
        products.forEach(product => {
            initialQuantities[product.id] = product.qty;
        });
        setAvailableQuantities(initialQuantities);
      }, []);

    const readdress = (event) => {
        setName(event.target.value);
    };

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id);
    
        if (existingItemIndex !== -1 && availableQuantities[product.id] > 0) { // Step 2
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            setCartItems(updatedCartItems);
        } else if (availableQuantities[product.id] > 0) {
            setCartItems(prevCartItems => [...prevCartItems, { product: product, quantity: 1 }]);
        }
        setAvailableQuantities(prevQuantities => ({
            ...prevQuantities,
            [product.id]: (prevQuantities[product.id] || product.qty) - 1
        }));
    };
    

    const updateQuantity = (index, newQuantity) => {
        const item = cartItems[index];
        if (newQuantity >= 0 && newQuantity <= item.product.qty) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[index].quantity = newQuantity;
            setCartItems(updatedCartItems);
    
            setAvailableQuantities(prevQuantities => ({
                ...prevQuantities,
                [item.product.id]: item.product.qty - newQuantity
            }));
        }
        else {
            alert("Quantity exceeds available stock");
        }
    };
    

    const filteredProducts = products.filter(product => product.pdtname === name);

    return (
        <div className="home">
            <Search searchdress={readdress} />
            <Show filteredProducts={filteredProducts} addToCart={addToCart} availableQuantities={availableQuantities} /> {/* Pass availableQuantities to Show component */}
            <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
        </div>
    );
}

export default App;