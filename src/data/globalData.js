import AboutBanner from '../../public/banner-about.webp';
import bannerMain from '../../public/banner-main.webp';
import LogoPage from '../../public/Logo.webp';

export const shared = {
	location: 'Location: 55 Main Street, New York',
	hours: 'Sunday - thursday: 08:00 - 9:00',
};

export const globalData = {
	// LOGO SECTION
	logo: {
		image: LogoPage,
		altText: 'Coffee Shop',
		url: '#',
	},

	// HEADER SECTION
	header: {
		topBar: {
			openingHours: shared.hours,
			adress: shared.location,
		},
		ctaButton: {
			text: 'CONTACT US',
			url: '#products', // agregar direccion de wsp
		},
		navigationLinks: [
			{ id: 1, label: 'HOME', url: '#home' },
			{ id: 2, label: 'PRODUCTS', url: '#products' },
			{ id: 3, label: 'ABOUT US', url: '#about' },
		],

		menuIcons: { open: 'menu-outline', close: 'close-outline' },
	},

	// HERO SECTION

	hero: {
		title: 'Lorem ipsum dolor sit amet',
		description:
			'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
		ctaButton: {
			text: 'PRODUCTS',
			url: '#products',
		},
		image: bannerMain,
	},

	// PRODUCTS SECTION

	products: {
		sectionTitle: 'OUR PRODUCTS',
	},

	// ABOUT US //////////////////////////////////////////////

	about: {
		image: AboutBanner,
		sectionTitle: 'ABOUT US',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		contact: {
			title: 'CONTATC US',
			socialMedia: [
				{
					platform: 'Instagram',
					url: 'https://www.instagram.com/code_fex.ok',
					icon: 'logo-instagram',
				},
				{ platform: 'Whatsapp', url: '#', icon: 'logo-whatsapp' },
				{
					platform: 'Facebook',
					url: 'https://www.facebook.com/?locale=es_LA',
					icon: 'logo-facebook',
				},
			],
		},
		businessInfo: {
			title: 'VISIT US',
			openingHours: shared.hours,
			adress: shared.location,
		},
	},

	// FOOTER //////////////////////////////////////////////

	footer: {
		copyightText: 'Sitio web creado por CODEFEX',
		creditUrl: '#',

		imageCredits: [
			{ text: 'Imágenes por Unplash', url: '', target: '' },
			{ text: 'Íconos por Ionicons', url: '', target: '' },
		],
	},
};
