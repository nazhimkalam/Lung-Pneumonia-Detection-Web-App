import './App.css';
import About from './components/About/About';
import Detection from './components/Detection/Detection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="app">
			<Header />

			<div className="app__body">
				<div className="app__about">
					<About />
					<div className="app__aboutImages">
						<img src="https://images.indianexpress.com/2020/12/pneumonia_1200_lungs_getty.jpg" alt="" />
						<img src="https://nortonhealthcare.com/wp-content/uploads/can-you-die-from-pneumonia-onr.jpg" alt="" />
					</div>
				</div>

				<Detection />
			</div>

			<Footer />
		</div>
	);
}

export default App;
