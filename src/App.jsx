import './App.scss';

import { Header } from './pages/components/header/Header';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
import { Footer } from './pages/components/footer/Footer';

export const App = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Home />
				<Products />
				<About />
			</main>
			<Footer />
		</div>
	);
};
