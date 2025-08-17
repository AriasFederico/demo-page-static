import { globalData } from '../../../data';

const { footer } = globalData;
const { p, href } = footer;

export const Footer = () => {
	return <div className='Footer'>{/* <a href={href}>{p}</a> */}</div>;
};
