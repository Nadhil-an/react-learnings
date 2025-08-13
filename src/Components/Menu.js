import { useEffect, useState } from "react"
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"


function Menu(){
    let [menu,setMenu] = useState([])

    async function getFoodMenu(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data =  await response.json()
        setMenu(data.meals);
    }

    console.log("all meals:",menu);

    useEffect(()=>{
        getFoodMenu()

    },[])

    return(
        <>
        
        
        <Hero />
        <SpecialDishes specialDishes={menu} />


        </>
    )
}

export default Menu