import { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext.jsx";
import AddToCart from "./AddToCart.jsx";

function SpecialDishes() {
  const { menu } = useContext(AllMenuContext);

  let [showPopup, setShowPop] = useState(false);
  let [popDishes, setPopDishes] = useState("");
  let [AddCart,setAddCart]=useState([])

  function showPopupHandler(dishName) {
    setPopDishes(dishName);
    setShowPop(true);
  }

  function orderNowHanlder(image,name){
    setAddCart([
      {
        img:image,
        name:name

      }
    ])
  }

  let maxDishes = 8;

  let specialMenu = (menu || [])
    .slice(0, maxDishes)
    .map((items) => (
      <CardDish
        key={items.idMeal}
        items={items}
        showPopupHandler={showPopupHandler}
      />
    ));

  return (
    <section className="special-dishes">
      {showPopup && (
        <Popup setShowPop={setShowPop} popDishes={popDishes}  orderNowHanlder={orderNowHanlder}/>
      )}

      <div className="container">
        <AddToCart AddCart={AddCart}/>
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
        </div>

        <div className="special-dishes-list ">
          <ul className="flex flex-wrap gap-2">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
