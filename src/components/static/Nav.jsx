import React from "react";
import { Link } from "react-router-dom";

function Nav({ pathname }) {
	return (
		<div className="nav align-items-center">
			<Link
				className={pathname === "/" ? "nav-link active" : "nav-link"}
				to={"/"}
			>
				Home
			</Link>
			<div className="nav-item dropdown">
				<a
					className={
						pathname.includes("/about")
							? "nav-link active"
							: "nav-link"
					}
					href="#"
					data-bs-toggle="dropdown"
				>
					About
					<i class="fa-solid fa-chevron-down"></i>
				</a>

				<div className="dropdown-menu dropdown-menu-dark">
					<div>
						<Link
							className={
								pathname === "/about"
									? "nav-link active"
									: "nav-link"
							}
							to={"/about"}
						>
							About us
						</Link>
					</div>
					<div>
						<Link
							className={
								pathname === "/about/meet-our-team"
									? "nav-link active"
									: "nav-link"
							}
							to={"/about"}
						>
							Meet our team
						</Link>
					</div>
				</div>
			</div>
			<div className="nav-item dropdown">
				<a
					className={
						pathname.includes("/estates")
							? "nav-link active"
							: "nav-link"
					}
					href="#"
					data-bs-toggle="dropdown"
				>
					Our Estates
					<i class="fa-solid fa-chevron-down"></i>
				</a>
				<div className="dropdown-menu dropdown-menu-dark">
					<div>
						<Link
							className={
								pathname === "/estates"
									? "nav-link active"
									: "nav-link"
							}
							to={"/estates"}
							data-bs-toggle="dropdown"
						>
							Estates
						</Link>
					</div>
					<div>
						<Link
							className={
								pathname === "/estates/gallery"
									? "nav-link active"
									: "nav-link"
							}
							to={"/estates/gallery"}
						>
							Gallery
						</Link>
					</div>
				</div>
			</div>
			<Link
				className={
					pathname === "/services" ? "nav-link active" : "nav-link"
				}
				to={"/services"}
			>
				Our Services
			</Link>
			<Link
				className={
					pathname === "/contact" ? "nav-link active" : "nav-link"
				}
				to={"/contact"}
			>
				Contact
			</Link>
			<Link
				className="btn btn-orange icon-left"
				to={"/book-an-inspection"}
			>
				<i className="fa-solid fa-binoculars"></i>
				Book an Inspection
			</Link>
		</div>
	);
}

export default Nav;
