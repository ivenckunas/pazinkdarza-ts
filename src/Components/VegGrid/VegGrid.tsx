import React, {useContext} from 'react';
import './vegGrid.scss';
import dataArr from '../../data/dataArr';
import MainContext from '../../Context/MainContext';
import bg from '../../assets/images/bg.jpg';

function VegGrid() {
	const handleSingleVegClick = (id: number) => {
		setOpenedVeg(id);
	};

	const {setOpenedVeg, openedVeg} = useContext(MainContext);

	return (
		<div className='grid-container'>
			{dataArr.map((el, id) => (
				<div
					key={id}
					className='single-veg'
				>
					<img
						onClick={() => handleSingleVegClick(id)}
						src={el.pixelImage}
						alt=''
					/>
					<h2>{el.name}</h2>
				</div>
			))}
		</div>
	);
}

export default VegGrid;
