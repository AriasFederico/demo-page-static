import './Home.scss';
import { globalData } from '../../data';
import { Button } from '../components/common/button/Button';

const { hero } = globalData;
const { title, description, ctaButton, image } = hero;
const { text, url } = ctaButton;

export const Home = () => {
	return (
		<div className='Home' id='home'>
			<div className='Home__container'>
				<div
					className='Home__content'
					data-aos={'zoom-in'}
					data-aos-duration={'1000'}
				>
					<h1 className='Home__h1'>{title}</h1>
					<p className='Home__p'>{description}</p>
					<Button href={url} text={text} />
				</div>
				<div
					className='Home__media'
					data-aos={'zoom-in'}
					data-aos-duration={'1000'}
				>
					<img src={image} alt={title} className='Home__banner' />
				</div>
			</div>
		</div>
	);
};
