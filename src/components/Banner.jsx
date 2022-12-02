import iconMenu from '../images/icon-menu.svg';
import iconCart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';
import '../styles/Banner.css'
import { useContext, useState } from 'react';
import Cart from './Cart';
import Menu from './Menu';
import UserContext from './UserContext';

function Banner() {
  const [showCart, setShowCart] = useState(false);
  const {showMenu, setShowMenu, itemsCart, setItemCart} = useContext(UserContext);
  return (
    <>
      {showMenu && <Menu />}
      <div className="bannerContainer">
        <div className="banner">
          <img src={iconMenu} alt="menu déroulant" id="iconMenu" onClick={() => (setShowMenu(true))} />
          <h1 id="name">sneakers</h1>
          {itemsCart}
          <img src={iconCart} alt="afficher son panier" id="iconCart" onClick={() => { setShowCart(!showCart) }} />
          <img src={Avatar} alt="son avatar" id="avatar" />
        </div>
      </div>
      {showCart && <Cart />}
    </>
  )
}

export default Banner