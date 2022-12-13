import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';
import {ReactComponent as IconPrevious} from '../images/icon-previous.svg';
import {ReactComponent as IconNext} from '../images/icon-next.svg';
import '../styles/Product.css'
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
            <img id="imageproduct" src={products[productIndex]} alt="produit"/>
            <div className="icon" style={{left:10}} onClick={() => (changeimage(-1))}>
                <IconPrevious style={{scale: 80+'%'}}/>
            </div>
            <div className="icon" style={{right:10}} onClick={() => (changeimage(+1))}>
                <IconNext style={{scale: 80+'%'}}/>
            </div>
    </div>
    )
}

export default Product