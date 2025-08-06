import { v4 as uuidv4 } from 'uuid';
import { products } from '../../data';

export const Products = () => {
	return (
		<div className='Products'>
			{products?.map(({ name, description, img }) => (
				<div key={uuidv4()}>
					<h3>{name}</h3>
					<p>{description}</p>
					<img src={img} alt='name' />
				</div>
			))}
		</div>
	);
};
