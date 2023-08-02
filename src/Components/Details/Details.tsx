import React, {useContext, useState, useEffect} from 'react';
import './details.scss';
import MainContext from '../../Context/MainContext';
import dataArr from '../../data/dataArr';

function Details() {
	const {openedVeg, setOpenedVeg} = useContext(MainContext);

	const [currentVeg, setCurrentVeg] = useState(dataArr[openedVeg]);
	const [nextVeg, setNextVeg] = useState(null);
	const [prevVeg, setPrevVeg] = useState(null);

	useEffect(() => {
		setCurrentVeg(dataArr[openedVeg]);
		setNextVeg(dataArr[openedVeg + 1]);
		setPrevVeg(dataArr[openedVeg - 1]);
	}, [openedVeg]);

	const handleNext = () => {
		setOpenedVeg(openedVeg + 1);
	};

	const handlePrev = () => {
		setOpenedVeg(openedVeg - 1);
	};

	const backToHomePage = () => {
		setOpenedVeg(null);
	};

	const images = currentVeg.images;
	const isFirstItem = openedVeg === 0;
	const isLastItem = openedVeg === dataArr.length - 1;
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
			<div className='buttons'>
				{isFirstItem ? <button disabled>Atgal</button> : <button onClick={() => handlePrev()}>Atgal</button>}
				{isLastItem ? <button disabled>Pirmyn</button> : <button onClick={() => handleNext()}>Pirmyn</button>}
				<button onClick={() => backToHomePage()}>Grizti</button>
			</div>
		</div>
	);
}

export default Details;
