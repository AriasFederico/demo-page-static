import './Logo.scss';
import { globalData } from '../../../../data/globalData';
const { logo } = globalData;
const { image, altText, url } = logo;
export const Logo = () => {
	return (
		<a href={url} className='Logo'>
			{logo && (
				<img
					src={image}
					title={altText}
					aria-label={altText}
					className='Logo__img'
				/>
			)}
			{altText && <span className='Logo__name'>{altText}</span>}
		</a>
	);
};
