import CardDish from "./CardDish";

function SpecialDishes({specialDishes}){
    
    let maxDishes = 8;
    
    let specialMenu = specialDishes.map((items,index)=>{
        if(index < maxDishes){
            return(    
                <CardDish items={items}/>
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