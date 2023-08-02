import './home.scss';
import VegGrid from '../VegGrid/VegGrid';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';

function Home() {
	return (
		<div className='container'>
			<SearchBar />
			<VegGrid />
			<Footer />
		</div>
	);
}

export default Home;
