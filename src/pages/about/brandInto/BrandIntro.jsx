import './BrandIntro.scss';
import { Logo } from '../../components/common/logo/Logo';
export const BrandIntro = ({ description }) => {
	return (
		<div className='BrandIntro'>
			<Logo />
			<p className='BrandIntro__p'>{description}</p>
		</div>
	);
};
