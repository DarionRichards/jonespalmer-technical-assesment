import JonesPalmerLogo from "../assets/JP-LOGO.jpg";

export const Navbar = () => {
	return (
		<>
			<section className="nav-container">
				<div className="nav-logo">
					<a href="/">
						<img
							className="jones-palmer-logo"
							src={JonesPalmerLogo}
							alt="Jones and Palmer logo"
						/>
					</a>
				</div>
				<div>
					<nav>
						<ul className="nav-btn-container">
							<li>About</li>
							<li>Services</li>
							<li>Our Work</li>
							<li>Thinking</li>
							<li>Careers</li>
							<li>Get In Touch</li>
						</ul>
					</nav>
				</div>
			</section>
		</>
	);
};
