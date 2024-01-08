import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment } from "react";

const stack = [
	{
		label: "nextjs",
		href: "https://nextjs.org/",
		description: "The React Framework for the Web.",
	},
	{
		label: "react",
		href: "https://react.dev/",
		description: "A JavaScript library for building user interfaces.",
	},
	{
		label: "tailwindcss",
		href: "https://tailwindcss.com/",
		description: "A utility-first CSS framework.",
	},
	{
		label: "typescript",
		href: "https://www.typescriptlang.org/",
		description: "A strongly typed language that builds on top of JavaScript.",
	},
];

const techs = [
	{ label: "HTML", img: "/static/techs/html.svg", inverts: false },
	{ label: "CSS", img: "/static/techs/css.svg", inverts: false },
	{ label: "Scss/Sass", img: "/static/techs/sass.svg", inverts: false },
	{ label: "JavaScript", img: "/static/techs/javascript.svg", inverts: false },
	{ label: "TypeScript", img: "/static/techs/typescript.svg", inverts: false },
	{ label: "React", img: "/static/techs/react.svg", inverts: false },
	{ label: "Next.js", img: "/static/techs/nextjs.svg", inverts: true },
	{ label: "Vite", img: "/static/techs/vite.svg", inverts: false },
	{
		label: "TailwindCSS",
		img: "/static/techs/tailwindcss.svg",
		inverts: false,
	},
	{
		label: "Framer Motion",
		img: "/static/techs/framermotion.svg",
		inverts: false,
	},
	{ label: "SWR", img: "/static/techs/swr.svg", inverts: true },
	{ label: "Prisma", img: "/static/techs/prisma.svg", inverts: true },
	{ label: "Supabase", img: "/static/techs/supabase.svg", inverts: false },
	{ label: "Firebase", img: "/static/techs/firebase.svg", inverts: false },
];

const tools = [
	{ label: "Pop OS", img: "/static/tools/popos.svg", inverts: false },
	{ label: "Obsidian", img: "/static/tools/obsidian.svg", inverts: false },
	{ label: "Figma", img: "/static/tools/figma.svg", inverts: false },
	{ label: "VS Code", img: "/static/tools/vscode.svg", inverts: false },
	{ label: "Vim Motions", img: "/static/tools/vim.svg", inverts: false },
	{ label: "Brave", img: "/static/tools/brave.svg", inverts: false },
	{ label: "GitHub", img: "/static/github.svg", inverts: true },
	{ label: "shadcn/ui", img: "/static/tools/shadcn.svg", inverts: true },
	{ label: "Material UI", img: "/static/tools/material.svg", inverts: false },
	{ label: "Headless UI", img: "/static/tools/headless.svg", inverts: false },
	{ label: "myNoise.net", img: "/static/tools/mynoise.svg", inverts: true },
	{ label: "ChatGPT", img: "/static/tools/chatgpt.svg", inverts: true },
];

export default function Home() {
	return (
		<Layout>
			<section className="flex flex-col gap-4">
				<div>
					<h1 className="text-4xl font-bold">
						Hello everyone! I&apos;m Dante Expósito
					</h1>
					<p className="inline">
						A self-taught and optimistic frontend developer who loves designing
						and building web applications using
					</p>
					{stack.map((tech, index) => (
						<Fragment key={tech.label}>
							<p className="inline">{index === stack.length - 1 && "and"} </p>
							<HoverCard key={tech.label}>
								<HoverCardTrigger asChild>
									<a
										href={tech.href}
										target="_blank"
										rel="noreferrer"
										className="hover:underline decoration-1"
									>
										@{tech.label}
									</a>
								</HoverCardTrigger>
								<HoverCardContent className="w-80 hidden lg:flex">
									<div className="flex justify-between space-x-4">
										<Avatar className="rounded-none">
											<AvatarImage
												src={`/static/techs/${tech.label}.svg`}
												alt={tech.label}
												className={tech.label === "nextjs" ? "dark:invert" : ""}
											/>
											<AvatarFallback>
												{tech.label.slice(0, 2).toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div className="space-y-1">
											<h4 className="font-bold">@{tech.label}</h4>
											<p>{tech.description}</p>
										</div>
									</div>
								</HoverCardContent>
							</HoverCard>
							<p className="inline">
								{index === stack.length - 1 ? "." : ","}{" "}
							</p>
						</Fragment>
					))}
					<p className="inline">You can check what I&apos;m up to on:</p>
				</div>
				<div className="flex flex-wrap items-center gap-4">
					<Button
						variant="default"
						className="text-xl rounded-full px-6"
						asChild
					>
						<a
							href="https://github.com/danteexpo"
							target="_blank"
							rel="noreferrer"
							className="flex gap-2 items-center"
						>
							<Avatar className="h-6 w-6">
								<AvatarImage
									src="/static/github.svg"
									alt="github"
									className="invert dark:invert-0"
								/>
								<AvatarFallback>GI</AvatarFallback>
							</Avatar>
							<p>GitHub</p>
						</a>
					</Button>
					<Button
						variant="default"
						className="text-xl rounded-full px-6"
						asChild
					>
						<a
							href="https://www.linkedin.com/in/danteexposito/"
							target="_blank"
							rel="noreferrer"
							className="flex gap-2 items-center"
						>
							<Avatar className="h-6 w-6">
								<AvatarImage
									src="/static/linkedin.svg"
									alt="linkedin"
									className="invert dark:invert-0"
								/>
								<AvatarFallback>LI</AvatarFallback>
							</Avatar>
							<p>LinkedIn</p>
						</a>
					</Button>
				</div>
			</section>
			<Separator />
			<section>
				<h2 className="text-2xl font-bold">Projects</h2>
			</section>
			<Separator />
			<section className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Techs</h2>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4">
					{techs.map((tech) => (
						<Card key={tech.label} className="w-full grid place-items-center">
							<CardHeader className="flex flex-col items-center gap-4">
								<Avatar className="rounded-none">
									<AvatarImage
										src={tech.img}
										alt={tech.label}
										className={tech.inverts ? "dark:invert" : ""}
									/>
									<AvatarFallback>
										{tech.label.slice(0, 2).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<CardTitle className="text-xl">{tech.label}</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>
			<Separator />
			<section>
				<h2 className="text-2xl font-bold">Uses</h2>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4">
					{tools.map((tool) => (
						<Card key={tool.label} className="w-full grid place-items-center">
							<CardHeader className="flex flex-col items-center gap-4">
								<Avatar className="rounded-none">
									<AvatarImage
										src={tool.img}
										alt={tool.label}
										className={tool.inverts ? "dark:invert" : ""}
									/>
									<AvatarFallback>
										{tool.label.slice(0, 2).toUpperCase()}
									</AvatarFallback>
								</Avatar>
								<CardTitle className="text-xl">{tool.label}</CardTitle>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>
		</Layout>
	);
}
