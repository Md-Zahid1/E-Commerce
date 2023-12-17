const FilterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":

        let priceArr = action.payload.map((curElem) => curElem.price)
        console.log('priceArr', priceArr);

        let maxPrice = Math.max(...priceArr);
        console.log("maxPrice", maxPrice);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice},
            }


        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_View: true,
            }


        case "SET_List_VIEW":
            return {
                ...state,
                grid_View: false,
            }


        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("Short");
            console.log('sort', userSortValue);
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            console.log('sort_value', sort_value)
            return {
                ...state,
                sorting_value: sort_value,
            };


        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct = [...state.all_products];

            if (state.sorting_value === "lowest") {
                const sortingProducts = (a, b) => {
                    return a.price - b.price;
                }

                newSortData = tempSortProduct.sort(sortingProducts);
            }


            if (state.sorting_value === "highest") {
                const sortingProducts = (a, b) => {
                    return b.price - a.price;
                }

                newSortData = tempSortProduct.sort(sortingProducts);
            }

            if (state.sorting_value === "A-Z") {
                newSortData = tempSortProduct.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            };


            if (state.sorting_value === "Z-A") {
                newSortData = tempSortProduct.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            };

            return {
                ...state,
                filter_products: newSortData,
            };


        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            console.log("name", name)


            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }


        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, colors, price } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
                console.log('tem  text', tempFilterProduct)
            }

            if (category) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    if (category.toLowerCase() == "all") {
                        return true;
                    }
                    return curElem.category === category;
                })
                console.log('tem  cat', tempFilterProduct)
            };


            if (company) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    if (company.toLowerCase() == "all") {
                        return true;
                    }
                    return curElem.company.toLowerCase() === company.toLowerCase();
                })
                console.log('tem  com', tempFilterProduct)
            }

            if (colors) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    if (colors == "All") {
                        return true;
                    }
                    return curElem.colors.includes(colors);
                })
            }


            if(price) {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                    );
            }

            return {
                ...state,
                filter_products: tempFilterProduct,


            };

        default:
            return state;
    }
}


export default FilterReducer