import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const techs = [
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

export default function Home() {
	return (
		<Layout>
			{" "}
			<section className="flex flex-col gap-4">
				<div>
					<h1 className="text-4xl font-bold">
						Hello everyone! I&apos;m Dante Expósito
					</h1>
					<p className="inline">
						A self-taught and optimistic frontend developer who loves designing
						and building web applications using
					</p>
					{techs.map((tech, index) => (
						<>
							<p className="inline">{index === techs.length - 1 && "and"} </p>
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
								<HoverCardContent className="w-80 hidden md:flex">
									<div className="flex justify-between space-x-4">
										<Avatar>
											<AvatarImage
												src={`/${tech.label}.svg`}
												alt={tech.label}
												className={
													tech.label === "nextjs"
														? "bg-white border border-white"
														: ""
												}
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
								{index === techs.length - 1 ? "." : ","}{" "}
							</p>
						</>
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
								<AvatarImage src="/github.svg" alt="github" />
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
								<AvatarImage src="/linkedin.svg" alt="linkedin" />
								<AvatarFallback>li</AvatarFallback>
							</Avatar>
							<p>LinkedIn</p>
						</a>
					</Button>
				</div>
			</section>
			<Separator />
			<section>
				<h2>Projects</h2>
			</section>
			<Separator />
			<section>
				<h2>Techs</h2>
			</section>
			<Separator />
			<section>
				<h2>Uses</h2>
			</section>
		</Layout>
	);
}
