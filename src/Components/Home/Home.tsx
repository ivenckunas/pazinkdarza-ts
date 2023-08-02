import './home.scss';
import VegGrid from '../VegGrid/VegGrid';
import SearchBar from '../SearchBar/SearchBar';

function Home() {
	return (
		<div className='home-container'>
			<SearchBar />
			<VegGrid />
		</div>
	);
}

export default Home;
