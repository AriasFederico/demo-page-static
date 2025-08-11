import './Nav.scss';
export const Nav = ({ list, rrss, closeMenu, isActive }) => {
	return (
		<nav className={`Nav ${isActive ? 'active' : ''}`}>
			<ol>
				{list?.map(({ id, name, href }) => (
					<li key={id}>
						<a
							href={href}
							onClick={closeMenu}
							className={`${name === href ? 'isActive' : ''}`}
						>
							{name}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};
