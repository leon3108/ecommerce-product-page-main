import '../styles/Price.css'

function Price() {
  return (
    <div className='priceContainer'>
      <div className="priceReduction">
        <p id='actualPrice'>$125.00</p>
        <div id='reduction'><p id="reductionText">50%</p></div>
      </div>
      <p id='oldPrice'>$250.00</p>
    </div>
  )
}

export default Price