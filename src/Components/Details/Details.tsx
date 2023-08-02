import React, {useContext} from 'react';
import './details.scss';
import MainContext from '../../Context/MainContext';
import dataArr from '../../data/dataArr';

function Details() {
	const {openedVeg} = useContext(MainContext);
	const currentVeg = dataArr[openedVeg];
	const images = currentVeg.images;
	return (
		<div className='details-container'>
			<div className='images-container'>
				{images.map((img, id) => (
					<img
						key={id}
						src={img}
						alt={`Picture of ${currentVeg.name}`}
					/>
				))}
			</div>
			<div className='desc'>
				<h1>{currentVeg.name}</h1>
				<h2>{currentVeg.type}</h2>
				<p>{currentVeg.desc}</p>
			</div>
		</div>
	);
}

export default Details;
