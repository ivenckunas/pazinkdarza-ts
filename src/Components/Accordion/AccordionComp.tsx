import React, {useContext, useEffect, useState} from 'react';
import MainContext from '../../Context/MainContext';
import './accordionComp.scss';
import dataArr from '../../data/dataArr';

function AccordionComp() {
	const {openedVeg, setOpenedVeg} = useContext(MainContext);
	const [selected, setSelected] = useState(null);
	const [opened, setOpened] = useState(true);

	const data = [
		{title: 'Dirva', content: openedVeg.soil},
		{title: 'Sėja', content: openedVeg.sowing},
		{title: 'Priežiūra', content: openedVeg.caring},
		{title: 'Derliaus nuėmimas', content: openedVeg.harvesting},
	];

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	useEffect(() => {
		setSelected(null);
	}, [openedVeg]);

	return (
		<div className='accordion'>
			<h4>Aprašymas</h4>
			<p>{openedVeg.desc}</p>
			<div>
				{data.map((item, i) => (
					<div
						className='item'
						key={i}
					>
						<div
							className='title'
							onClick={() => toggle(i)}
						>
							<h4>{item.title}</h4>
							<span>{selected === i ? '-' : '+'}</span>
						</div>
						<div className={selected === i ? 'content show ' : 'content'}>
							<p>{item.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AccordionComp;
