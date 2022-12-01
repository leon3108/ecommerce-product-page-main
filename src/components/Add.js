import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg"
import { useState } from "react"

function Add() {
    const [n, setN] = useState(0);
    return (
        <div>
            <div className="quantity">
                <img src={minus} alt="img minus" onClick={() => {if (n -1 >= 0){setN(n - 1)}}}/>
                <h3>{n}</h3>
                <img src={plus} alt="img plus" onClick={() => setN(n + 1)}/>
            </div>
            <div className="cart">
                <img src={cart} alt="img cart"/>
                <h3>Add to cart</h3>
            </div>
        </div>
    );
}

export default Add