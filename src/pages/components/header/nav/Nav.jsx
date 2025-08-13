import './Nav.scss';
import { Button } from '../../common/button/Button';
export const Nav = ({ list, closeMenu, isMobileActive, button, href }) => {
	return (
		<nav className={`Nav ${isMobileActive ? 'Nav--mobile-active' : ''}`}>
			<ol className='Nav__ol Nav__mobile-ol'>
				{list?.map(({ id, name, href }) => (
					<li key={id} className='Nav__li Nav__mobile-li'>
						<a href={href} onClick={closeMenu} className='Nav__a Nav__mobile-a'>
							{name}
						</a>
					</li>
				))}
			</ol>
			<Button text={button} href={href} />
		</nav>
	);
};
