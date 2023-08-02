import {useContext, useEffect} from 'react';
import './vegGrid.scss';
import dataArr from '../../data/dataArr';
import MainContext from '../../Context/MainContext';
import {Tooltip} from 'react-tooltip';

function VegGrid() {
	const handleSingleVegClick = (id: number) => {
		setOpenedVeg(id);
	};

	useEffect(() => {
		setVegetablesArr(dataArr);
	}, []);

	const {setOpenedVeg, openedVeg, vegetablesArr, setVegetablesArr} = useContext(MainContext);

	return (
		<div className='grid-container'>
			{vegetablesArr.map((el, id) => (
				<div
					key={id}
					className='single-veg'
				>
					<Tooltip id='my-tooltip' />
					<img
						data-tooltip-id='my-tooltip'
						data-tooltip-content={el.name}
						onClick={() => handleSingleVegClick(id)}
						src={el.pixelImage}
						alt={`Picture of ${el.name}`}
					/>
				</div>
			))}
		</div>
	);
}

export default VegGrid;
