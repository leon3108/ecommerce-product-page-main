import cross from '../images/icon-close.svg'
import { useContext } from 'react';
import UserContext from './UserContext';
import '../styles/Menu.css'

function Menu() {
	const { showMenu, setShowMenu } = useContext(UserContext);
	return (
		<>
			<div id='shadow'></div>
			<div className='menu'>
				<img src={cross} alt="menu déroulant" id="iconMenu"	onClick={() => (setShowMenu(false))}/>
				<div style={{
					marginLeft: 25+'px',
					marginTop: 30+'px',
					height: 25+'%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					fontFamily: 'var(--font-family)',
					fontWeight: 'var(--font-weight-m)'
					}}>
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


