import {useState} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import MainContext from './Context/MainContext';
import Details from './Components/Details/Details';

function App() {
	const [openedVeg, setOpenedVeg] = useState<null | {opened: number}>(null); // Define the type explicitly
	const states = {openedVeg, setOpenedVeg};

	return <MainContext.Provider value={states}>{openedVeg !== null ? <Details /> : <Home />}</MainContext.Provider>;
}

export default App;
