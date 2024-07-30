import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import VideoSection from "./components/VideoSection";
import Frameworks from "./components/Frameworks";
import Roadmap from "./components/Roadmap";
import Participation from "./components/Participation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
