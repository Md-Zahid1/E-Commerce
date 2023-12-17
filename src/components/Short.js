import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../context/Filter_Context'

const Short = () => {
  const { filter_products, grid_View, setGridView, setListView, sorting } = useFilterContext()

  return (
    <Wrapper className='sort-section'>
      <div className='sorting-list--grid'>
        <button className={grid_View ? 'active sort-btn' : "sort-btn"} onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>
        <button className={grid_View ? 'sort-btn' : "active sort-btn"} onClick={setListView}>
          <BsList className='icon' />
        </button>
      </div>
      <div className='product-data'>
        <p>{`${filter_products.length}`}Product Available</p>
      </div>
      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor='Short'></label>
          <select name='Short' id='Short' className='short-selection--style' onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="A-Z">Price(A-Z)</option>
            <option value="#" disabled></option>
            <option value="Z-A">Price(Z-A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
justify-content: space-between;
margin-top: 5rem;


.shorting-list--grid {
  display: flex;
  gag: 2rem;


  .short-btn{
    padding: 0.2rem 1rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    font-size: 1.6rem;

  }

  .active {
    background-color: ${({ theme }) => theme.colors.black};
    color: #fff;

  }
}

.sort-selection .sort-selection--style {
  padding: 0.5rem;
  cursor: pointer;


  .sort-select--option {
    padding: 0.5rem 0;
    cursor-pointer;
    height: 2rem;
    padding: 10px;
  }
}

`

export default Short
