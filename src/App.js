import "./reset.css";
import "./styles.css";

import {Navbar} from "./components/Navbar";
import {PageMiddle} from "./components/PageMiddle";

export const App = () => {
	return (
		<div className="wrapper">
			<header>
				<Navbar />
			</header>
			<main>
				<PageMiddle />
			</main>
		</div>
	);
};
