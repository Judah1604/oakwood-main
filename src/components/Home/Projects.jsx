import React from "react";

function Projects() {
	return (
		<div className="projects container">
			<h1 className="my-3 text-center">
				Our <span>Projects</span>
			</h1>
			<div className="videos row">
				<iframe
					width="726"
					height="408"
					className="col-md-6"
					src="https://www.youtube.com/embed/R62P2m6XLBo"
					title="Oakwood Gardens Phase II"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="726"
					height="408"
					className="col-md-6"
					src="https://www.youtube.com/embed/43PHPKfnPbY"
					title="OAKWOOD GARDENS PHASE 2"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="726"
					height="408"
					className="col-md-6"
					src="https://www.youtube.com/embed/z0vGP8qIEyg"
					title="SKYFALL BY  OAKWOOD"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export default Projects;
