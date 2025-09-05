import React from "react"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Hero from "./Hero.js"
import SpecialDishes from "./SpecialDishes.jsx"
import FilteredDishes from "./FilteredDishes.jsx"
import Header from './Header.jsx'
import Checkout from './Checkout.jsx'
import {AllMenu} from "./AllMenuContext.jsx"
import { AppProvider } from "../context/AppProvider.jsx"



function Menu(){
    

    return(
        <>
     
            <Router>
            <AppProvider>
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
            </AppProvider>
        </Router>


       
        
        

            
        
        </>
    )
}

export default Menu