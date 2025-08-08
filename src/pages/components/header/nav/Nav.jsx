import './Nav.scss';
export const Nav = ({ list, rrss, closeMenu, isActive }) => {
	return (
		<nav className={`Nav ${isActive ? 'active' : ''}`}>
			<ol>
				{list?.map(({ id, name, href }) => (
					<li key={id}>
						<a href={href} onClick={closeMenu}>
							{name}
						</a>
					</li>
				))}
			</ol>

			<div>
				{rrss?.map(({ title, href, logo }) => (
					<a aria-label={`Ir a ${title}`} href={href} key={title}>
						<ion-icon name={`logo-${logo}`}></ion-icon>
					</a>
				))}
			</div>
		</nav>
	);
};
