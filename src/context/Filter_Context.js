import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer"

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: [],
    grid_View: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useContext(AppContext);
    console.log('aaa', products)
    console.log('products', products);
    const [state, dispatch] = useReducer(reducer, initialState);
    //to set grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    //to set  view
    const setListView = () => {
        return dispatch({ type: "SET_List_VIEW" });
    }

    // sorting function 
    const sorting = () => {
        return dispatch({ type: "GET_SORT_VALUE" });
    }

    //update the filter value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log('name', name);
        console.log('value', value)

        dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
        dispatch({ type: "FILTER_PRODUCTS" });


    };

    //to sort the product 
    useEffect(() => {

        dispatch({ type: "SORTING_PRODUCTS" });
    }, [state.sorting_value]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}