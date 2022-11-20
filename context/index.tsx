import React, { createContext, useContext } from "react";

type itemData = {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: any;
    type: string;
    size: string;
    delivery: string;
    crust: string;
}

const DataContext = createContext<
{
    itemsData:  itemData[];
}>({
    itemsData: [],
});

export const useDataContext = () => useContext(DataContext);



const DataProvider: React.FC<{
    children: React.ReactElement[]
}> = ({ children }) => {
    return <DataContext.Provider value={{
        itemsData: [
            {
                id: 1,
                name: 'Primavera Pizza',
                image: require('../assets/images/pizza1.png'),
                price: 12.99,
                rating: 5.0,
                type: 'pizza',
                size: 'large',
                delivery: '30-40 min',
                crust: 'thin',
            },
            {
                id: 2,
                name: 'Seafood Pizza',
                image: require('../assets/images/pizza2.png'),
                price: 12.40,
                rating: 5.0,
                type: 'pizza',
                size: 'medium',
                delivery: '30 min',
                crust: 'thick',
            },
            {
                id: 3,
                name: 'Soft Drink',
                image: require('../assets/images/pizza3.png'),
                price: 25.99,
                rating: 4.9,
                type: 'pizza',
                size: 'small',
                delivery: '25 min',
                crust: 'thin',
            },
        ]
    }}>
        {children}
    </DataContext.Provider>
}


export default DataProvider;
