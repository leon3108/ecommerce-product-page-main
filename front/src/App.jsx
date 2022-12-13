import Banner from './components/Banner';
import Product from './components/Product';
import Price from './components/Price';
import Add from './components/Add';
import Description from './components/Description';
import { useState } from 'react';
import UserContext from './components/UserContext';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [itemsCart, setItemCart] = useState(0);

  return (
    <UserContext.Provider value={{showMenu, setShowMenu, itemsCart, setItemCart}}>
      <Banner />
      <Product />
      <Description/>
      <Price />
      <Add />
    </UserContext.Provider>
  )
}

export default App