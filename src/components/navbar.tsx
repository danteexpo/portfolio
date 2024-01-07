import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

const navLinks = [
	{
		label: "home",
		pathname: "/",
		built: true,
	},
	{
		label: "work",
		pathname: "/work",
		built: true,
	},
	{
		label: "blog",
		pathname: "/blog",
		built: false,
	},
];

const Navbar = () => {
	return (
		<header className="flex items-center w-full justify-between text-2xl font-medium">
			<nav className="flex items-center gap-2">
				{navLinks.map((navLink) => (
					<Fragment key={navLink.label}>
						<Link
							href={navLink.pathname}
							key={navLink.label}
							className={cn(
								"capitalize hover:text-gray-700 dark:hover:text-gray-300",
								!navLink.built &&
									"pointer-events-none text-gray-500 dark:text-gray-400 line-through decoration-1"
							)}
						>
							{navLink.label}{" "}
						</Link>
						{!navLink.built && <p className="inline text-lg">🚧</p>}
					</Fragment>
				))}
			</nav>
			<ModeToggle />
		</header>
	);
};

export default Navbar;
