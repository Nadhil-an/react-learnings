function SpecialDishes(props){
    console.log(props)
    
    let specialMenu = props.specialDishes.map((items)=>{
        return(    
                <li>
                    <img src={items.strMealThumb}  />
                    <h2>{items. strMeal}</h2>
                </li>
        )
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