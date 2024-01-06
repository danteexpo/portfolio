import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";

export default function Work() {
	return (
		<Layout>
			<h1 className="text-4xl font-bold">Experience</h1>
			<Separator />
			<section className="flex flex-col gap-1">
				<div>
					<h2 className="text-2xl font-bold">Oddswing.bet</h2>
					<h4 className="text-gray-500 dark:text-gray-400">
						UI/UX Designer and Frontend Developer 07/2023 - 12/2023
					</h4>
				</div>
				<p>
					• Contributed to the growth and enhancement of a betting assistant
					application and worked on project features such as email templates for
					clients, the implementation of notification systems built for
					Telegram, email and web using the latest technologies.
				</p>
				<p>
					• Created, prototyped and applied UI/UX designs, actively participated
					in product, design and technical discussions with team members.
				</p>
				<p>
					• Got involved in architecting and designing technical solutions,
					conducted general testing and performed bug fixes and issue
					investigations.
				</p>
				<p>
					• Built and maintained continuous integration processes to streamline
					development. Solved logical coding problems, interacted with API
					endpoints and reduced SEO warnings/errors.
				</p>
				<p>
					• Stayed open-minded and demonstrated a willingness to receive and
					incorporate feedback.
				</p>
			</section>
			<Separator />
			<section className="flex flex-col gap-1">
				<div>
					<h2 className="text-2xl font-bold">Swise Software Factory</h2>
					<h4 className="text-gray-500 dark:text-gray-400">
						UI/UX Designer and Frontend Developer 03/2022 - 03/2023
					</h4>
				</div>
				<p>
					• Designed and presented interactive UX/UI prototypes that served as
					the foundation for developing a dynamic data visualization system.
				</p>
				<p>
					• Transformed an Excel-based system into a high-performance and
					responsive web application, empowering users to seamlessly input data
					and visualize it through tables and multiple charts.
				</p>
				<p>
					• Optimized the information input, access, viewing, and download
					experience by leveraging resources from REST API endpoints.
				</p>
				<p>
					• Implemented user-specific route restrictions, ensuring secure access
					and personalized functionality.
				</p>
				<p>
					• Spearheaded the implementation of both light and dark modes,
					elevating the overall user experience.
				</p>
			</section>
		</Layout>
	);
}
