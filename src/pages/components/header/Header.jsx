import { globalData } from '../../../data';

const { header } = globalData;
const { links, rrss } = header;

export const Header = () => {
	return (
		<div className='Header'>
			<ol>
				{links?.map(({ id, name, href }) => (
					<li key={id}>
						<a href={href}>{name}</a>
					</li>
				))}
			</ol>

			<div className='Header-rrss'>
				{rrss?.map(({ title, href, logo }) => (
					<a aria-label={`Ir a ${title}`} href={href} key={title}>
						<ion-icon name={`logo-${logo}`}></ion-icon>
					</a>
				))}
			</div>
		</div>
	);
};
