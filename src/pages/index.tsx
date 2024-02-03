import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Fragment } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
	stackData,
	projectsData,
	techsData,
	toolsData,
	StackType,
	ProjectType,
	GenericType,
} from "@/data/data";
import CardCollection from "@/components/card-collection";

export const getStaticProps = (async () => {
	return {
		props: {
			stack: stackData,
			projects: projectsData,
			techs: techsData,
			tools: toolsData,
		},
	};
}) satisfies GetStaticProps<{
	stack: StackType[];
	projects: ProjectType[];
	techs: GenericType[];
	tools: GenericType[];
}>;

export default function Home({
	stack,
	projects,
	techs,
	tools,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
						<Fragment key={tech.id}>
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

			<section className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Projects</h2>
				<div className="px-12">
					<Carousel className="w-full">
						<CarouselContent>
							{projects.map((project) => (
								<CarouselItem key={project.id} className="sm:basis-1/2">
									<Card className="group">
										<CardContent className="p-6 relative flex flex-col aspect-square justify-center space-y-4">
											<h2
												data-before={project.title}
												className="text-4xl text-gray-700 dark:text-gray-300 font-bold max-w-[9ch] whitespace-pre-wrap relative before:content-[attr(data-before)] before:absolute before:text-black dark:before:text-white before:w-0 before:overflow-hidden before:transition-[width] before:duration-300 group-hover:before:w-full"
											>
												{project.title}
											</h2>
											<Separator />
											<span className="flex items-center space-x-6">
												<a
													href={project.href}
													target="_blank"
													rel="noreferrer"
													className="relative hover:outline outline-[6px] outline-gray-300 dark:outline-gray-700 rounded-full h-8 w-8 sm:h-10 sm:w-10 transition-[outline] duration-150"
												>
													<Image
														src={project.img}
														alt={project.title}
														fill
														className={project.inverts ? "dark:invert" : ""}
													/>
												</a>
												<a
													href={project.github}
													target="_blank"
													rel="noreferrer"
													className="relative hover:outline outline-[6px] outline-gray-300 dark:outline-gray-700 rounded-full h-8 w-8 sm:h-10 sm:w-10 transition-[outline] duration-150"
												>
													<Image
														src="/static/github.svg"
														alt={`${project.title} GitHub`}
														fill
														className="dark:invert"
													/>
												</a>
											</span>
											<a
												href={project.href}
												target="_blank"
												rel="noreferrer"
												className="group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition-colors duration-300 p-3 rounded-lg absolute top-0 right-4 xs:top-2 xs:right-6"
											>
												<Image
													src="/static/link.svg"
													alt={`Link to ${project.title}`}
													width={18}
													height={18}
													className="dark:invert"
												/>
											</a>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>

			<Separator />

			<CardCollection title="techs" array={techs} />

			<Separator />

			<CardCollection title="uses" array={tools} />

			<section className="flex flex-col gap-2 2xl:hidden">
				<Separator />

				<div className="p-2">
					<p>
						<b>Thanks for dropping by!</b> Feel free to check out my resume{" "}
						<a
							href="https://docs.google.com/document/d/13WfY4hwWSzz77P_BCD2dDJVlw44ESNJqeyRvQTkcKvc/edit?pli=1"
							target="_blank"
							rel="noreferrer"
							className="underline decoration-1 hover:text-gray-700 dark:hover:text-gray-300"
						>
							right over here
						</a>
						. Cheers!
					</p>
				</div>
			</section>
		</Layout>
	);
}
