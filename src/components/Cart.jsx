import '../styles/Cart.css'
import UserContext from './UserContext'
import { useContext } from 'react'

function Cart() {
    const {itemsCart} = useContext(UserContext);
    return (
        <div id='cart'>
            <div style={{
            borderBottom: 'solid 1px var(--grayish-blue)',
            height: 70 + 'px',
            display:'flex',
            alignItems: 'center'
            }}>
                <p style={{
                marginLeft:20 +'px',
                fontFamily: 'var(--font-family)',
                fontWeight: 'var(--font-weight-m)',
                }}>
                Cart</p>
            </div>
            <div style={{
            height: (180 + 'px'),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
                {itemsCart === 0 && <p style={{
                fontFamily: 'var(--font-family)',
                fontWeight: 'var(--font-weight-m)',
                color: 'var(--dark-grayish-blue)'
                }}>
                Your cart is empty.</p>}
                {itemsCart > 0 && <div>
                    items 
                    <button>Checkout</button>
                    </div>}
            </div>
        </div>
    )
}

export default Cart