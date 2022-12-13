import { useState, useContext } from "react";
import '../styles/Add.css';
import '../styles/Global.css';
import UserContext from "./UserContext";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";
import { ReactComponent as IconMinus } from "../images/icon-minus.svg";
import { ReactComponent as IconPlus } from "../images/icon-plus.svg";

function Add() {
  const [quantity, setQuantity] = useState(0);
  const { setItemCart } = useContext(UserContext);
  return (
    <div>
      <div className="quantity">
        <IconMinus onClick={() => { if (quantity - 1 >= 0) { setQuantity(quantity - 1) } }}/>
        <p id="quantityText">{quantity}</p>
        <IconPlus onClick={() => setQuantity(quantity + 1)}/>
      </div>
      <button className="cart" onClick={() => (setItemCart(quantity))}>
        <div style={{width: 50+'%', display:"flex", justifyContent:"space-around"}}>
          <IconCart style={{scale: 80+'%', fill:"#FFFF"}}/>
          <p>Add to cart</p>
        </div>
      </button>
    </div>
  );
}

export default Add