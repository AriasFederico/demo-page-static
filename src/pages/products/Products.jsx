import { v4 as uuidv4 } from 'uuid';
import { productList } from '../../data';
import './Products.scss';
import { ProductCard } from './cards/ProductCard';
import { globalData } from '../../data';

const { products } = globalData;
const { sectionTitle } = products;

export const Products = () => {
	return (
		<div className='Products' id='products'>
			<div className='Products__container'>
				<h2 className='Products__h2'>{sectionTitle}</h2>
				<div className='Products__cards--container'>
					{productList?.map(({ name, description, image, price }) => (
						<ProductCard
							key={uuidv4()}
							name={name}
							description={description}
							image={image}
							price={price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
