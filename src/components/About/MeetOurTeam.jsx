import React from "react";
import ImgUnderlay from "../../utils/ImgUnderlay";

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
						<a
							href="/about/ceo"
							className="btn btn-orange uppercase mt-3"
						>
							Read More
						</a>
					</div>
				</div>
				<div className="container-fluid members row">
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/rosemary.jpeg"
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
							src="/images/team/kayode.jpeg"
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
							src="/images/team/olaide.jpeg"
							alt="OLAIDE OLUWAYOMI-AJEWOLE"
						/>
						<h3>
							<b>OLAIDE OLUWAYOMI-AJEWOLE</b>
						</h3>
						<h3>Legal Practitioner</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/zane.jpeg"
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
							src="/images/team/jummy.jpeg"
							alt="Olusola Olajumoke M."
						/>
						<h3>
							<b>OLUSOLA OLAJUMOKE M.</b>
						</h3>
						<h3>Secretary</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/tamara.jpeg"
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
							src="/images/team/justice.jpeg"
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
							src="/images/team/fortune.jpeg"
							alt="FORTUNE WOKO"
						/>
						<h3>
							<b>FORTUNE WOKO</b>
						</h3>
						<h3>Sales Rep</h3>
					</div>
					<div className="member col-md-3">
						<img
							className="mb-3"
							src="/images/team/sunday.jpeg"
							alt="ERNEST SUNDAY"
						/>
						<h3>
							<b>ERNEST SUNDAY</b>
						</h3>
						<h3>C.S.O</h3>
					</div>
				</div>
			</div>
		</>
	);
}

export default MeetOurTeam;
