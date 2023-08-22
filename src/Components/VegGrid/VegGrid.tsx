import {useContext} from 'react';
import './vegGrid.scss';
import {Tooltip} from 'react-tooltip';
import MainContext, {Veg} from '../../Context/MainContext'; // Import Veg type from MainContext

function VegGrid() {
	const context = useContext(MainContext);
	const {setOpenedVeg, vegetablesArr} = context || {};

	const handleSingleVegClick = (name: string) => {
		const singleVeg = vegetablesArr?.find((el) => el.name === name);
		if (setOpenedVeg && singleVeg) {
			setOpenedVeg(singleVeg.id);
		}
	};

	return (
		<div className='grid-container'>
			{vegetablesArr &&
				vegetablesArr.map((el: Veg, id: number) => (
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
