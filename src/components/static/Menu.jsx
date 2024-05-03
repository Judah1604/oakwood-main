import React, { useState } from "react";
import Nav from "./Nav";

function Menu({ pathname, status, setStatus }) {

	return (
		<div className={`menu ${status ? "active" : ""}`}>
			<div className="closebtn" onClick={() => setStatus(false)}>
				<i class="fa-solid fa-xmark"></i>
			</div>
			<Nav pathname={pathname} />
		</div>
	);
}

export default Menu;
