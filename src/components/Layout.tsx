import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Alumni_Sans } from "next/font/google";
import { ReactNode } from "react";

const alumniSans = Alumni_Sans({ subsets: ["latin"] });

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<title>Dante Expósito</title>
				<meta
					name="description"
					content="A self-taught and optimistic frontend developer who loves designing and building web applications."
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<Navbar nextFont={alumniSans} />
			<main
				className={`flex flex-col px-8 text-xl font-medium ${alumniSans.className}`}
			>
				{children}
			</main>
		</>
	);
};

export default Layout;
