import { v4 as uuidv4 } from 'uuid';
import { productsCards } from '../../data';
import { globalData } from '../../data';

const { products } = globalData;
const { h2 } = products;

export const Products = () => {
	return (
		<div className='Products' id='products'>
			<h2>{h2}</h2>
			<div className='Products-cards'>
				{productsCards?.map(({ name, description, img, price }) => (
					<div key={uuidv4()}>
						<h3>{name}</h3>
						<p>{description}</p>
						<img src={img} alt={name} />
						<span>{price}</span>
					</div>
				))}
			</div>
		</div>
	);
};
