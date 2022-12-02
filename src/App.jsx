import Banner from './components/Banner';
import Product from './components/Product';
import Price from './components/Price';
import Add from './components/Add';
import Description from './components/Description';
import { useState } from 'react';
import UserContext from './components/UserContext';

function App() {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <UserContext.Provider value={{showMenu, setShowMenu}}>
      <Banner />
      <Product />
      <Description/>
      <Price />
      <Add />
    </UserContext.Provider>
  )
}

export default App