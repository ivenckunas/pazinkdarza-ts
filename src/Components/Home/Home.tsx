import './home.scss';
import VegGrid from '../VegGrid/VegGrid';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import About from '../About/About';

function Home() {
	return (
		<div className='container'>
			<About />
			<SearchBar />
			<VegGrid />
			{/* <Blog /> */}
			<Footer />
		</div>
	);
}

export default Home;
