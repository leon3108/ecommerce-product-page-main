import '../styles/Cart.css'
import UserContext from './UserContext'
import { useContext } from 'react'
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import trash from "../images/icon-delete.svg";

function Cart() {
  const { itemsCart, setItemCart } = useContext(UserContext);
  return (
    <div id='cart'>


      <div style={{
        borderBottom: 'solid 1px var(--grayish-blue)',
        height: 70 + 'px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <p style={{
          marginLeft: 20 + 'px',
          fontWeight: 'var(--font-weight-m)',
        }}>
          Cart</p>
      </div>


      <div style={{
        height: (120 + 'px'),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent: 'space-between'
        }}>
          {itemsCart === 0 && <p style={{
            fontWeight: 'var(--font-weight-m)',
            color: 'var(--dark-grayish-blue)'
          }}>
            Your cart is empty.</p>}

          {itemsCart > 0 && <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between', width:300+'px'}}>
            <img src={thumbnail} alt="thumbnail product" style={{width: 50+"px", borderRadius:5+'px'}}/>
            <div style={{display:'flex', flexDirection:'column'}}>
              <p className='cartDescription'>Autummn Limited Edition...</p>
              <p className='cartDescription'>$125.00 x {itemsCart} <strong style={{color:'var(--black)'}}>${itemsCart * 125.00}</strong></p>
            </div>
            <img src={trash} alt='trashIcon' onClick={() => (setItemCart(0))}/>
          </div>
          }
        </div>


      {itemsCart > 0 &&<button style={{width:90+"%", height:50+"px", marginLeft:5+"%", border: 'var(--main-color) solid'}}>Checkout</button>}

    </div>
  )
}

export default Cart