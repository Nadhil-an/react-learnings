function FilteredDishes(props){

    let dishCategory = props.dishcategories.map((item)=>{
        return(
            <li>{item.strCategory}</li>
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
             

        </div>
    )
}

export default FilteredDishes