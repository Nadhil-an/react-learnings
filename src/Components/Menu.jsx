import React,{  useEffect, useState } from "react"
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"
import FilteredDishes from "./FilteredDishes.jsx"
import Loader from "./Loader.jsx"
import AllMenu from "./AllMenuContext.jsx"

export const MenuContext     = React.createContext()



function Menu(){
    
    let [category,setCategory] = useState([])
    let [loading,setLoading] = useState(false)
    let [singledata,setSingleFoodData] = useState([])

   
    //fetch food by category
    async function getAllCategories(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let categorydata = await response.json()
        setCategory(categorydata.categories)
    }

    //fetch single food
    async function singlefood(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(API_URL)
        let singlefooddata = await response.json()
        setSingleFoodData(singlefooddata.meals)    
    }




    useEffect(()=>{
        getFoodMenu()
        getAllCategories()
        singlefood()

    },[])

    return(
        <>
        
        <Hero />

        <AllMenu>
            
        
        {!loading?<SpecialDishes  />:<Loader />}
        {!loading?<FilteredDishes />:null}

        </AllMenu>

            
        
        </>
    )
}

export default Menu