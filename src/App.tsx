import {useState} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import MainContext from './Context/MainContext';
import Details from './Components/Details/Details';

function App() {
	const [openedVeg, setOpenedVeg] = useState<null | number>(null);
	const [vegetablesArr, setVegetablesArr] = useState<[]>([]);
	const states = {openedVeg, setOpenedVeg, vegetablesArr, setVegetablesArr};

	return (
		<MainContext.Provider value={states}>
			<main>{openedVeg !== null ? <Details /> : <Home />}</main>
		</MainContext.Provider>
	);
}

export default App;
