import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [cart,setCart] =useState([])
    const [products,setProducts]= useState(first10)

    const handleAddProduct = (pro) =>{
        console.log('product added',pro);
        const newCart =[...cart,pro]
        setCart(newCart)
    }
  
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                         handleAddProduct = {handleAddProduct}
                         pro ={pd}>

                         </Product>)
                }
            
        </div>
        <div className="cart-container">
           <Cart cart={cart}></Cart>
        </div>
            </div>
           
    );
};

export default Shop;