import './VisitUs.scss';
import { IconText } from '../../components/common/iconText/IconText';
export const VisitUs = ({ title, hours, location }) => {
	return (
		<div className='VisitUs'>
			<h4>{title}</h4>
			<div className='VisitUs__visit'>
				<IconText icon={'time-outline'} text={hours} variant={'about'} />
				<IconText icon={'location-outline'} text={location} variant={'about'} />
			</div>
		</div>
	);
};
