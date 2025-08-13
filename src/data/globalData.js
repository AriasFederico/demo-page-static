import bannerMain from '../../public/banner-main.jpg';

export const shared = {
	location: 'Location: 55 Main Street, New York',
	hours: 'Sunday - thursday: 08:00 - 9:00',
	logo: '',
};

const { location, hours, logo } = shared;

export const globalData = {
	// HEADER //////////////////////////////////////////////
	header: {
		topHeader: {
			hours: hours,
			location: location,
		},

		logo: logo,

		button: {
			text: 'Contact us',
			href: '#', // agregar direccion de wsp
		},

		links: [
			{ id: 1, name: 'Home', href: '#home' },
			{ id: 2, name: 'Products', href: '#products' },
			{ id: 3, name: 'About us', href: '#about' },
		],

		iconMenu: { open: 'menu-outline', close: 'close-outline' },
	},

	// MAIN //////////////////////////////////////////////

	main: {
		h1: 'Lorem ipsum dolor sit amet',
		p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
		btn: 'Go to Products',
		img: bannerMain,
	},

	// PRODUCTS //////////////////////////////////////////////

	products: {
		h2: 'OUR PRODUCTS',
	},

	// ABOUT US //////////////////////////////////////////////

	about: {
		imageAbout: '',
		logo: logo,
		h3: 'Lorem ipsum dolor sit amet',
		p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		contactUs: {
			h3: 'ABOUT US',
		},
		rrss: [
			{ title: 'Instagram', href: '#', logo: 'logo-instagram' },
			{ title: 'Whatsapp', href: '#', logo: 'logo-facebook' },
			{ title: 'Facebook', href: '#', logo: 'logo-whatsapp' },
		],
	},

	// FOOTER //////////////////////////////////////////////

	footer: {
		p: 'Sitio web creado por CODEFEX',
		href: '#',
		location: location,
	},
};
