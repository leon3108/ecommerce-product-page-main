import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';
import previous from "../images/icon-previous.svg";
import IconPrevious from "./Icon_previous";
import '../styles/Product.css'


import next from "../images/icon-next.svg";
import { useState } from 'react';

function Product() {
    const products = [
        product1,
        product2,
        product3,
        product4
    ]
    const [productIndex, setProdcuctIndex] = useState(0);

    function changeimage(index) {
        if (productIndex + index >= 0 && productIndex + index < products.length)
            setProdcuctIndex(productIndex + index)
    }

    return (
    <div className='product'>
        <div className='divProduct' >
            <img id="imageproduct" src={products[productIndex]} alt="produit"/>
            <img id="icon-previous" src={previous} alt="previous icon" onClick={() => (changeimage(-1))}/>
            {/* <IconPrevious/> */}
            <img id="icon-next" src={next} alt="next icon" onClick={() => (changeimage(+1))}/>
        </div>
    </div>
    )
}

export default Product