import {useContext, useState, useEffect} from 'react';
import './searchBar.scss';
import dataArr from '../../data/dataArr';
import MainContext from '../../Context/MainContext';

function SearchBar() {
	const {setVegetablesArr} = useContext(MainContext);

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		filterVegetables(inputValue);
	}, [inputValue]);

	const filterVegetables = (value: string) => {
		const filteredArr = dataArr.filter((el) => {
			return el.name.toLowerCase().includes(value.toLowerCase());
		});

		setVegetablesArr(filteredArr);
	};

	return (
		<div className='search-container'>
			<div className='label'>Nori greiciau? Ieskok:</div>
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
