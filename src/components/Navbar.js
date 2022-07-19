import JonesPalmerLogo from "../assets/JP-LOGO.jpg";

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
							<li>
								<a href="/" title="About">
									About Us
								</a>
							</li>
							<li>
								<a href="/" title="Services">
									Services
								</a>
							</li>
							<li>
								<a href="/" title="Our Work">
									Our Work
								</a>
							</li>
							<li>
								<a href="/" title="Thinking">
									Thinking
								</a>
							</li>
							<li>
								<a href="/" title="Careers">
									Careers
								</a>
							</li>
							<li className="nav-btn-git">
								<a href="/" title="Get in touch">
									Get In Touch
								</a>
							</li>
						</ul>
					</nav>
				</section>
			</section>
		</>
	);
};
