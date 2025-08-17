import './BrandIntro.scss';
import { Logo } from '../../components/common/logo/Logo';
export const BrandIntro = ({ paragraph, logo }) => {
	return (
		<div className='BrandIntro'>
			<Logo />
			<p className='BrandIntro__p'>{paragraph}</p>
		</div>
	);
};
