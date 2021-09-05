import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

const Header = () => {
	return (
		<header className="App-header">
			<h3 className="headerText">Clock 25 + 5</h3>
			<h2 className="">
				<a
					className="App-link"
					href="https://www.freecodecamp.org/huncage"
				>
					freeCodeCamp
					<FaFreeCodeCamp className="iconFCC" />
				</a>
			</h2>
		</header>
	);
};

export default Header;