import { globalData } from '../../data';
import { BrandIntro } from './brandInto/BrandIntro';
import { VisitUs } from './visitUs/VisitUs';
import { SocialMediaSection } from './socialMediaSection/SocialMediaSection';
import './About.scss';

const { about } = globalData;
const { imageAbout, logo, h3, p, contactUs, rrss, workinghours } = about;

const { h4 } = contactUs;
const { title, hours, location } = workinghours;

export const About = () => {
	return (
		<div className='About' id='about'>
			<h3 className='About__h3'>{h3}</h3>
			<div className='About__container'>
				<div className='About__media'>
					<img src={imageAbout} alt='h3' className='About__img' />
				</div>
				<div className='About__content'>
					<BrandIntro paragraph={p} logo={logo} />
					<SocialMediaSection rrss={rrss} title={h4} />
					<VisitUs title={title} hours={hours} location={location} />
				</div>
			</div>
		</div>
	);
};
