import iconMenu from '../images/icon-menu.svg';
import iconCart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';
import '../styles/Banner.css'
import { useState } from 'react';
import Cart from './Cart';

function Banner() {
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <div className="bannerContainer">
                <div className="banner">
                    <img src={iconMenu} alt="menu déroulant" id="iconMenu"/>
                    <h1 id="name">sneakers</h1>
                    <img src={iconCart} alt="afficher son panier" id="iconCart" onClick={() => {setShowCart(!showCart)}}/>
                    <img src={Avatar} alt="son avatar" id="avatar"/>
                </div>
            </div>
            {showCart && <Cart />}
        </>
    )
}

export default Banner