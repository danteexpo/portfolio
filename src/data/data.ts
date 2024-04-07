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
	img: string;
	inverts: boolean;
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
		title: "Kanban Board",
		href: "https://kanban-de.vercel.app/",
		img: "/static/projects/kanban.svg",
		inverts: true,
	},
	{
		id: 1,
		title: "Expense Tracker",
		href: "https://expense-tracker-de.vercel.app/",
		img: "/static/projects/expensetracker.svg",
		inverts: false,
	},
	{
		id: 2,
		title: "Team Work!",
		href: "https://teamwork-de.vercel.app/",
		img: "/static/projects/teamwork.svg",
		inverts: false,
	},
	{
		id: 3,
		title: "Netflix Clone",
		href: "https://netflix-clone-de.vercel.app/",
		img: "/static/projects/netflixclone.svg",
		inverts: false,
	},
	{
		id: 4,
		title: "Keyboard Champ",
		href: "https://keyboard-champ.vercel.app/",
		img: "/static/projects/keyboardchamp.svg",
		inverts: false,
	},
	{
		id: 5,
		title: "Magic Match",
		href: "https://magic-match-de.vercel.app/",
		img: "/static/projects/magicmatch.svg",
		inverts: false,
	},
];

const skillsData: GenericType[] = [
	{ id: 0, label: "HTML", img: "/static/skills/html.svg", inverts: false },
	{ id: 1, label: "CSS", img: "/static/skills/css.svg", inverts: false },
	{ id: 2, label: "Scss/Sass", img: "/static/skills/sass.svg", inverts: false },
	{
		id: 3,
		label: "JavaScript",
		img: "/static/skills/javascript.svg",
		inverts: false,
	},
	{
		id: 4,
		label: "TypeScript",
		img: "/static/skills/typescript.svg",
		inverts: false,
	},
	{ id: 5, label: "React", img: "/static/skills/react.svg", inverts: false },
	{ id: 6, label: "Next.js", img: "/static/skills/nextjs.svg", inverts: true },
	{ id: 7, label: "Vite", img: "/static/skills/vite.svg", inverts: false },
	{
		id: 8,
		label: "TailwindCSS",
		img: "/static/skills/tailwindcss.svg",
		inverts: false,
	},
	{
		id: 9,
		label: "Framer Motion",
		img: "/static/skills/framermotion.svg",
		inverts: false,
	},
	{
		id: 10,
		label: "Zustand",
		img: "/static/skills/zustand.svg",
		inverts: false,
	},
	{ id: 11, label: "Zod", img: "/static/skills/zod.svg", inverts: false },
	{ id: 12, label: "SWR", img: "/static/skills/swr.svg", inverts: true },
	{ id: 13, label: "Prisma", img: "/static/skills/prisma.svg", inverts: true },
	{
		id: 14,
		label: "Supabase",
		img: "/static/skills/supabase.svg",
		inverts: false,
	},
	{
		id: 15,
		label: "Firebase",
		img: "/static/skills/firebase.svg",
		inverts: false,
	},
];

export { stackData, projectsData, skillsData };
