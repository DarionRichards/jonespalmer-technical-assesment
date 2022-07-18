import "./reset.css";
import "./styles.css";

import {Navbar} from "./components/Navbar";

export const App = () => {
	return (
		<div className="wrapper">
			<header>
				<Navbar />
			</header>
			<main>
				<h1>Hello from React</h1>
			</main>
		</div>
	);
};
