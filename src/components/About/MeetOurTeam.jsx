import React from "react";
import ImgUnderlay from "../../utils/ImgUnderlay";
import { Link } from "react-router-dom";

function MeetOurTeam() {
	return (
		<>
			<ImgUnderlay title={"Our Team"} />
			<div className="container-fluid meet-our-team my-4">
				<div className="container ceo row text-center">
					<img
						className="col-md-4 shadow"
						src="/images/team/boss passport2.jpg"
						alt="Kelvin Monday Udoh"
					/>
					<div className="text col-md-4">
						<h1 className="uppercase mb-3">Meet the Ceo</h1>
						<h1>
							<b>Kelvin Monday Udoh</b>
						</h1>
                        <Link className="btn btn-orange uppercase mt-3" to={"/about/ceo"}>Read More</Link>
					</div>
				</div>
				<div className="container-fluid members row">
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/rosemary.jpg"
							alt="IDAKWO ROSEMARY OJONE"
						/>
						<h3>
							<b>IDAKWO ROSEMARY OJONE</b>
						</h3>
						<h3>Manager</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/kayode.jpg"
							alt="AIYEOBASAN KAYODE ADETOLA"
						/>
						<h3>
							<b>AIYEOBASAN KAYODE ADETOLA</b>
						</h3>
						<h3>Accountant</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/olaide.jpg"
							alt="OLAIDE OLUWAYOMI-AJEWOLE"
						/>
						<h3>
							<b>OLAIDE OLUWAYOMI-AJEWOLE</b>
						</h3>
						<h3>General Counsel</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/zane.jpg"
							alt="MOSES MICHAEL O."
						/>
						<h3>
							<b>MOSES MICHAEL O.</b>
						</h3>
						<h3>IT Personnel/ Media</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/jummy.jpg"
							alt="Olusola Olajumoke M."
						/>
						<h3>
							<b>OLUSOLA OLAJUMOKE M.</b>
						</h3>
						<h3>Customer Service Representatives</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/tamara.jpg"
							alt="OLUWANIFEMI TAMARA BROWN"
						/>
						<h3>
							<b>OLUWANIFEMI TAMARA BROWN</b>
						</h3>
						<h3>Executive Assistant</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/justice.jpg"
							alt="IHEZUO JUSTICEMARY CHUKWUJEKWU"
						/>
						<h3>
							<b>IHEZUO JUSTICEMARY CHUKWUJEKWU</b>
						</h3>
						<h3>Operational Manager</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/fortune.jpg"
							alt="FORTUNE WOKO"
						/>
						<h3>
							<b>FORTUNE WOKO</b>
						</h3>
						<h3>Sales Executive</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/sunday.jpg"
							alt="ERNEST SUNDAY"
						/>
						<h3>
							<b>ERNEST SUNDAY</b>
						</h3>
						<h3>Chief Security Officer</h3>
					</div>
				</div>
			</div>
		</>
	);
}

export default MeetOurTeam;
