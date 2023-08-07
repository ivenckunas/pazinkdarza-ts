import {useContext, useEffect} from 'react';
import './vegGrid.scss';
import dataArr from '../../data/dataArr';
import MainContext from '../../Context/MainContext';
import {Tooltip} from 'react-tooltip';

function VegGrid() {
	const handleSingleVegClick = (name: string) => {
		const singleVeg = dataArr.find((el) => el.name === name);
		setOpenedVeg(singleVeg);
	};

	useEffect(() => {
		setVegetablesArr(dataArr);
	}, []);

	const {setOpenedVeg, openedVeg, vegetablesArr, setVegetablesArr} = useContext(MainContext);

	return (
		<div className='grid-container'>
			{vegetablesArr.map((el, id: number) => (
				<div
					key={id}
					className='single-veg'
				>
					<Tooltip id='my-tooltip' />
					<img
						data-tooltip-id='my-tooltip'
						data-tooltip-content={el.name}
						onClick={() => handleSingleVegClick(el.name)}
						src={el.pixelImage}
						alt={`Picture of ${el.name}`}
					/>
				</div>
			))}
		</div>
	);
}

export default VegGrid;
