import product from '../images/image-product-1.jpg';
// import previous from "../images/icon-previous.svg";
import IconPrevious from "./Icon_previous";
import '../styles/Product.css'


import next from "../images/icon-next.svg";

function Product() {
    return (
    <div className='product'>
        <div className='divProduct' >
            <img id="imageproduct" src={product} alt="produit"/>
            {/* <img id="icon-previous" src={previous} alt="previous icon"/> */}
            <IconPrevious/>
            <img id="icon-next" src={next} alt="next icon" />
        </div>
    </div>
    )
}

export default Product