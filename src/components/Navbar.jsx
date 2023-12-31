import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			setActive("");
		});

		return () => window.removeEventListener("scroll", () => {});
	}, []);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						alt="logo"
						className="w-12 h-12 object-contain mr-2"
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Will &nbsp;
						<span className="sm:block hidden">
							| &nbsp; Software Engineer
						</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map(({ id, title }) => (
						<li
							key={id}
							className={`${
								active === title
									? "text-white"
									: "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(title)}
						>
							<a href={`#${id}`}>{title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-black absolute top-20 right-0 ml-4 my-2 min-w-[140px] z-10 rounded-b-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white"
											: "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
									onClick={() => {
										setActive(link.title);
										setToggle(!toggle);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
