import React from 'react'

function Pagination({filteredDish}) {
  let numberOfPages = []

  //number of product by catergory and taking the length of product push it into numberofpages array.that page number display on the 
  // particular component
  for(let i=1;i<filteredDish.length;i++){
    numberOfPages.push(i)

  }

  let pages = numberOfPages.map((items)=>{
    return(
      <li>{items}</li>
    )
  })
  return (
    <ul className='pagination'>
        {pages}

    </ul>
  )
}

export default Pagination
