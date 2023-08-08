import {createContext} from 'react';

type OpenedVegetable = {
	setOpenedVeg: React.Dispatch<React.SetStateAction<number>>;
};

const defaultValue: OpenedVegetable = {
	setOpenedVeg: () => {
		Number;
	},
};

const MainContext = createContext<OpenedVegetable>(defaultValue);

export default MainContext;
