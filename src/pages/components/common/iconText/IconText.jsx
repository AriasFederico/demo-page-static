import './IconText.scss';
export const IconText = ({ icon, text, variant, href }) => {
	return (
		<a
			href={href ? href : '#'}
			target='_blank'
			className={`IconText${variant ? ` IconText--${variant}` : ''}`}
		>
			{icon && <ion-icon name={icon}></ion-icon>}
			{text && <span>{text}</span>}
		</a>
	);
};
