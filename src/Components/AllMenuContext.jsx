import React, {useEffect, useState} from "react"
import Loader from "./Loader.jsx"

export const AllMenuContext = React.createContext()



export const AllMenu =(props)=>{
    let [menu,setMenu] = useState([])
    let [loading,setLoading] = useState(false)
    let [category,setCategory] = useState([])
    
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

    useEffect(()=>{
              getFoodMenu()
              getAllCategories()
              
          },[])



    
    return(
        <AllMenuContext.Provider value={{menu,category}}>
            
            {!loading?props.children:<Loader />}

        </AllMenuContext.Provider>

    )
}

