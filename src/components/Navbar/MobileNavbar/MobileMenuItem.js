import {useState} from "react";
import {MobileDropdown} from "./MobileDropdown";

export const MobileMenuItem = ({item}) => {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<li className="mobile-item">
			{item.subMenu ? (
				<>
					<button
						type="button"
						aria-haspopup="menu"
						onMouseOver={() => {
							setIsOpen(true);
						}}
					>
						{item.title}
					</button>
					<MobileDropdown
						subMenus={item.subMenu}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				</>
			) : (
				<a href={item.href}>{item.title}</a>
			)}
		</li>
	);
};
