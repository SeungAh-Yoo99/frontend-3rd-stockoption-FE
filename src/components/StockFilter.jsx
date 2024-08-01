import React from 'react'

export default function StockFilter({handleFilter}) {
  return (
    <div className='flex flex-row-reverse mb-10'>
    <select onChange={handleFilter} className="p-2 text-black-100 bg-gray-100 rounded "
    data-cy="todo-filter">
    
        <option value="high">상승률순</option>
        <option value="low"> 하락률순</option>
       
    </select>
    </div>
  )
}
