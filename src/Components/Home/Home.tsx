import './home.scss';
import VegGrid from '../VegGrid/VegGrid';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import {useContext} from 'react';
import MainContext from '../../Context/MainContext';

function Home() {
	const {openedVeg} = useContext(MainContext);

	return (
		<div className={openedVeg === null ? 'container container-bg' : 'container'}>
			<SearchBar />
			<VegGrid />
			<Footer />
		</div>
	);
}

export default Home;
