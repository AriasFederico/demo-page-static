import './Header.scss';
import { globalData } from '../../../data';
import { useState, useEffect } from 'react';
import { Nav } from './nav/Nav';
import { IconText } from '../common/iconText/IconText';

const { header } = globalData;
const { logo, links, rrss, iconMenu, topHeader, button } = header;
const { text, href } = button;

const { hours, location } = topHeader;
const { open, close } = iconMenu;

export const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setMenuActive(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className='Header'>
			<div className='Header__topbar'>
				<div className='Header__topbar-container'>
					<IconText icon={'time-outline'} text={hours} />
					<IconText icon={'location-outline'} text={location} />
				</div>
			</div>

			<div className='Header__menu'>
				<div className='Header__menu-container'>
					<img src={logo} alt='Marca' />
					<button
						onClick={() => setMenuActive(!menuActive)}
						className='Header__burguer'
					>
						{menuActive ? (
							<ion-icon name={close}></ion-icon>
						) : (
							<ion-icon name={open}></ion-icon>
						)}
					</button>
					<Nav
						closeMenu={() => setMenuActive(false)}
						isMobileActive={menuActive}
						list={links}
						rrss={rrss}
						button={text}
						href={href}
					/>
				</div>
			</div>
		</header>
	);
};
