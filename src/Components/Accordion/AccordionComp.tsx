import {useContext, useEffect, useState} from 'react';
import MainContext from '../../Context/MainContext';
import './accordionComp.scss';
import dataArr from '../../data/dataArr';

function AccordionComp() {
	const context = useContext(MainContext);
	const {openedVeg} = context || {};
	const [selected, setSelected] = useState<number | null>(null);
	const openedVegObject = dataArr.find((veg) => veg.id === openedVeg);

	const data = [
		{title: 'Dirva', content: openedVegObject?.soil || ''},
		{title: 'Sėja', content: openedVegObject?.sowing || ''},
		{title: 'Priežiūra', content: openedVegObject?.caring || ''},
		{title: 'Derliaus nuėmimas', content: openedVegObject?.harvesting || ''},
	];

	const toggle = (i: number) => {
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
			<p>{openedVegObject?.desc || ''}</p>
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
						<div className={selected === i ? 'content show' : 'content'}>
							<p>{item.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AccordionComp;
