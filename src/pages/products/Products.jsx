import { v4 as uuidv4 } from 'uuid';
import { productsCards } from '../../data';
import './Products.scss';
import { ProductCard } from './cards/ProductCard';
import { globalData } from '../../data';

const { products } = globalData;
const { h2 } = products;

export const Products = () => {
	return (
		<div className='Products' id='products'>
			<div className='Products__container'>
				<h2 className='Products__h2'>{h2}</h2>
				<div className='Products__cards--container'>
					{productsCards?.map(({ name, description, img, price }) => (
						<ProductCard
							key={uuidv4()}
							name={name}
							description={description}
							img={img}
							price={price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
