import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	git,
	figma,
	docker,
	python,
	flask,
	campbnb,
	findtable,
	etana,
	geeksquad,
	js3d,
	react3d,
	node_3d,
	python3d,
	github,
	linkedin,
	email,
	resume,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];
function onDownload() {
	const link = document.createElement("a");
	link.download = `will_kee_resume_${new Date().getTime()}.pdf`;
	link.href = "/will_kee_resume.pdf";
	link.click();
}

export const contactLinks = [
	{
		name: "github",
		src: github,
		url: () => window.open("https://www.github.com/willkee", "_blank"),
	},
	{
		name: "linkedin",
		src: linkedin,
		url: () =>
			window.open("https://www.linkedin.com/in/will-kee/", "_blank"),
	},
	{
		name: "email",
		src: email,
		url: () => window.open("mailto:will.kee.dev@gmail.com", "_blank"),
	},
	{
		name: "resume",
		src: resume,
		url: onDownload,
	},
];

const services = [
	{
		title: "React Developer",
		icon: react3d,
	},
	{
		title: "JavaScript Developer",
		icon: js3d,
	},
	{
		title: "NodeJS Developer",
		icon: node_3d,
	},
	{
		title: "Python Developer",
		icon: python3d,
	},
];

const technologies = [
	{ name: "JavaScript", icon: javascript },
	{ name: "TypeScript", icon: typescript },
	{ name: "React JS", icon: reactjs },
	{ name: "Redux", icon: redux },
	{ name: "Tailwind CSS", icon: tailwind },
	{ name: "Node JS", icon: nodejs },
	{ name: "Python", icon: python },
	{ name: "Flask", icon: flask },
	{ name: "HTML 5", icon: html },
	{ name: "CSS 3", icon: css },
	{ name: "docker", icon: docker },
	{ name: "git", icon: git },
	{ name: "figma", icon: figma },
];

const experiences = [
	{
		title: "Software Developer",
		company_name: "Etana Custody",
		icon: etana,
		iconBg: "#000",
		date: "Dec 2022 - May 2023",
		points: [
			"Spearheaded major refactoring of frontend Etana Digital service (internal tool), enhancing user-friendliness and navigation using JavaScript, React.js/Redux, HTML/CSS, and Material UI resulting in a 10% increase in user productivity.",
			"Maximized code readability with reusable components while reducing development time for new projects by 40%.",
			"Collaborated with the back-end team to integrate user-facing elements with server-side logic.",
		],
	},
	{
		title: "Home Theater Agent",
		company_name: "Best Buy Geek Squad",
		icon: geeksquad,
		iconBg: "#d1d1d1",
		date: "Nov 2020 - Nov 2022",
		points: [
			"Collaborated with fellow agents through Microsoft Teams to assist with safely moving heavy electronic equipment within customers' homes for a 50% more efficient workflow and to reduce customer wait times.",
			"Mobilized with a large team to coordinate logistical challenges and safely transport sensitive electronic equipment.",
			"Initiated effective communication with customers to provide a positive service experience while navigating to ambiguous locations with minimal or outdated Google Maps data.",
		],
	},
];

const projects = [
	{
		name: "CampBnB",
		description:
			"Web-based platform inspired by airBnB that allows users to search, book, and manage camp spot bookings within Colorado. Site owners can add new camp sites and list a photo and location that can be view on a map.",
		tags: [
			{
				name: "js",
				color: "yellow-text-gradient",
			},
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "node",
				color: "green-text-gradient",
			},
			{
				name: "aws",
				color: "text-yellow-500",
			},
			{
				name: "postgres",
				color: "pink-text-gradient",
			},
			{
				name: "html/css",
				color: "text-gray-300",
			},
		],
		image: campbnb,
		repo_link: "https://github.com/willkee/CampBnB",
		live_link: "https://aa-campbnb.herokuapp.com/",
	},
	{
		name: "FindTable",
		description:
			"Web application inspired by OpenTable that allows users to search, book, and manage reservations at restaurants in the New York metropolitan area. Restaurant owners can add their establishment and list a photo and location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "python",
				color: "green-text-gradient",
			},
			{
				name: "flask",
				color: "pink-text-gradient",
			},
			{
				name: "docker",
				color: "text-yellow-500",
			},
			{
				name: "postgres",
				color: "pink-text-gradient",
			},
			{
				name: "html/css",
				color: "text-gray-300",
			},
		],
		image: findtable,
		repo_link: "https://github.com/willkee/FindTable",
		live_link: "https://find-table.herokuapp.com/",
	},
];

export { services, technologies, experiences, projects };
