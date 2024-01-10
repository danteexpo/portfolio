import Head from "next/head";
import Navbar from "@/components/navbar";
import { Alumni_Sans as FontSans } from "next/font/google";
import { ReactNode, useEffect, useRef } from "react";
import { ThemeProvider } from "./theme-provider";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { Toaster } from "./ui/sonner";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();
	const toasted = useRef(false);

	useEffect(() => {
		if (toasted.current) {
			return;
		}

		setTimeout(() => {
			toast("Hey there! Thanks for dropping by!", {
				description:
					"Feel free to check out my resume and mail right over here. Cheers!",
				action: {
					label: "Resume",
					onClick: () =>
						router.push(
							"https://docs.google.com/document/d/13WfY4hwWSzz77P_BCD2dDJVlw44ESNJqeyRvQTkcKvc/edit?pli=1"
						),
				},
			});
		}, 10000);

		toasted.current = true;
	}, [router]);

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
					<Toaster duration={600000} closeButton />
				</main>
			</ThemeProvider>
		</>
	);
};

export default Layout;
