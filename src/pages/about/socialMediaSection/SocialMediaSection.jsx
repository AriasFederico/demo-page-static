import { IconText } from '../../components/common/iconText/IconText';
import './SocialMediaSection.scss';
export const SocialMediaSection = ({ rrss, title }) => {
	return (
		<div className='SocialMediaSection'>
			<h4>{title}</h4>
			<div className='SocialMediaSection__rrss'>
				{rrss?.map(({ title, href, logo }) => (
					<IconText
						key={title}
						icon={logo}
						text={title}
						variant={'about'}
						href={href}
					/>
				))}
			</div>
		</div>
	);
};
