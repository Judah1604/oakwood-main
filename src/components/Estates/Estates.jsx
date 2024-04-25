import React from "react";
import EstateComponent from "./EstateComponent";
import "./styles/styles.css";

function Estates() {
	return (
		<div className="container-fluid">
			<h1 className="text-center my-4">
				<span>Our Estates</span>
			</h1>
			<div className="estates">
				<EstateComponent
					name={"The Maldives"}
					image={"maldives"}
					location={"Behind Shoprite"}
					sqms={["300SQM", "500SQM"]}
					title={"Certificate of Occupancy"}
					payments={[
						"Commercial Plot - 40,000 Per square meter",
						"Residential Plot - 40,000 Per square meter",
					]}
					landmarks={
						"Lekki Conservation Centre, Abraham Adesanya Estate, Novare Mall (Shoprite), Atican Beach Resort,Elegushi Beach, Lufasi Nature Park, Nike Art Gallery, Circle Mall, Orchid Hotels, Skymall, Sangotedo Market, Ajah Market"
					}
				/>
				<EstateComponent
					name={"Midsprings Park"}
					image={"midsprings-park"}
					location={"Imokun Epe"}
					sqms={["250SQM", "500SQM"]}
					title={"Survey and Deeds Of Ass."}
					payments={[
						"Residential - 3,000,000.00 per plot",
						"Initial Deposit - 750,000.00",
					]}
					landmarks={
						"Epe Resort and Spa, Epe Recreation Center, Epe Mangroves, Lekki Conservation Centre, Atlantic Hall Epe, Eleko Beach"
					}
				/>
				<EstateComponent
					name={"Oakwood Gardens II"}
					image={"gardens2"}
					location={"Behind Beechwood, Ibeju Lekki, Lagos"}
					sqms={["250SQM", "500SQM"]}
					title={"Certificate of Occupancy"}
					payments={[
						"Residential - 15,000,000.00",
						"Initial Deposit - 5,000,000.00",
					]}
					landmarks={
						"Lekki Conservation Centre, Abraham Adesanya Estate, Novare Mall (Shoprite), Atican Beach Resort,Elegushi Beach, Lufasi Nature Park, Nike Art Gallery, Circle Mall, Orchid Hotels, Skymall, Sangotedo Market, Ajah Market"
					}
				/>
				<EstateComponent
					name={"Oakwood Amazon"}
					image={"amazon"}
					location={"Ketu, Epe Lagos."}
					sqms={["250SQM", "500SQM"]}
					title={"Certificate of Occupancy"}
					payments={[
						"Residential - 8,000,000.00",
						"Initial Deposit - 2,800,000.00",
					]}
					landmarks={
						"Epe Resort and Spa, Epe Recreation Center, Epe Mangroves, Lekki Conservation Centre, Atlantic Hall Epe, Eleko Beach"
					}
				/>
				<EstateComponent
					name={"Cascade Voyage 2"}
					image={"cascade"}
					location={"Igbonla, Epe"}
					sqms={["500SQM", "1000SQM"]}
					title={"Deeds and Registered Survey"}
					payments={[
						"Residential - N1,500,000.00",
						"Commercial - 3,000,000.00",
					]}
					landmarks={
						"Epe Resort and Spa, Epe Recreation Center, Epe Mangroves, Lekki Conservation Centre, Atlantic Hall Epe, Eleko Beach"
					}
				/>
				<EstateComponent
					name={"Oakwood Gardens"}
					image={"gardens"}
					location={"Orofun, Ibeju Lekki"}
					sqms={["250SQM", "500SQM"]}
					title={"Deeds and Registered Survey"}
					payments={[
						"Residential - N1,500,000.00",
						"Commercial - 3,000,000.00",
					]}
					landmarks={
						"Epe Resort and Spa, Epe Recreation Center, Epe Mangroves, Lekki Conservation Centre, Atlantic Hall Epe, Eleko Beach"
					}
				/>
				<EstateComponent
					name={"Skyfall by Oakwood"}
					image={"skyfall"}
					location={"Eko Akete, Abijo"}
					sqms={["250SQM", "500SQM"]}
					title={"Certificate of Occupancy"}
					payments={["N36,000 per square meter"]}
					landmarks={
						"Lekki Conservation Center, Abraham Adesanya Estate, Novare Mall (Shoprite), Atican Beach Resort, Elegushi Beach, Lufasi Nature Park, Nike Art Gallery, Circle Mall, Orchid Hotels, Skymall, Sangotedo Market, Ajah Market."
					}
				/>
				<EstateComponent
					name={"Midsprings Court"}
					image={"midsprings-court"}
					location={"Alatise"}
					sqms={["250SQM", "500SQM"]}
					title={"Certificate of Occupancy"}
					payments={[
						"500SQM - 45,000,000.00",
						"Initial Deposit - N900,000.00",
					]}
					landmarks={
						"Lekki Conservation Center, Abraham Adesanya Estate, Novare Mall (Shoprite), Atican Beach Resort, Elegushi Beach, Lufasi Nature Park, Nike Art Gallery, Circle Mall, Orchid Hotels, Skymall, Sangotedo Market, Ajah Market."
					}
				/>
				<EstateComponent
					name={"Umbrella City"}
					image={"umbrella"}
					location={"Araromi, Ibeju Lekki"}
					sqms={["250SQM", "500SQM"]}
					title={"Village Excission"}
					payments={[
						"500SQM - 5,000,000.00",
						"Initial Deposit - N1,000,000.00",
					]}
					landmarks={
						"Epe Resort and Spa, Epe Recreation Center, Epe Mangroves, Lekki Conservation Centre, Atlantic Hall Epe, Eleko Beach"
					}
				/>
			</div>
		</div>
	);
}

export default Estates;
