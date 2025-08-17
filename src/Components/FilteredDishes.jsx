import { useState} from 'react'
import Pagination from './Pagination'


function FilteredDishes({specialDishes,dishcategories,singledata}){
    
    


    let [allMenu] = useState(specialDishes)
    let [filteredDish,setFiltered] = useState([])
    let [active,setActive] = useState("")
    let [currentpage,setCurrentpage]=useState(1)
    let [itemsperpage,  ]=useState(4)

    let indexofLastDish  = currentpage * itemsperpage
    let indexofFirstDish = indexofLastDish - itemsperpage
    let dishestoshow     = filteredDish.slice(indexofFirstDish,indexofLastDish)
    
    //default dish
    let maxIndex =8;
    let singledishes = singledata.map((item,index)=>{
        if(index < maxIndex){
            return(
           <li >
                <img src={item.strMealThumb} className='br-10' alt='imges' />
                <h3 >{item.strMeal}</h3>
           </li>
        )

        }
        
    })





    //show dishes onclick
    function showFilterDishesHandler(category){
        setActive(category)
        let filteredDishesesAre = allMenu.filter(filteritem=>category === filteritem.strCategory ).map(item => (
                        <li key={item.idMeal}>
                            <img src={item.strMealThumb} className="br-10" alt="dish" />
                            <h3>{item.strMeal}</h3>
                        </li>
                        ))
        setFiltered(filteredDishesesAre)        
    }
    


    //show dishes list by category
    let dishCategory = dishcategories.map((item)=>{
        return(
            <li className={ item.strCategory === active ? "active":""} 
            onClick={()=>{showFilterDishesHandler(item.strCategory)}}>{item.strCategory}</li>
        )
    })


    //rendering
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
                
               
                {active === "" ? (
                        singledishes
                    ) : filteredDish.length > 0 ? (
                        // Category clicked and items found
                        dishestoshow
            
                    ) : (
                        // Category clicked but no items found
                        <div className="alert">
                        <h3>Sorry, No item found</h3>
                        <h4>Please choose another menu</h4>
                        </div>
                    )}
            </div>

            <Pagination 
            filteredDish={filteredDish}
            itemsperpage={itemsperpage}
            setCurrentpage={setCurrentpage}
            
            />



        
             

        </div>
    )
}

export default FilteredDishes