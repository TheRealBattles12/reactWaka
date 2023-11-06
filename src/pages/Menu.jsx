import React from 'react'
import chicken from "../assets/images/MeatAndGrills/chicken-suya-served.jpg"
import fish from "../assets/images/MeatAndGrills/fish-lead-story-.jpg"
import wholeChicken from "../assets/images/MeatAndGrills/grilled-whole-chicken-recipe-10.jpg"
import Hake from "../assets/images/MeatAndGrills/Hake.png"
import Beef from "../assets/images/MeatAndGrills/suya beef.jpg"
import Turkey from "../assets/images/MeatAndGrills/Turkey.jpg"
import Rice from "../assets/images/MainDishes/Simply-Recipes-Jollof-Rice-LEAD-6-5a93db14a0ac461f88dc557514a770c0.jpg"
import Beans from "../assets/images/MainDishes/Beans.jpg"
import Spaghetti from "../assets/images/MainDishes/spahetti.jpg"
import Yam from "../assets/images/MainDishes/yam-and-egg-sauce-image.jpg"
import Swallow from "../assets/images/MainDishes/Iyan.jpg"
import Akara from "../assets/images/MainDishes/akara.jpg"
import MoiMoi from "../assets/images/MainDishes/moimoi-3.jpg"
import PepperSoup from "../assets/images/MainDishes/Nigerian-Catfish-Peppersoup.jpg"
import Boli from "../assets/images/Specials/boli.jpg"
import Asaro from "../assets/images/Specials/asaro.jpg"
import PuffPuff from "../assets/images/Specials/pufftangerine-592-1-481x375.jpg"
import SevenUp from "../assets/images/Drinks/7up.jpg"
import CocaCola from "../assets/images/Drinks/coca-cola-coke-330ml.jpg"
import Fanta from "../assets/images/Drinks/FANTA-CAN-33CL-1.jpg"
import IceCream from "../assets/images/Drinks/ice cream.jpg"
import Malt from "../assets/images/Drinks/maltina.jpg"
import Sprite from "../assets/images/Drinks/sprite drink.jpg"
import Water from "../assets/images/Drinks/water.png"
const Menu = () => {
  return (
    <>
    <section className="main-menu">
        <h1>Main Menu</h1>
        <div className="category-image meat"></div>
        <h2 className="category-name"> Meat and Grills </h2>
        <div className="items">
            <div className="item">
                <div>
                    <h3>Chicken Suya</h3>
                    <h4>$15.99</h4>
                </div>
                <img src={chicken} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Fish</h3>
                    <h4>$5.99</h4>
                </div>
                <img src={fish} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Chicken</h3>
                    <h4>$7.99</h4>
                </div>
                <img src={wholeChicken} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Hake Fish</h3>
                    <h4>$6.99</h4>
                </div>
                <img src={Hake} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Beef Suya</h3>
                    <h4>$8.99</h4>
                </div>
                <img src={Beef} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Turkey</h3>
                    <h4>$9.99</h4>
                </div>
                <img src={Turkey} alt=""/>
            </div>
        </div>
        <div className="category-image rice"></div>
        <h2 className="category-name"> Main Dishes </h2>
    <div className="items">
            <div className="item">
            <div>
            <h3>Jollof Rice</h3>
            <h4>$25.99</h4>
            </div>
        <img src={Rice} alt=""/>
            </div>
        <div className="item">
            <div>
                <h3>Beans</h3>
                <h4>$9.99</h4>
            </div>
            <img src={Beans} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Jollof Spaghetti</h3>
                <h4>$15.99</h4>
            </div>
            <img src={Spaghetti} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Yam and Egg</h3>
                <h4>$13.99</h4>
            </div>
            <img src={Yam} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Swallow</h3>
                <h4>$16.99</h4>
            </div>
            <img src={Swallow} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Akara</h3>
                <h4>$11.99</h4>
            </div>
            <img src={Akara} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Moi Moi</h3>
                <h4>$12.99</h4>
            </div>
            <img src={MoiMoi} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Pepper Soup</h3>
                <h4>$14.99</h4>
            </div>
            <img src={PepperSoup} alt=""/>
        </div>
       </div> 
       <div className="category-image boli"></div>
       <h2 className="category-name"> Specials </h2>
    <div className="items">
        <div className="item">
            <div>
                <h3>Asaro</h3>
                <h4>$12.69</h4>
            </div>
            <img src={Asaro} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Boli</h3>
                <h4>$11.79</h4>
            </div>
            <img src={Boli} alt=""/>
        </div>
        <div className="item">
            <div>
                <h3>Puff Puff</h3>
                <h4>$8.99</h4>
            </div>
            <img src={PuffPuff} alt=""/>
        </div>
    </div>   
        <div className="category-image fanta"></div>
        <h2 className="category-name"> Drinks </h2>
        <div className="items">
            <div className="item">
                <div>
                    <h3>7UP</h3>
                    <h4>$1.99</h4>
                </div>
                <img src={SevenUp} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Coca Cola</h3>
                    <h4>$2.99</h4>
                </div>
                <img src={CocaCola} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Fanta</h3>
                    <h4>$2.69</h4>
                </div>
                <img src={Fanta} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>One Scoop Ice Cream</h3>
                    <h4>$4.99</h4>
                </div>
                <img src={IceCream} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Maltina</h3>
                    <h4>$1.99</h4>
                </div>
                <img src={Malt} alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Sprite</h3>
                    <h4>$2.99</h4>
                </div>
                <img src={Sprite}alt=""/>
            </div>
            <div className="item">
                <div>
                    <h3>Water</h3>
                    <h4>$0.99</h4>
                </div>
                <img src={Water} alt=""/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Menu