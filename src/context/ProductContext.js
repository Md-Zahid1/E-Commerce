import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer';

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  feacherProducts: [],
  isSingleLoading: false,
  singleProducts: {},
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" })
    try {
      const res = await axios.get(url);
      const products = await res.data;
      console.log('products', products);
      dispatch({ type: "SET_API_DATA", payload: products })
    } catch (error) {
      dispatch({ type: "API_ERROR" })
    }
  };

  // 2nd api call
  const getsingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" })
    try {
      const res = await axios.get(url);
      const singleProducts = await res.data;
      console.log('singleProducts', singleProducts);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProducts })
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" })
    }
  }

  useEffect(() => {
    getProducts(API);
  }, [])

  return <AppContext.Provider value={{ ...state, getsingleProduct }}>
    {children}
  </AppContext.Provider>
}

export { AppProvider, AppContext };