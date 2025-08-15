import { useState } from 'react';

function FilteredDishes({ singledata, specialDishes, dishcategories }) {
  const [allMenu] = useState(specialDishes);
  const [filteredDish, setFiltered] = useState([]);
  const [active, setActive] = useState("");

  // Handle category filter

  //*****allmenu ninn user click cheytha catergory and database illa same product eduth filtereddishilek store cheyth
  function showFilterDishesHandler(category) {
    setActive(category);
    const filtered = allMenu.filter(item => item.strCategory === category);
    setFiltered(filtered); 
  }


 //********category list ninn user click cheytha food category

  // Dish category buttons(showcasing food categories only)
  const dishCategory = dishcategories.map(item => (
    <li 
      key={item.idCategory}
      className={item.strCategory === active ? "active" : ""}
      onClick={() => showFilterDishesHandler(item.strCategory)}
    >
      {item.strCategory}
    </li>
  ));



  // Decide what to show (default or filtered)
  const dishesToShow = filteredDish.length > 0 ? filteredDish : singledata;

  return (
    <div className="filtered-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro nobis neque exercitationem laborum temporibus magnam maiores a assumenda incidunt!
          </p>
        </div>

        <div className="filtered-dishes">
          <ul>{dishCategory}</ul>
        </div>
      </div>

      <div className="filtereddishesItem flex flex-wrap gap-2">
        {dishesToShow.length > 0 ? (
          dishesToShow.map(item => (
            <li key={item.idMeal}>
              <img src={item.strMealThumb} className="br-10" alt="dish" />
              <h3>{item.strMeal}</h3>
            </li>
          ))
        ) : (   
          <div className="alert">
            <h3>Sorry, No item found</h3>
            <h4>Please choose another menu</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilteredDishes;
