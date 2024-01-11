export type StackType = {
	id: number;
	label: string;
	href: string;
	description: string;
};

export type ProjectType = {
	id: number;
	title: string;
	href: string;
	github: string;
	img: string;
};

export type GenericType = {
	id: number;
	label: string;
	img: string;
	inverts: boolean;
};

const stackData: StackType[] = [
	{
		id: 0,
		label: "nextjs",
		href: "https://nextjs.org/",
		description: "The React Framework for the Web.",
	},
	{
		id: 1,
		label: "react",
		href: "https://react.dev/",
		description: "A JavaScript library for building user interfaces.",
	},
	{
		id: 2,
		label: "tailwindcss",
		href: "https://tailwindcss.com/",
		description: "A utility-first CSS framework.",
	},
	{
		id: 3,
		label: "typescript",
		href: "https://www.typescriptlang.org/",
		description: "A strongly typed language that builds on top of JavaScript.",
	},
];

const projectsData: ProjectType[] = [
	{
		id: 0,
		title: "Expense Tracker",
		href: "https://de-expense-tracker.netlify.app/",
		github: "https://github.com/danteexpo/expense-tracker",
		img: "/static/projects/expensetracker.svg",
	},
	{
		id: 1,
		title: "Facebook Clone",
		href: "https://de-facebook-clone.netlify.app/",
		github: "https://github.com/danteexpo/facebook-clone",
		img: "/static/projects/facebookclone.svg",
	},
	{
		id: 2,
		title: "Team Work!",
		href: "https://de-teamwork.netlify.app/",
		github: "https://github.com/danteexpo/teamwork",
		img: "/static/projects/teamwork.svg",
	},
	{
		id: 3,
		title: "Rick & Morty Wiki",
		href: "https://de-rick-and-morty-wiki.netlify.app/",
		github: "https://github.com/danteexpo/rick-morty-wiki",
		img: "/static/projects/rickandmorty.svg",
	},
	{
		id: 4,
		title: "Netflix Clone",
		href: "https://de-netflix-clone.netlify.app/",
		github: "https://github.com/danteexpo/netflix-clone-app",
		img: "/static/projects/netflixclone.svg",
	},
	{
		id: 5,
		title: "Keyboard Champ",
		href: "https://keyboard-champ.vercel.app/",
		github: "https://github.com/danteexpo/keyboard-champ",
		img: "/static/projects/keyboardchamp.svg",
	},
	{
		id: 6,
		title: "Magic Match",
		href: "https://de-magic-match.netlify.app/",
		github: "https://github.com/danteexpo/magic-match",
		img: "/static/projects/magicmatch.svg",
	},
];

const techsData: GenericType[] = [
	{ id: 0, label: "HTML", img: "/static/techs/html.svg", inverts: false },
	{ id: 1, label: "CSS", img: "/static/techs/css.svg", inverts: false },
	{ id: 2, label: "Scss/Sass", img: "/static/techs/sass.svg", inverts: false },
	{
		id: 3,
		label: "JavaScript",
		img: "/static/techs/javascript.svg",
		inverts: false,
	},
	{
		id: 4,
		label: "TypeScript",
		img: "/static/techs/typescript.svg",
		inverts: false,
	},
	{ id: 5, label: "React", img: "/static/techs/react.svg", inverts: false },
	{ id: 6, label: "Next.js", img: "/static/techs/nextjs.svg", inverts: true },
	{ id: 7, label: "Vite", img: "/static/techs/vite.svg", inverts: false },
	{
		id: 8,
		label: "TailwindCSS",
		img: "/static/techs/tailwindcss.svg",
		inverts: false,
	},
	{
		id: 9,
		label: "Framer Motion",
		img: "/static/techs/framermotion.svg",
		inverts: false,
	},
	{ id: 10, label: "SWR", img: "/static/techs/swr.svg", inverts: true },
	{ id: 11, label: "Prisma", img: "/static/techs/prisma.svg", inverts: true },
	{
		id: 12,
		label: "Supabase",
		img: "/static/techs/supabase.svg",
		inverts: false,
	},
	{
		id: 13,
		label: "Firebase",
		img: "/static/techs/firebase.svg",
		inverts: false,
	},
];

const toolsData: GenericType[] = [
	{ id: 0, label: "Pop OS", img: "/static/tools/popos.svg", inverts: false },
	{
		id: 1,
		label: "Obsidian",
		img: "/static/tools/obsidian.svg",
		inverts: false,
	},
	{ id: 2, label: "Figma", img: "/static/tools/figma.svg", inverts: false },
	{ id: 3, label: "VS Code", img: "/static/tools/vscode.svg", inverts: false },
	{ id: 4, label: "Vim Motions", img: "/static/tools/vim.svg", inverts: false },
	{ id: 5, label: "Brave", img: "/static/tools/brave.svg", inverts: false },
	{ id: 6, label: "GitHub", img: "/static/github.svg", inverts: true },
	{ id: 7, label: "shadcn/ui", img: "/static/tools/shadcn.svg", inverts: true },
	{
		id: 8,
		label: "Material UI",
		img: "/static/tools/material.svg",
		inverts: false,
	},
	{
		id: 9,
		label: "Headless UI",
		img: "/static/tools/headless.svg",
		inverts: false,
	},
	{
		id: 10,
		label: "myNoise.net",
		img: "/static/tools/mynoise.svg",
		inverts: true,
	},
	{ id: 11, label: "ChatGPT", img: "/static/tools/chatgpt.svg", inverts: true },
];

export { stackData, projectsData, techsData, toolsData };
