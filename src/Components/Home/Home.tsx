import './home.scss';
import VegGrid from '../VegGrid/VegGrid';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Quiz from '../Quiz/Quiz';
import {questions} from '../Quiz/questions';

function Home() {
	return (
		<div className='container'>
			<About />
			<SearchBar />
			<VegGrid />
			<Quiz questionsArr={questions} />
			<Footer />
		</div>
	);
}

export default Home;
