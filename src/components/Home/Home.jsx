import './styles/home.css';
import HeroSection from "./HeroSection";
import Objectives from "./Objectives";
import Estates from './Estates';
import Projects from './Projects';
import EstatesModal from './EstatesModal';

function Home() {
	return (
		<>
			<HeroSection />
			<Objectives />
            <Estates />
            <Projects />
            <EstatesModal />
		</>
	);
}

export default Home;
