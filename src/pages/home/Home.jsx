import { globalData } from '../../data';

const { main } = globalData;
const { h1, p, btn } = main;

export const Home = () => {
	return (
		<div className='Home'>
			<h1>{h1}</h1>
			<p>{p}</p>
			<button>{btn}</button>
		</div>
	);
};
