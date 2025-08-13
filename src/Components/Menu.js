import { useEffect, useState } from "react"
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"
import FilteredDishes from "./FilteredDishes.jsx"


function Menu(){
    let [menu,setMenu] = useState([])

    async function getFoodMenu(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data =  await response.json()
        setMenu(data.meals);
    }

    async function getAllCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let categorydata = await response.json()
        console.log("category",categorydata.categories);
    }

    console.log("all meals:",menu);

    useEffect(()=>{
        getFoodMenu()
        getAllCategories()

    },[])

    return(
        <>
        
        
        <Hero />
        <SpecialDishes specialDishes={menu} />
        <FilteredDishes />


        </>
    )
}

export default Menu