import "./styles/static.css";
import { useLocation } from "react-router-dom";

function Navbar() {
	const { pathname } = useLocation();

	return (
		<div className="navbar navbar-expand-lg p-3 bg-dark" id="navbar">
			<div className="container-fluid">
				<a href="/" className="navbar-brand">
					<img
						src="/public/Logo.png"
						alt="Oakwood Group"
						className="logo"
					/>
				</a>
				<Nav />
				<div className="menu-icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
