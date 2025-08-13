import './IconText.scss';
export const IconText = ({ icon, text, variant }) => {
	return (
		<div className={`IconText${variant ? ` IconText--${variant}` : ''}`}>
			{icon && <ion-icon name={icon}></ion-icon>}
			{text && <span>{text}</span>}
		</div>
	);
};
