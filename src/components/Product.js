import product from '../images/image-product-1.jpg';
// import previous from "../images/icon-previous.svg";
import IconPrevious from "./icon_previous";


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
        <div className='containerProduct'>
            <p id="brand">sneaker company</p>
            <h2 id="model">fall limited edition sneakers</h2>
            <p id="description">these low-profile sneakers are your perfect casual wear companion. featuring a durable rubber outer sole, 
                they'll ithstand everything the weather can offer.</p>
        </div>
    </div>
    )
}

export default Product