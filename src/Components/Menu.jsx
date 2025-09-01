import React from "react"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"
import FilteredDishes from "./FilteredDishes.jsx"
import Header from './Header.jsx'
import Checkout from './Checkout.jsx'
import {AllMenu} from "./AllMenuContext.jsx"


function Menu(){
    

    return(
        <>
        <Router>
            <Header />
            <Hero />

            <Routes>
                {/*Home Route */}
                <Route   path="/" element={
                    <AllMenu>
                        <SpecialDishes />
                        <FilteredDishes />
                    </AllMenu>
                }/>


                <Route path="/checkout" element={<Checkout />}/>
            </Routes>
        </Router>
        

            
        
        </>
    )
}

export default Menu