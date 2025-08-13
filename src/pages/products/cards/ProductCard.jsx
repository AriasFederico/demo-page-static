import './ProductCard.scss';
export const ProductCard = ({ name, description, img, price }) => {
	return (
		<div className='ProductCard' data-aos='zoom-in' data-aos-duration='1500'>
			<div className='ProductCard__media'>
				<img src={img} alt={name} className='ProductCard__img' />
			</div>

			<div className='ProductCard__container'>
				<h3 className='ProductCard__h3'>{name}</h3>
				<p className='ProductCard__p'>{description}</p>
				<span className='ProductCard__price'>{price}</span>
			</div>
		</div>
	);
};
