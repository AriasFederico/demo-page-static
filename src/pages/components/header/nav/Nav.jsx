import './Nav.scss';
import { Button } from '../../common/button/Button';
export const Nav = ({
	navigationLinks,
	onCloseMenu,
	isMenuOpen,
	ctaButtonText,
	ctaButtonHref,
}) => {
	return (
		<nav className={`Nav ${isMenuOpen ? 'Nav--mobile-active' : ''}`}>
			<ol className='Nav__ol Nav__mobile-ol'>
				{navigationLinks?.map(({ id, label, url }) => (
					<li key={id} className='Nav__li Nav__mobile-li'>
						<a
							href={url}
							onClick={onCloseMenu}
							className='Nav__a Nav__mobile-a'
						>
							{label}
						</a>
					</li>
				))}
			</ol>
			<Button text={ctaButtonText} href={ctaButtonHref} />
		</nav>
	);
};
