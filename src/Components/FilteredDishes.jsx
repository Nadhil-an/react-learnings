import {useState} from 'react'


function FilteredDishes(props){


    let [allMenu] = useState(props.specialDishes)
    let [filteredDish,setFiltered] = useState([])
    let [active,setActive] = useState([])
    





    //show dishes onclick
    function showFilterDishesHandler(category){
        setActive(category)
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
            <li className={ item.strCategory === active ? "active":""} onClick={()=>{showFilterDishesHandler(item.strCategory)}}>{item.strCategory}</li>
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
            </div>

            <div className='filtereddishesItem flex flex-wrap gap-2'>
                {filteredDish}

            </div>



        
             

        </div>
    )
}

export default FilteredDishes