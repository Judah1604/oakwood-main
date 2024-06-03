import ImgUnderlay from "../../utils/ImgUnderlay";
import Service from "./Service";
import "./styles/styles.css";

function Services() {
	return (
		<>
			<ImgUnderlay title={"Our Services"} />
			<div className="services-page container mt-5">
				<Service
					img={"property"}
					name={"Property"}
					highlight={"Development"}
					text={
						"We are the greatest source for reasonably priced, quickly developing land. Our goal is to provide the highest caliber of property development services to you. We provide property development services by buying raw land, estate development, joint rentals, building homes, planning, and renovating existing structures."
					}
				/>
				<Service
					img={"investment"}
					name={"Real Estate"}
					highlight={"Investment"}
					text={
						"Purchasing land and housing properties, land banking, cooperate affairs, land crowd funding scheme, real estate trading, property investment advisory management and consultancy, and property/facility management are all areas in which we can assist you. At now, we are engaged in the purchase, sale, rental,or leasing of multiple properties and structures, and we think we are your greatest choice."
					}
				/>
				<Service
					img={"management"}
					name={"Real Estate"}
					highlight={"Management"}
					text={
						"We recognize how important it is to have your property watched over and maintained. We accept responsibility for the state of the properties entrusted to our care. We are expert in leasing and letting, shortlet, facility management and rentals."
					}
				/>
				<Service
					img={"consultancy"}
					name={"Real Estate"}
					highlight={"Consultancy"}
					text={
						"Being one of the most well-known and well-respected real estate firm in the nation. Our team of certified and experienced valuers, estate surveyors, legal personnel and real estate professionals manages your business in both residential and commercial projects, making us one of the most sought-after and highly regarded real estate consultancies in this region of the world"
					}
				/>
			</div>
		</>
	);
}

export default Services;
