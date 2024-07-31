import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Frameworks from "./components/Frameworks";
import Header from "./components/Header";
import How from "./components/How";
import Why from "./components/Why";

function App() {
	return (
		<div className="App">
			<Header />
			<Intro />
			<VideoSection />
			<Why />
			<How />
			<Roadmap />
			<Participation />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
