import { globalData } from '../../data';
import { BrandIntro } from './brandInto/BrandIntro';
import { VisitUs } from './visitUs/VisitUs';
import { SocialMediaSection } from './socialMediaSection/SocialMediaSection';
import './About.scss';

const { about } = globalData;
const { image, sectionTitle, description, contact, businessInfo } = about;

export const About = () => {
	return (
		<div className='About' id='about'>
			<h2 className='About__h2'>{sectionTitle}</h2>
			<div
				className='About__container'
				data-aos={'zoom-in'}
				data-aos-duration={'1000'}
			>
				<div className='About__media'>
					<img src={image} alt={sectionTitle} className='About__img' />
				</div>
				<div className='About__content'>
					<BrandIntro description={description} />
					<SocialMediaSection contact={contact} />
					<VisitUs businessInfo={businessInfo} />
				</div>
			</div>
		</div>
	);
};
