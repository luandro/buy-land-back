import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Frameworks from "./components/Frameworks";
import Header from "./components/Header";
import How from "./components/How";
import Intro from "./components/Intro";
import LangButton from "./components/LangButton";
import Participation from "./components/Participation";
import Roadmap from "./components/Roadmap";
import VideoSection from "./components/VideoSection";
import Why from "./components/Why";

function App() {
	return (
		<div className="App">
			<LangButton />
			<Header />
			<Intro />
			<How />
			<VideoSection />
			<Why />
			<Frameworks />
			<Roadmap />
			<Participation />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
