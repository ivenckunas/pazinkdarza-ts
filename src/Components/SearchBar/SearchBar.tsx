import React, {useRef, useState} from 'react';
import './searchBar.scss';

function SearchBar() {
	const searchPhrase = useRef();
	const [inputValue, setInputValue] = useState('');
	const filterVegetables = () => {
		console.log(inputValue);
	};

	return (
		<div>
			<input
				type='text'
				onChange={(e) => {
					setInputValue(e.target.value);
					filterVegetables();
				}}
			/>
		</div>
	);
}

export default SearchBar;
