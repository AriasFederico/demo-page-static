import './Logo.scss';
import { globalData } from '../../../../data/globalData';
const { logo } = globalData;
const { img, name, href } = logo;
export const Logo = () => {
	return (
		<a href={href} className='Logo'>
			{logo && (
				<img src={img} title={name} aria-label={name} className='Logo__img' />
			)}
			{name && <span className='Logo__name'>{name}</span>}
		</a>
	);
};
