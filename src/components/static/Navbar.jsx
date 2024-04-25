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
				<div className="nav align-items-center">
					<a
						href="/"
						className={
							pathname === "/" ? "nav-link active" : "nav-link"
						}
					>
						Home
					</a>
					<div className="nav-item dropdown">
						<a
							href="#"
							className={
								pathname.includes("/about")
									? "nav-link active"
									: "nav-link"
							}
							data-bs-toggle="dropdown"
						>
							About
							<i class="fa-solid fa-chevron-down"></i>
						</a>
						<div className="dropdown-menu dropdown-menu-dark">
							<div>
								<a
									href="/about"
									className={
										pathname === "/about"
											? "nav-link active"
											: "nav-link"
									}
								>
									About us
								</a>
							</div>
							<div>
								<a
									className={
										pathname === "/about/meet-our-team"
											? "nav-link active"
											: "nav-link"
									}
									href="/meet-our-team"
								>
									Meet our team
								</a>
							</div>
						</div>
					</div>
					<a
						href="/services"
						className={
							pathname === "/services"
								? "nav-link active"
								: "nav-link"
						}
					>
						Our Services
					</a>
					<a
						href="/estates"
						className={
							pathname === "/estates"
								? "nav-link active"
								: "nav-link"
						}
					>
						Our Estates
					</a>
					<a
						href="/contact"
						className={
							pathname === "/contact"
								? "nav-link active"
								: "nav-link"
						}
					>
						Contact
					</a>
					<a
						href="/book-an-inspection"
						className="btn btn-orange icon-left"
					>
						<i className="fa-solid fa-binoculars"></i>
						Book an Inspection
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
