import './VisitUs.scss';
import { IconText } from '../../components/common/iconText/IconText';
export const VisitUs = ({ businessInfo }) => {
	return (
		<div className='VisitUs'>
			<h3>{businessInfo.title}</h3>
			<div className='VisitUs__visit'>
				<IconText
					icon={'time-outline'}
					text={businessInfo.openingHours}
					variant={'about'}
				/>
				<IconText
					icon={'location-outline'}
					text={businessInfo.adress}
					variant={'about'}
				/>
			</div>
		</div>
	);
};
