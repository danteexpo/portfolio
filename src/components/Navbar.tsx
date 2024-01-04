import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";

const navLinks = ["home", "work", "blog"];

type NavbarProps = {
	nextFont: NextFont;
};

const Navbar = ({ nextFont }: NavbarProps) => {
	return (
		<nav
			className={`p-8 flex text-2xl font-medium gap-2 ${nextFont.className}`}
		>
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
	);
};

export default Navbar;
