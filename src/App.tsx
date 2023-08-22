import {useState} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import MainContext from './Context/MainContext';
import Details from './Components/Details/Details';
import {Veg} from './Context/MainContext';

function App() {
	const [openedVeg, setOpenedVeg] = useState<null | number>(null);
	const [vegetablesArr, setVegetablesArr] = useState<Veg[]>([]);

	return <MainContext.Provider value={{openedVeg, setOpenedVeg, vegetablesArr, setVegetablesArr}}>{openedVeg !== null ? <Details /> : <Home />}</MainContext.Provider>;
}

export default App;
