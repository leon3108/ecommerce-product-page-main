import cross from '../images/icon-close.svg'
import { useContext } from 'react';
import UserContext from './UserContext';

function Menu() {
	const { showMenu, setShowMenu } = useContext(UserContext);
	return (
		<>
			<div id='tmp' style={{backgroundColor: 'black', height:100+'%', position:'absolute', zIndex:'1000', width:100+'%', opacity:'0.75'}}>okkkkk</div>
			<div className='menu' style={{ width: 250 + 'px', height: 100 + '%', backgroundColor: 'white', position: 'absolute', zIndex: '1000' }}>
				<img src={cross} alt="menu déroulant" id="iconMenu" style={{ marginLeft: 20 + 'px', marginTop: 20 + 'px' }} onClick={() => (setShowMenu(false))} />
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
					<p>Collections</p>
					<p>Men</p>
					<p>Women</p>
					<p>About</p>
					<p>Contact</p>
				</div>
			</div>
		</>
	)
}

export default Menu


