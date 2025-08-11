export const shared = {
	location: 'LOCATION: 55 MAIN STREET, NEW YORK',
	hours: 'OPENING HOURS: 08:00 AM - 09:00 PM',
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
		p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		btn: 'Button',
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
			{ title: 'Instagram', href: '#', logo: 'instagram' },
			{ title: 'Whatsapp', href: '#', logo: 'facebook' },
			{ title: 'Facebook', href: '#', logo: 'whatsapp' },
		],
	},

	// FOOTER //////////////////////////////////////////////

	footer: {
		p: 'Sitio web creado por CODEFEX',
		href: '#',
		location: location,
	},
};
