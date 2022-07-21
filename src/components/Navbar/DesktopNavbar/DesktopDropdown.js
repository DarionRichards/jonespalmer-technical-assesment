export const DesktopDropdown = ({subMenus, isOpen, setIsOpen}) => {
	return (
		<ul
			className="nav-dropdown-content"
			style={{display: isOpen ? "block" : "none"}}
			onMouseLeave={() => {
				setIsOpen(false);
			}}
		>
			{subMenus.map((item, i) => {
				return (
					<li key={i} className="text">
						<a href={item.href} title={item.title}>
							{item.title}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
