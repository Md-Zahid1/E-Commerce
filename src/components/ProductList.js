import React from 'react'
import { useFilterContext } from '../context/Filter_Context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filter_products, grid_View } = useFilterContext()
  console.log('filter_products', filter_products);
  if (grid_View) {
    return <GridView products={filter_products} />
  }

  if (grid_View === false) {
    return <ListView products={filter_products} />
  }
}

export default ProductList
