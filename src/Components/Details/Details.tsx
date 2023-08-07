import {useContext, useState, useEffect} from 'react';
import './details.scss';
import MainContext from '../../Context/MainContext';
import dataArr from '../../data/dataArr';

function Details() {
	const {openedVeg, setOpenedVeg} = useContext(MainContext);

	const [currentVeg, setCurrentVeg] = useState(openedVeg);
	const [nextVeg, setNextVeg] = useState();
	const [prevVeg, setPrevVeg] = useState();

	useEffect(() => {
		const currentVegIndex = dataArr.findIndex((veg) => veg.name === openedVeg.name);
		console.log('currentVegIndex ===', currentVegIndex);
		setCurrentVeg(openedVeg);
		setNextVeg(dataArr[currentVegIndex + 1]);
		setPrevVeg(dataArr[currentVegIndex - 1]);
	}, [openedVeg]);

	const handleNext = () => {
		setOpenedVeg(nextVeg);
	};

	const handlePrev = () => {
		setOpenedVeg(prevVeg);
	};

	const backToHomePage = () => {
		setOpenedVeg(null);
	};

	const images = currentVeg.images;
	const isFirstItem = !prevVeg;
	const isLastItem = !nextVeg;

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
				{isFirstItem ? <button disabled>Atgal</button> : <button onClick={handlePrev}>Atgal</button>}
				{isLastItem ? <button disabled>Pirmyn</button> : <button onClick={handleNext}>Pirmyn</button>}
				<button onClick={backToHomePage}>Grizti</button>
			</div>
		</div>
	);
}

export default Details;
