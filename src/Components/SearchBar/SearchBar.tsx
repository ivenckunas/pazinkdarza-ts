import {useState, useEffect, useContext} from 'react';
import './searchBar.scss';
import dataArr from '../../data/dataArr';
import MainContext from '../../Context/MainContext';

function SearchBar() {
	const [inputValue, setInputValue] = useState('');
	const context = useContext(MainContext);
	const {setVegetablesArr} = context || {};

	useEffect(() => {
		if (setVegetablesArr) {
			filterVegetables(inputValue);
		}
	}, [inputValue, setVegetablesArr]);

	const filterVegetables = (value: string) => {
		const filteredArr = dataArr.filter((el) => {
			return el.name.toLowerCase().includes(value.toLowerCase());
		});

		if (setVegetablesArr) {
			setVegetablesArr(filteredArr);
		}
	};

	return (
		<div className='search-container'>
			<label>Nori greičiau? Ieškok:</label>
			<input
				type='text'
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
		</div>
	);
}

export default SearchBar;
