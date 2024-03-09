"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className="sidebar">
			<div className="flex size-full flex-col gap-4">
				<Link href="/" className="sidebar-logo">
					<Image alt="logo" src={`/logo.png`} width={180} height={28} />
				</Link>
				<nav className="sidebar-nav">
					<SignedIn>
						<ul className="sidebar-nav_elements">
							{navLinks.slice(0, 6).map((link) => {
								const isActive = link.route === pathname;

								return (
									<li
										key={link.route}
										className={`sidebar-nav_element group ${
											isActive ? "bg-[#7216F4] text-white" : "text-gray-700"
										}`}
									>
										<Link href={link.route} className="sidebar-link">
											<Image
												src={link.icon}
												alt="nav items logo"
												width={24}
												height={24}
												className={`${isActive && "brightness-200"}`}
											/>
											{link.label}
										</Link>
									</li>
								);
							})}
						</ul>
						<ul className="sidebar-nav_elements">
							{navLinks.slice(6).map((link) => {
								const isActive = link.route === pathname;

								return (
									<li
										key={link.route}
										className={`sidebar-nav_element group ${
											isActive ? "bg-[#7216F4] text-white" : "text-gray-700"
										}`}
									>
										<Link href={link.route} className="sidebar-link">
											<Image
												src={link.icon}
												alt="nav items logo"
												width={24}
												height={24}
												className={`${isActive && "brightness-200"}`}
											/>
											{link.label}
										</Link>
									</li>
								);
							})}
							<li className="flex-center cursor-pointer gap-2 p-4">
								<UserButton afterSignOutUrl="/" showName />
							</li>
						</ul>
					</SignedIn>
					<SignedOut>
						<Button asChild className="button bg-[#7216F4] bg-cover">
							<Link href="/sign-in">Login</Link>
						</Button>
					</SignedOut>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
