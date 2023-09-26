import {useContext, useState, useEffect} from 'react';
import './details.scss';
import MainContext, {Veg} from '../../Context/MainContext';
import dataArr from '../../data/dataArr';
import Footer from '../Footer/Footer';
import AccordionComp from '../Accordion/AccordionComp';

function Details() {
	const context = useContext(MainContext);
	const {openedVeg, setOpenedVeg} = context || {};

	const [currentVeg, setCurrentVeg] = useState<Veg | undefined>(undefined);
	const [nextVeg, setNextVeg] = useState<Veg | null>(null);
	const [prevVeg, setPrevVeg] = useState<Veg | null>(null);
	const openedVegObject = dataArr.find((veg) => veg.id === openedVeg);

	useEffect(() => {
		const currentVegIndex = dataArr.findIndex((veg) => veg.id === openedVeg);
		setCurrentVeg(dataArr[currentVegIndex]);
		setNextVeg(dataArr[currentVegIndex + 1]);
		setPrevVeg(dataArr[currentVegIndex - 1]);
	}, [openedVeg]);

	const images = openedVegObject ? openedVegObject.images : [];
	const isFirstItem = openedVegObject === dataArr[0];
	const isLastItem = openedVegObject === dataArr[dataArr.length - 1];

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // This smooth scrolling is optional
		});
	};

	const handleNext = () => {
		if (setOpenedVeg && nextVeg) {
			setOpenedVeg(nextVeg.id);
			scrollToTop();
		}
	};

	const handlePrev = () => {
		if (setOpenedVeg && prevVeg) {
			setOpenedVeg(prevVeg.id);
			scrollToTop();
		}
	};

	const backToHomePage = () => {
		if (setOpenedVeg) {
			setOpenedVeg(null);
			scrollToTop();
		}
	};

	return (
		<>
			<header>
				<>
					<h1>{openedVegObject?.name}</h1>
					<img
						src={openedVegObject?.pixelImage}
						alt={`Image of ${openedVegObject?.name}`}
					/>
				</>
			</header>
			<div className='details-container'>
				<AccordionComp />
				<div className='images-container'>
					{images.map((img: string, id: number) => (
						<img
							key={id}
							src={img}
							alt={`Picture of ${currentVeg?.name || ''}`}
						/>
					))}
				</div>
				<div className='buttons'>
					<button
						disabled={isFirstItem}
						onClick={handlePrev}
					>
						Atgal
					</button>
					<button
						disabled={isLastItem}
						onClick={handleNext}
					>
						Pirmyn
					</button>
					<button onClick={backToHomePage}>Grįžti</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Details;
