import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts]= useState(first10)

    const handleAddProduct = (pro) =>{
        console.log('product added',pro);
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
            <h3>This is Cart Part</h3>
        </div>
            </div>
           
    );
};

export default Shop;