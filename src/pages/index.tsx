import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

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
			<section>
				<h1 className="text-4xl font-bold">Dante Expósito</h1>
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
										<h4 className="font-semibold">@{tech.label}</h4>
										<p>{tech.description}</p>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>
						<p className="inline">{index === techs.length - 1 ? "." : ","} </p>
					</>
				))}
			</section>
		</Layout>
	);
}
