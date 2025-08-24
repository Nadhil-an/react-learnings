import React, {useEffect, useState} from "react"

const AllmenuContext = React.createContext()



const Allmenu =(props)=>{
    let [menu,setMenu] = useState([])
     //fetch all foodMenu
    async function getFoodMenu(){
        setLoading(true);
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data =  await response.json()
        setMenu(data.meals);
        setLoading(false)
    }

    useEffect(()=>{
        getFoodMenu();
    },[])
    return(
        <AllmenuContext.Provider value={}>
            {props.children}

        </AllmenuContext.Provider>

    )
}

export default Allmenu