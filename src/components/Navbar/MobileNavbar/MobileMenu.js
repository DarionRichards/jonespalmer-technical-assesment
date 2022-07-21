import {topMenu} from "../../../data/navbar/topMenu";
import {MobileMenuItem} from "./MobileMenuItem";

export const MobileMenu = () => {
	return (
		<ul className="nav-btn-container mobile-menu">
			{topMenu.map((item) => {
				return <MobileMenuItem item={item} />;
			})}
		</ul>
	);
};
