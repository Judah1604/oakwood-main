import './styles/home.css';
import HeroSection from "./HeroSection";
import Objectives from "./Objectives";
import Estates from './Estates';
import Projects from './Projects';

function Home() {
	return (
		<>
			<HeroSection />
			<Objectives />
            <Estates />
            <Projects />
		</>
	);
}

export default Home;
