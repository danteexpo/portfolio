import Head from "next/head";
import Navbar from "@/components/navbar";
import { Alumni_Sans as FontSans } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

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
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<main
					className={cn(
						"min-w-80 max-w-2xl mx-auto flex flex-col gap-8 p-4 xs:p-6 sm:p-8 md:px-0 text-xl font-medium font-sans antialiased",
						fontSans.variable
					)}
				>
					<Navbar />
					{children}
				</main>
			</ThemeProvider>
		</>
	);
};

export default Layout;
