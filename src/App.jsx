import './App.scss';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Header } from './pages/components/header/Header';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';
import { About } from './pages/about/About';
import { Footer } from './pages/components/footer/Footer';
import { useEffect } from 'react';

export const App = () => {
	useEffect(() => {
		Aos.init();
	}, []);
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
