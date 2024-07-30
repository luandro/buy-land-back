import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Frameworks from "./components/Frameworks";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Participation from "./components/Participation";
import Roadmap from "./components/Roadmap";
import VideoSection from "./components/VideoSection";

function App() {
	return (
		<div className="App">
			<Header />
			<Intro />
			<VideoSection />
			<Frameworks />
			<Roadmap />
			<Participation />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
