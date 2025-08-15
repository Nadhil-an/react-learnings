function SpecialDishes({specialDishes}){
    
    let maxDishes = 8;
    
    let specialMenu = specialDishes.map((items,index)=>{
        if(index < maxDishes){
            return(    
                <li>
                    <img src={items.strMealThumb}  />
                    <h2>{items. strMeal}</h2>
                </li>
        )
        } 
    })






    return(
        <section className="special-dishes">
            <div className="container">
                <div className="special-dishes-content text-center">
                    <h2>Our Special Dishes</h2>
                </div>

                <div className="special-dishes-list ">
                    <ul className="flex flex-wrap gap-2">
                        {specialMenu}
                    </ul>
                </div>
            </div>
        
        
        
        </section>
    )
}

export default SpecialDishes