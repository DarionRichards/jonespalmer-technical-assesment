import Media from "react-media";

import JonesPalmerLogo from "../../assets/JP-LOGO.jpg";
import {DesktopNavbar} from "./DesktopNavbar";

import {MobileNavbar} from "./MobileNavbar/index";

export const Navbar = () => {
	return (
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
				<Media
					query="(min-width: 972px)"
					render={() => {
						return <DesktopNavbar />;
					}}
				/>
				<Media
					query="(max-width: 972px)"
					render={() => {
						return <MobileNavbar />;
					}}
				/>
			</section>
		</section>
	);
};
