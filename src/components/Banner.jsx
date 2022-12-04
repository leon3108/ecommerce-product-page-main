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
  const {showMenu, setShowMenu, itemsCart} = useContext(UserContext);
  return (
    <>
      {showMenu && <Menu />}
      <div className="bannerContainer">
        <div className="banner">
          <img src={iconMenu} alt="menu déroulant" id="iconMenu" onClick={() => (setShowMenu(true))} />
          <h1 id="name">sneakers</h1>
          <div style={{display: 'flex', position: 'relative'}}>
            <img src={iconCart} alt="afficher son panier" id="iconCart" onClick={() => { setShowCart(!showCart) }} />
            {itemsCart > 0 && <div id="itemsInCart">{itemsCart}</div>}
          </div>
          <img src={Avatar} alt="son avatar" id="avatar" />
        </div>
      </div>
      {showCart && <Cart />}
    </>
  )
}

export default Banner