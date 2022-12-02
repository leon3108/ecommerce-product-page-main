import '../styles/Cart.css'

function Cart() {
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
                <p style={{
                fontFamily: 'var(--font-family)',
                fontWeight: 'var(--font-weight-m)',
                color: 'var(--dark-grayish-blue)'
                }}>
                Your cart is empty.</p>
            </div>
        </div>
    )
}

export default Cart