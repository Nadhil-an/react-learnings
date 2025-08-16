import React from 'react'

function Pagination({filteredDish,itemsperpage,setCurrentpage}) {
  let numberOfPages = []

  //number of product by catergory and taking the length of product push it into numberofpages array.that page number display on the 
  // particular component
  for(let i=1;i<Math.ceil(filteredDish.length/itemsperpage);i++){
    numberOfPages.push(i)

  }

  function showNextDishesHandler(event){
    const current = event.target.id
    setCurrentpage(current)

  }


  let pages = numberOfPages.map((pageNumber)=>{
    return(
      <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
    )
  })
  return (
    <ul className='pagination'>
        {pages}

    </ul>
  )
}

export default Pagination
