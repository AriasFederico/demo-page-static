import './Footer.scss';
import { globalData } from '../../../data';

const { footer } = globalData;
const { gmail, copyightText, creditUrl, imageCredits } = footer;

export const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='Footer__container'>
				<a href='mailto:@' className='Footer__span-gmail'>
					Contacto: {gmail}
				</a>
				<div className='Footer__atributions'>
					{imageCredits.map(({ text, target, url }) => (
						<a href={url} key={text} target={target}>
							{text}
						</a>
					))}
				</div>
				<div className='Footer__credits'>
					<a href={creditUrl}>{copyightText}</a>
				</div>
			</div>
		</footer>
	);
};
