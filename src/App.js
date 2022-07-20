import "./reset.css";
import "./styles.css";

import {Navbar} from "./components/Navbar";
import {PageMiddle} from "./components/PageMiddle";
import {PageBottom} from "./components/PageBottom";

export const App = () => {
	return (
		<div className="wrapper">
			<header>
				<Navbar />
			</header>
			<main>
				<PageMiddle />
				<PageBottom />
			</main>
		</div>
	);
};
