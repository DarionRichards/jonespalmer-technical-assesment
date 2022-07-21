import JonesPalmerLogo from "../../assets/JP-LOGO.jpg";
import {topMenu} from "../../data/navbar/topMenu";
import {Item} from "./Item";

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
								return <Item item={item} key={i} />;
							})}
						</ul>
					</nav>
				</section>
			</section>
		</>
	);
};
