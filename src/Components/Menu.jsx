import React from "react"
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"
import FilteredDishes from "./FilteredDishes.jsx"
import {AllMenu} from "./AllMenuContext.jsx"


function Menu(){
    

    return(
        <>
        
        <Hero />

        <AllMenu>
        
        <SpecialDishes  />
        <FilteredDishes   />

        </AllMenu>

            
        
        </>
    )
}

export default Menu