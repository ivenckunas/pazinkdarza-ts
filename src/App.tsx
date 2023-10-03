import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import MainContext from './Context/MainContext';
import {Veg} from './Context/MainContext';
import Details from './Components/Details/Details';
import Favorites from './Components/Details/Favorites';

function App() {
	const [openedVeg, setOpenedVeg] = useState<null | number>(null);
	const [vegetablesArr, setVegetablesArr] = useState<Veg[]>([]);

	return (
		<MainContext.Provider value={{openedVeg, setOpenedVeg, vegetablesArr, setVegetablesArr}}>
			<BrowserRouter>
				<Routes>
					<Route
						element={<Home />}
						path='/'
					/>
					<Route
						element={<Details />}
						path={`/darzoves/:id`}
					/>
					<Route
						element={<Favorites />}
						path={`/pazymetos`}
					/>
				</Routes>
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;
