import { useState } from "react";
import Menu from "./Menu";
import Nav from "./Nav";
import "./styles/static.css";
import { useLocation } from "react-router-dom";

function Navbar() {
	const { pathname } = useLocation();
    const [isActive, setIsActive] = useState(false)

	return (
		<>
			<div className="navbar navbar-expand-lg p-3 bg-dark" id="navbar">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						<img
							src="/Logo.png"
							alt="Oakwood Group"
							className="logo"
						/>
					</a>
					<Nav pathname={pathname} />
					<div className="menu-icon" onClick={() => setIsActive(true)}>
						<i class="fa-solid fa-bars"></i>
					</div>
				</div>
			</div>
			<Menu pathname={pathname} status={isActive} setStatus={setIsActive} />
		</>
	);
}

export default Navbar;
