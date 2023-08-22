import {createContext, Dispatch, SetStateAction} from 'react';

export type Veg = {
	id: number;
	pixelImage: string;
	name: string;
	type: string;
	desc: string;
	soil: string;
	sowing: string;
	caring: string;
	harvesting: string;
	greenhouse?: string;
	images: string[];
};

type OpenedVegetable = {
	openedVeg: number | null;
	setOpenedVeg: Dispatch<SetStateAction<number | null>>;
	vegetablesArr: Veg[];
	setVegetablesArr: Dispatch<SetStateAction<Veg[]>>;
};

const MainContext = createContext<OpenedVegetable | undefined>(undefined);

export default MainContext;
