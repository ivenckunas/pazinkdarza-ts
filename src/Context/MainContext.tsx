import {createContext} from 'react';

type OpenedVegetable = {
	openedVeg: number;
	setOpenedVeg: React.Dispatch<React.SetStateAction<number>>;
};

const defaultValue: OpenedVegetable = {
	openedVeg: null,
	setOpenedVeg: () => {
		Number;
	},
};

const MainContext = createContext<OpenedVegetable>(defaultValue);

export default MainContext;
