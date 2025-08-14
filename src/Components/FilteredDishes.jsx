import {useState} from 'react'


function FilteredDishes(props){


    let [allMenu,setAllMenu] = useState(props.specialDishes)
    let [filteredDish,setFiltered] = useState([])






    //show dishes onclick
    function showFilterDishesHandler(category){
        let filteredDishesesAre = allMenu.filter((filteritem)=>{
            return(
                category === filteritem.strCategory
            )
        }).map((item)=>{
            return(
                <li >
                <img src={item.strMealThumb} alt='imges' />
                <h3>{item.strMeal}</h3>
                 </li>

            )
        })
        setFiltered(filteredDishesesAre)
    }


    //show dishes category
    let dishCategory = props.dishcategories.map((item)=>{
        return(
            <li onClick={()=>{showFilterDishesHandler(item.strCategory)}}>{item.strCategory}</li>
        )
    })

    return(

        <div className="filtered-dishes">
            <div className="container">
                <div className="text-center">
                    <h2>Choose your Dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis neque exercitationem laborum temporibus magnam maiores a assumenda incidunt!
                    </p>
                </div>

                <div className="filtered-dishes">
                    <ul>
                        {dishCategory}
                    </ul>
                </div>

                <div>
                    {filteredDish}
                </div>

                
            </div>
             

        </div>
    )
}

export default FilteredDishes