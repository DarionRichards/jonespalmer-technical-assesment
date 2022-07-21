import {useState} from "react";
import {DesktopDropdown} from "./DesktopNavbar/DesktopDropdown";

export const Item = ({item, key}) => {
	let [isOpen, setIsOpen] = useState(false);

	const applyClassName = (title) => {
		if (title === "Get In Touch") {
			return "nav-btn-git";
		} else if (title === "Services" || title === "Careers") {
			return "nav-dropdown";
		}
	};

	return (
		<li
			key={key}
			className={applyClassName(item.title)}
			onMouseOver={(event) => {
				setIsOpen(true);
			}}
			onMouseLeave={(event) => {
				setIsOpen(false);
			}}
		>
			{item.subMenu ? (
				<>
					<button type="button" aria-haspopup="menu">
						{item.title}
					</button>
					<DesktopDropdown
						subMenus={item.subMenu}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				</>
			) : (
				<a href={item.href} title={item.title}>
					{item.title}
				</a>
			)}
		</li>
	);
};
