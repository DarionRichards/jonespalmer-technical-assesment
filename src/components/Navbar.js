import JonesPalmerLogo from "../assets/JP-LOGO.jpg";
import {topMenu} from "../data/navbar/topMenu";

export const Navbar = () => {
	return (
		<>
			<section className="navbar-container">
				<section className="navbar">
					<div className="navbar-logo">
						<a href="/">
							<img
								className="jones-palmer-logo"
								src={JonesPalmerLogo}
								alt="Jones and Palmer logo"
							/>
						</a>
					</div>
					<nav>
						<ul className="nav-btn-container">
							{topMenu.map((item, i) => {
								return (
									<li
										key={i}
										className={
											item.title === "Get In Touch" ? "nav-btn-git" : null
										}
									>
										<a href={item.href} title={item.title}>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</section>
			</section>
		</>
	);
};
