import React from 'react'

function Nav() {
  return (
		<div className="nav align-items-center">
			<a
				href="/"
				className={pathname === "/" ? "nav-link active" : "nav-link"}
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
							href="/about/meet-our-team"
						>
							Meet our team
						</a>
					</div>
				</div>
			</div>
			<a
				href="/services"
				className={
					pathname === "/services" ? "nav-link active" : "nav-link"
				}
			>
				Our Services
			</a>
			<a
				href="/estates"
				className={
					pathname === "/estates" ? "nav-link active" : "nav-link"
				}
			>
				Our Estates
			</a>
			<a
				href="/contact"
				className={
					pathname === "/contact" ? "nav-link active" : "nav-link"
				}
			>
				Contact
			</a>
			<a href="/book-an-inspection" className="btn btn-orange icon-left">
				<i className="fa-solid fa-binoculars"></i>
				Book an Inspection
			</a>
		</div>
  );
}

export default Nav