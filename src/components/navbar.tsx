import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const navLinks = ["home", "work", "blog"];

const Navbar = () => {
	return (
		<header className="flex items-center w-full justify-between text-2xl font-medium">
			<nav className="flex items-center gap-2">
				{navLinks.map((navLink) => (
					<Link
						href={navLink === "home" ? "/" : `/${navLink}`}
						key={navLink}
						className="capitalize hover:text-gray-200"
					>
						{navLink}
					</Link>
				))}
			</nav>
			<ModeToggle />
		</header>
	);
};

export default Navbar;
