import Layout from "@/components/layout";
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
					and building web applications using React, Next.js, TailwindCSS, and
					TypeScript.
				</p>
			</section>
			<HoverCard>
				<HoverCardTrigger>Hover</HoverCardTrigger>
				<HoverCardContent>
					The React Framework – created and maintained by @vercel.
				</HoverCardContent>
			</HoverCard>
		</Layout>
	);
}
