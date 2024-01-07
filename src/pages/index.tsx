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
		img: "https://github.com/nextjs.png",
		description: "The React Framework for the Web.",
	},
	{
		label: "react",
		href: "https://react.dev/",
		img: "https://github.com/react.png",
		description: "A JavaScript library for building user interfaces.",
	},
	{
		label: "tailwindcss",
		href: "https://tailwindcss.com/",
		img: "https://github.com/tailwindcss.png",
		description: "A utility-first CSS framework.",
	},
	{
		label: "typescript",
		href: "https://www.typescriptlang.org/",
		img: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
		description: "A strongly typed language that builds on top of JavaScript.",
	},
];

const techs = [
	{ label: "HTML", img: null },
	{ label: "CSS", img: null },
	{ label: "Scss/Sass", img: null },
	{ label: "JavaScript", img: null },
	{ label: "TypeScript", img: null },
	{ label: "React", img: null },
	{ label: "Next.js", img: null },
	{ label: "Vite", img: null },
	{ label: "TailwindCSS", img: null },
	{ label: "Framer Motion", img: null },
	{ label: "SWR", img: null },
	{ label: "Zustand", img: null },
	{ label: "Node.js", img: null },
	{ label: "Express.js", img: null },
	{ label: "Prisma", img: null },
	{ label: "Supabase", img: null },
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
										<Avatar>
											<AvatarImage
												src={`/static/${tech.label}.svg`}
												alt={tech.label}
												className={tech.label === "nextjs" ? "dark:invert" : ""}
											/>
											<AvatarFallback>{tech.label.slice(0, 2)}</AvatarFallback>
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
								<AvatarFallback>gi</AvatarFallback>
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
								<AvatarFallback>li</AvatarFallback>
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
								<Avatar>
									<AvatarImage
										src="/static/nextjs.svg"
										alt="github"
										className="dark:invert"
									/>
									<AvatarFallback>{tech.label.slice(0, 2)}</AvatarFallback>
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
								<Avatar>
									<AvatarImage
										src="/static/nextjs.svg"
										alt="github"
										className="dark:invert"
									/>
									<AvatarFallback>{tool.label.slice(0, 2)}</AvatarFallback>
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
