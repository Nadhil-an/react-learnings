import React,{  useEffect, useState } from "react"
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"
import FilteredDishes from "./FilteredDishes.jsx"
import Loader from "./Loader.jsx"

export const AllMenuContext = React.createContext()


function Menu(){
    let [menu,setMenu] = useState([])
    let [category,setCategory] = useState([])
    let [loading,setLoading] = useState(false)
    let [singledata,setSingleFoodData] = useState([])

    //fetch all foodMenu
    async function getFoodMenu(){
        setLoading(true);
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data =  await response.json()
        setMenu(data.meals);
        setLoading(false)
    }
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

        <AllMenuContext.Provider value={menu}>
        
        {!loading?<SpecialDishes  />:<Loader /> 
        }
        {!loading?

        //FilteredDishes componet
        
        <FilteredDishes dishcategories={category} 
        specialDishes={menu} 
        singledata={singledata}
        />:null}
        </AllMenuContext.Provider>
        </>
    )
}

export default Menu