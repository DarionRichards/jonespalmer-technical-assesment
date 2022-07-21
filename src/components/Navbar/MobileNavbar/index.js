import {useState} from "react";
import {MobileMenu} from "./MobileMenu";

export const MobileNavbar = () => {
	let [isActive, setIsActive] = useState(false);

	const handleOnClick = () => {
		isActive ? setIsActive(false) : setIsActive(true);
	};

	return (
		<>
			<button className="hamburger-nav" type="button" onClick={handleOnClick}>
				<div className="hamburger-menu" aria-haspopup="menu"></div>
			</button>
			{isActive ? <MobileMenu /> : null}
		</>
	);
};
