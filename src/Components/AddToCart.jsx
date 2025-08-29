const AddToCart = ({AddCart}) =>{
    let addedProduct = AddCart.map((product)=>{
        return(
            <div>
                <img src={product.img} alt="" />
                <h5>{product.name}</h5>


            </div>
        )
    })    

    return(
        <div className="add-to-cart-wrapper">
        <div className="add-to-cart-item">
            
            {addedProduct}
            
            
        </div>
        </div>
    )
}

export default  AddToCart