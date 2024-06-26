import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Estates from "./components/Estates/Estates";
import Gallery from "./components/Estates/Gallery";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import "./styles/base/common.css";
import BookInspection from "./components/BookInspection/BookInspection";
import About from "./components/About/About";
import MeetOurTeam from "./components/About/MeetOurTeam";
import CEO from "./components/About/CEO";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Consultant from "./components/Consultant/Consultant";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/estates" Component={Estates} />
					<Route path="/estates/gallery" Component={Gallery} />
					<Route path="/about" Component={About} />
					<Route
						path="/about/meet-our-team"
						Component={MeetOurTeam}
					/>
					<Route path="/about/ceo" Component={CEO} />
					<Route path="/services" Component={Services} />
					<Route path="/contact" Component={Contact} />
					<Route
						path="/book-an-inspection"
						Component={BookInspection}
					/>
					<Route
						path="/become-a-consultant"
						Component={Consultant}
					/>
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
