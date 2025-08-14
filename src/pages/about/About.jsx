import { globalData } from '../../data';

const { about } = globalData;
const { imageAbout, logo, h3, p, contactUs, rrss, workinghours } = about;

const { h4 } = contactUs;
const { title, hours } = workinghours;

export const About = () => {
	return (
		<div className='About' id='about'>
			<h4>{h4}</h4>
			<div className='About__container'>
				<div className='About__media'></div>
				<div className='About__content'></div>
			</div>
		</div>
	);
};
