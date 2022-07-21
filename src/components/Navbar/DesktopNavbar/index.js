import {topMenu} from "./../../../data/navbar/topMenu";

import {Item} from "../Item";

export const DesktopNavbar = () => {
	return (
		<nav>
			<ul className="nav-btn-container">
				{topMenu.map((item, i) => {
					return <Item item={item} key={i} />;
				})}
			</ul>
		</nav>
	);
};
