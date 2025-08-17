import AboutBanner from '../../public/banner-about.webp';
import bannerMain from '../../public/banner-main.webp';
import LogoPage from '../../public/Logo.webp';

export const shared = {
	location: 'Location: 55 Main Street, New York',
	hours: 'Sunday - thursday: 08:00 - 9:00',
};

const { location, hours } = shared;

export const globalData = {
	logo: {
		img: LogoPage,
		name: 'Coffee Shop',
		href: '',
	},
	// HEADER //////////////////////////////////////////////
	header: {
		topHeader: {
			hours: hours,
			location: location,
		},

		// LOGO

		button: {
			text: 'CONTACT US',
			href: '#products', // agregar direccion de wsp
		},

		links: [
			{ id: 1, name: 'HOME', href: '#home' },
			{ id: 2, name: 'PRODUCTS', href: '#products' },
			{ id: 3, name: 'ABOUT US', href: '#about' },
		],

		iconMenu: { open: 'menu-outline', close: 'close-outline' },
	},

	// MAIN //////////////////////////////////////////////

	main: {
		h1: 'Lorem ipsum dolor sit amet',
		p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
		btn: {
			text: 'PRODUCTS',
			href: '#products',
		},
		img: bannerMain,
	},

	// PRODUCTS //////////////////////////////////////////////

	products: {
		h2: 'OUR PRODUCTS',
	},

	// ABOUT US //////////////////////////////////////////////

	about: {
		imageAbout: AboutBanner,
		// LOGO
		h3: 'ABOUT US',
		p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		contactUs: {
			h4: 'CONTATC US',
		},
		rrss: [
			{
				title: 'Instagram',
				href: 'https://www.instagram.com/code_fex.ok',
				logo: 'logo-instagram',
			},
			{ title: 'Whatsapp', href: '#', logo: 'logo-facebook' },
			{
				title: 'Facebook',
				href: 'https://www.facebook.com/?locale=es_LA',
				logo: 'logo-whatsapp',
			},
		],
		workinghours: {
			title: 'VISIT US',
			hours: hours,
			location: location,
		},
	},

	// FOOTER //////////////////////////////////////////////

	footer: {
		p: 'Sitio web creado por CODEFEX',
		href: '#',
		location: location,
	},
};
