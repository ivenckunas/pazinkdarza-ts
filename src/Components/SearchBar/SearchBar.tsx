import React, {useContext, useRef, useState, useEffect} from 'react';
import dataArr from '../../data/dataArr';
import './searchBar.scss';
import MainContext from '../../Context/MainContext';

function SearchBar() {
	const {setOpenedVeg, openedVeg, vegetablesArr, setVegetablesArr} = useContext(MainContext);

	const searchPhrase = useRef();
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		filterVegetables(inputValue); // Call the filtering function whenever the input value changes
	}, [inputValue]);

	const filterVegetables = (value) => {
		const filteredArr = dataArr.filter((el) => {
			// Use includes instead of strict comparison for case-insensitive filtering
			return el.name.toLowerCase().includes(value.toLowerCase());
		});

		setVegetablesArr(filteredArr);
	};

	return (
		<div>
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
