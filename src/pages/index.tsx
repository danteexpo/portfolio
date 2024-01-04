import Layout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Home() {
	return (
		<Layout>
			<section>
				<h1 className="text-4xl font-bold">Dante Expósito</h1>
				<p>
					A self-taught and optimistic frontend developer who loves designing
					and building web applications using
					<HoverCard>
						<HoverCardTrigger asChild>
							<a
								href="https://nextjs.org/"
								target="_blank"
								rel="noreferrer"
								className="hover:underline px-2 decoration-1"
							>
								@nextjs,
							</a>
						</HoverCardTrigger>
						<HoverCardContent className="w-80 hidden sm:flex">
							<div className="flex justify-between space-x-4">
								<Avatar>
									<AvatarImage src="https://github.com/vercel.png" />
									<AvatarFallback>VC</AvatarFallback>
								</Avatar>
								<div className="space-y-1">
									<h4 className="font-semibold">@nextjs</h4>
									<p>
										The React Framework – created and maintained by @vercel.
									</p>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</p>
				{/* React, Next.js, TailwindCSS, and TypeScript. */}
			</section>
		</Layout>
	);
}
