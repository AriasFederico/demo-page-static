import { globalData } from '../../data';

const { about } = globalData;
const { h2, p } = about;

export const About = () => {
	return (
		<div className='About'>
			<div>
				<h2>{h2}</h2>
				<p>{p}</p>
			</div>
		</div>
	);
};
