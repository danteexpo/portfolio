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
	{ label: "HTML", img: "/static/html.svg", inverts: false },
	{ label: "CSS", img: "/static/css.svg", inverts: false },
	{ label: "Scss/Sass", img: "/static/sass.svg", inverts: false },
	{ label: "JavaScript", img: "/static/javascript.svg", inverts: false },
	{ label: "TypeScript", img: "/static/typescript.svg", inverts: false },
	{ label: "React", img: "/static/react.svg", inverts: false },
	{ label: "Next.js", img: "/static/nextjs.svg", inverts: true },
	{ label: "Vite", img: "/static/vite.svg", inverts: false },
	{ label: "TailwindCSS", img: "/static/tailwindcss.svg", inverts: false },
	{ label: "Framer Motion", img: "/static/framermotion.svg", inverts: false },
	{ label: "SWR", img: "/static/swr.svg", inverts: true },
	{ label: "Prisma", img: "/static/prisma.svg", inverts: true },
	{ label: "Supabase", img: "/static/supabase.svg", inverts: false },
	{ label: "Firebase", img: "/static/firebase.svg", inverts: false },
];

const tools = [
	{ label: "Pop OS", img: null },
	{ label: "Obsidian", img: null },
	{ label: "Figma", img: null },
	{ label: "VS Code", img: null },
	{ label: "Vim Motions", img: null },
	{ label: "Brave", img: null },
	{ label: "GitHub", img: null },
	{ label: "shadcn/ui", img: null },
	{ label: "Material UI", img: null },
	{ label: "Headless UI", img: null },
	{ label: "myNoise.net", img: null },
	{ label: "ChatGPT", img: null },
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
												src={`/static/${tech.label}.svg`}
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
										src="/static/nextjs.svg"
										alt={tool.label}
										className="dark:invert"
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
