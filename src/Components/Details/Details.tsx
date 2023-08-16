import {useContext, useState, useEffect} from 'react';
import './details.scss';
import MainContext from '../../Context/MainContext';
import dataArr from '../../data/dataArr';
import Footer from '../Footer/Footer';
import AccordionComp from '../Accordion/AccordionComp';

function Details() {
	const {openedVeg, setOpenedVeg} = useContext(MainContext);
	const [currentVeg, setCurrentVeg] = useState(openedVeg);

	const [nextVeg, setNextVeg] = useState(null);
	const [prevVeg, setPrevVeg] = useState(null);

	useEffect(() => {
		const currentVegIndex = dataArr.findIndex((veg) => veg.name === openedVeg.name);

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
		<>
			<header>
				<h1>{currentVeg.name}</h1>
				<img
					src={currentVeg.pixelImage}
					alt={`Image of ${currentVeg.name}`}
				/>
			</header>
			<div className='details-container'>
				<div className='images-container'>
					{images.map((img: string, id: number) => (
						<img
							key={id}
							src={img}
							alt={`Picture of ${currentVeg.name}`}
						/>
					))}
				</div>
				<AccordionComp />
				<div className='buttons'>
					{isFirstItem ? <button disabled>Atgal</button> : <button onClick={handlePrev}>Atgal</button>}
					{isLastItem ? <button disabled>Pirmyn</button> : <button onClick={handleNext}>Pirmyn</button>}
					<button onClick={backToHomePage}>Grizti</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Details;
