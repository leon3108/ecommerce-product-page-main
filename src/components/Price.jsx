import '../styles/Price.css'

function Price() {
    return (
    <div className='price'>
        <div className='priceContainer'>
            <div className="priceReduction">
                <p id='actualPrice'>$125.00</p>
                <div id='reduction'>50%</div>
            </div>
            <p id='oldPrice'>$250.00</p>
        </div>
    </div>
    )
}

export default Price