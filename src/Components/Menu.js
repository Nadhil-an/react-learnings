import { useEffect, useState } from "react"
import Hero from "./Hero.js"


function Menu(){
    let [menu,setMenu] = useState([])

    async function getFoodMenu(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL)
        let data =  await response.json()
        setMenu(data.meals);
    }

    useEffect(()=>{
        getFoodMenu()

    },[])

    console.log(menu);

    let data = menu.map((items)=>{
        return(
            <div>
             <h3>{items.strCategory}</h3>
            <img src={items.strMealThumb} alt="" />

        </div>

        )
        
       
        
    })




    return(
        <>
        
        
        <Hero />
        </>
    )
}

export default Menu