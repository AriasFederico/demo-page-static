import './ProductCard.scss';
export const ProductCard = ({ name, description, image, price }) => {
	return (
		<div
			className='ProductCard'
			data-aos={'zoom-in'}
			data-aos-duration={'1000'}
		>
			<div className='ProductCard__media'>
				<img src={image} alt={name} className='ProductCard__img' />
			</div>

			<div className='ProductCard__container'>
				<h3 className='ProductCard__h3'>{name}</h3>
				<p className='ProductCard__p'>{description}</p>
				{price && <span className='ProductCard__price'>{price}</span>}
			</div>
		</div>
	);
};
