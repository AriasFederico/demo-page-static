import './Header.scss';
import { globalData } from '../../../data';
import { useState, useEffect } from 'react';
import { Nav } from './nav/Nav';
import { Logo } from '../common/logo/Logo';
import { IconText } from '../common/iconText/IconText';

const { header } = globalData;
const { navigationLinks, menuIcons, topBar, ctaButton } = header;

const { open, close } = menuIcons;
const { openingHours, adress } = topBar;
const { text, url } = ctaButton;

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
					<IconText icon={'time-outline'} text={openingHours} />
					<IconText icon={'location-outline'} text={adress} />
				</div>
			</div>

			<div className='Header__menu'>
				<div className='Header__menu-container'>
					<Logo />
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
						onCloseMenu={() => setMenuActive(false)}
						isMenuOpen={menuActive}
						navigationLinks={navigationLinks}
						ctaButtonText={text}
						ctaButtonHref={url}
					/>
				</div>
			</div>
		</header>
	);
};
