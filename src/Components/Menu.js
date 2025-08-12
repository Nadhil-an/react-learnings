import { useEffect, useState } from "react"

function Menu(){
    let [menu,setMenu] = useState([])

    async function getFoodMenu(){
        const API_URL = "www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL)
        let data =  await response.json()
        setMenu(data.meals);
    }

    useEffect(()=>{
        getFoodMenu()

    },[])




    return(
        <>
        
        
        </>
    )
}