import iconMenu from '../images/icon-menu.svg';
import iconCart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';

function Banner() {
    return (
        <div className="bannerContainer">
            <div className="banner">
                <img src={iconMenu} alt="menu déroulant" id="iconMenu"/>
                <h1>sneakers</h1>
                <img src={iconCart} alt="afficher son panier" id="iconCart"/>
                <img src={Avatar} alt="son avatar" id="avatar"/>
            </div>
        </div>
    )
}

export default Banner