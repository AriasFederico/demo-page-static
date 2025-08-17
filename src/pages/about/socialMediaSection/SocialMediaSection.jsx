import { IconText } from '../../components/common/iconText/IconText';
import './SocialMediaSection.scss';
export const SocialMediaSection = ({ contact }) => {
	return (
		<div className='SocialMediaSection'>
			<h3>{contact.title}</h3>
			<div className='SocialMediaSection__rrss'>
				{contact.socialMedia?.map(({ platform, url, icon }) => (
					<IconText
						key={platform}
						icon={icon}
						text={platform}
						variant={'about'}
						href={url}
					/>
				))}
			</div>
		</div>
	);
};
