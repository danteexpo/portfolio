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
    label: 'nextjs',
    href: 'https://nextjs.org/',
    description: 'The React Framework for the Web.',
  },
  {
    id: 1,
    label: 'react',
    href: 'https://react.dev/',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    label: 'tailwindcss',
    href: 'https://tailwindcss.com/',
    description: 'A utility-first CSS framework.',
  },
  {
    id: 3,
    label: 'typescript',
    href: 'https://www.typescriptlang.org/',
    description: 'A strongly typed language that builds on top of JavaScript.',
  },
];

const projectsData: ProjectType[] = [
  {
    id: 0,
    title: 'Kanban Board',
    href: 'https://kanban-de.vercel.app/',
    img: '/static/projects/kanban.svg',
    inverts: true,
  },
  {
    id: 1,
    title: 'Expense Tracker',
    href: 'https://expense-tracker-de.vercel.app/',
    img: '/static/projects/expensetracker.svg',
    inverts: false,
  },
  {
    id: 2,
    title: 'Team Work!',
    href: 'https://teamwork-de.vercel.app/',
    img: '/static/projects/teamwork.svg',
    inverts: false,
  },
  {
    id: 3,
    title: 'Netflix Clone',
    href: 'https://netflix-clone-de.vercel.app/',
    img: '/static/projects/netflixclone.svg',
    inverts: false,
  },
  {
    id: 4,
    title: 'Keyboard Champ',
    href: 'https://keyboard-champ.vercel.app/',
    img: '/static/projects/keyboardchamp.svg',
    inverts: false,
  },
  {
    id: 5,
    title: 'Magic Match',
    href: 'https://magic-match-de.vercel.app/',
    img: '/static/projects/magicmatch.svg',
    inverts: false,
  },
];

const skillsData: GenericType[] = [
  { id: 0, label: 'HTML', img: '/static/skills/html.svg', inverts: false },
  { id: 1, label: 'CSS', img: '/static/skills/css.svg', inverts: false },
  { id: 2, label: 'SASS', img: '/static/skills/sass.svg', inverts: false },
  {
    id: 3,
    label: 'JavaScript',
    img: '/static/skills/javascript.svg',
    inverts: false,
  },
  {
    id: 4,
    label: 'TypeScript',
    img: '/static/skills/typescript.svg',
    inverts: false,
  },
  { id: 5, label: 'React', img: '/static/skills/react.svg', inverts: false },
  { id: 6, label: 'Vite', img: '/static/skills/vite.svg', inverts: false },
  { id: 7, label: 'Next.js', img: '/static/skills/nextjs.svg', inverts: true },
  {
    id: 8,
    label: 'TailwindCSS',
    img: '/static/skills/tailwindcss.svg',
    inverts: false,
  },
  {
    id: 9,
    label: 'Zustand',
    img: '/static/skills/zustand.svg',
    inverts: false,
  },
  { id: 10, label: 'Zod', img: '/static/skills/zod.svg', inverts: false },
  { id: 11, label: 'SWR', img: '/static/skills/swr.svg', inverts: true },
  { id: 12, label: 'Node.js', img: '/static/skills/nodejs.svg', inverts: true },
  {
    id: 13,
    label: 'Express',
    img: '/static/skills/express.svg',
    inverts: true,
  },
  {
    id: 14,
    label: 'Mongo DB',
    img: '/static/skills/mongodb.svg',
    inverts: false
  },
  {
    id: 15,
    label: 'Supabase',
    img: '/static/skills/supabase.svg',
    inverts: false,
  },
  {
    id: 16,
    label: 'Firebase',
    img: '/static/skills/firebase.svg',
    inverts: false,
  },
  {
    id: 17,
    label: 'Figma',
    img: '/static/skills/figma.svg',
    inverts: false,
  },
  {
    id: 18,
    label: 'Vercel',
    img: '/static/skills/vercel.svg',
    inverts: true,
  },
  {
    id: 19,
    label: 'Postman',
    img: '/static/skills/postman.svg',
    inverts: false,
  },
];

export { stackData, projectsData, skillsData };
