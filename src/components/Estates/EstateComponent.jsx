import { motion } from 'framer-motion';


function EstateComponent({
	image,
	name,
	location,
	sqms,
	title,
	payments,
	landmarks,
}) {
	return (
		<motion.div className="estate container row" initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}}>
			<div className="col-md-5">
				<img
					src={"/estates/" + image + ".jpeg"}
					alt={name}
					className="img-fluid"
				/>
			</div>
			<div className="col-md-6 text">
				<h1>{name}</h1>
				<p>
					<h4 className="d-inline-block">Location: </h4> {location}
				</p>
				<div className="sqms mb-3">
					<h4>Available square meters</h4>
					{sqms.map((item, index) => (
						<p key={index} className="m-0">
							{item}
						</p>
					))}
				</div>
				<p>
					<h4 className="d-inline-block">Title: </h4> {title}
				</p>
				<div className="payments mb-3">
					<h4>Payments:</h4>
					{payments.map((item, index) => (
						<p key={index} className="m-0">
							{item}
						</p>
					))}
				</div>
				<h4>Landmarks</h4>
				<p>{landmarks}</p>
				<a
					href="/book-an-inspection"
					className="btn btn-orange icon-left"
				>
					<i className="fa-solid fa-binoculars"></i>
					Book an Inspection
				</a>
			</div>
		</motion.div>
	);
}

export default EstateComponent;
