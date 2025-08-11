import './Header.scss';
import { globalData } from '../../../data';
import { useState } from 'react';
const { header } = globalData;
import { Nav } from './nav/Nav';
const { links, rrss, iconMenu, topHeader } = header;

const { hours, location } = topHeader;
const { open, close } = iconMenu;

export const Header = () => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<header className='Header'>
			<div>
				<span>{hours}</span>
				<span>{location}</span>
			</div>
			<button onClick={() => setMenuActive(!menuActive)}>
				{menuActive ? (
					<ion-icon name={close}></ion-icon>
				) : (
					<ion-icon name={open}></ion-icon>
				)}
			</button>

			<Nav
				closeMenu={() => setMenuActive(false)}
				isActive={menuActive}
				list={links}
				rrss={rrss}
			/>
		</header>
	);
};
