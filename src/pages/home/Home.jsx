import './Home.scss';
import { globalData } from '../../data';
import { Button } from '../components/common/button/Button';
const { main } = globalData;
const { btn, h1, img, p } = main;
const { text, href } = btn;

export const Home = () => {
	return (
		<div className='Home' id='home'>
			<div
				className='Home__content'
				data-aos={'zoom-in'}
				data-aos-duration={'1000'}
			>
				<h1 className='Home__h1'>{h1}</h1>
				<p className='Home__p'>{p}</p>
				<Button href={href} text={text} />
			</div>
			<div
				className='Home__media'
				data-aos={'zoom-in'}
				data-aos-duration={'1000'}
			>
				<img src={img} alt='' className='Home__banner' />
			</div>
		</div>
	);
};
