import './Button.scss';
export const Button = ({ text, href }) => {
	return (
		<button className='Button'>
			<a href={href} className='Button__a'>
				{text}
			</a>
		</button>
	);
};
