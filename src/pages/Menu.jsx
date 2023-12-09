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
import { Link } from 'react-router-dom'
import Footer from '../comps/Footer/Footer'
import Header from '../comps/Header/Header'
import Foodcard from '../comps/FoodCards/foodcard'
const menu = () => {
  return (
    <>
    <Link to={"/"}></Link>
    <Header/>
    <section className="main-menu">
        <h1>Main Menu</h1>
        <div className="category-image meat"></div>
        <h2 className="category-name"> Meat and Grills </h2>
        <div className="items">
            <Foodcard meal={"Chicken Suya"} price={"$15.99"} pic={chicken}/>
            <Foodcard meal={"Fish"} price={"$5.99"} pic={fish}/>
            <Foodcard meal={"Chicken"} price={"$7.99"} pic={wholeChicken}/>
            <Foodcard meal={"Hake Fish"} price={"$6.99"} pic={Hake}/>
            <Foodcard meal={"Beef Suya"} price={"$8.99"} pic={Beef}/>
            <Foodcard meal={"Turkey"} price={"$9.99"} pic={Turkey}/>
        </div>
        <div className="category-image rice"></div>
        <h2 className="category-name"> Main Dishes </h2>
    <div className="items">
            <Foodcard meal={"Jollof Rice"} price={"$25.99"} pic={Rice}/>
            <Foodcard meal={"Beans"} price={"$9.99"} pic={Beans}/>
            <Foodcard meal={"Jollof Spaghetti"} price={"$15.99"} pic={Spaghetti}/>
            <Foodcard meal={"Yam and Egg"} price={"$13.99"} pic={Yam}/>
            <Foodcard meal={"Swallow"} price={"$16.99"} pic={Swallow}/>
            <Foodcard meal={"Akara"} price={"$11.99"} pic={Akara}/>
            <Foodcard meal={"Moi Moi"} price={"$12.99"} pic={MoiMoi}/>
            <Foodcard meal={"Pepper Soup"} price={"$12.99"} pic={MoiMoi}/>
       </div> 
       <div className="category-image boli"></div>
       <h2 className="category-name"> Specials </h2>
    <div className="items">
    <Foodcard meal={"Asaro"} price={"$12.69"} pic={Asaro}/>
    <Foodcard meal={"Boli"} price={"$11.79"} pic={Boli}/>
    <Foodcard meal={"Puff Puff"} price={"$8.99"} pic={PuffPuff}/>
    </div>   
        <div className="category-image fanta"></div>
        <h2 className="category-name"> Drinks </h2>
        <div className="items">
            <Foodcard meal={"7UP"} price={"1.99"} pic={SevenUp}/>
            <Foodcard meal={"Coca Cola"} price={"2.99"} pic={CocaCola}/>
            <Foodcard meal={"Fanta"} price={"2.69"} pic={Fanta}/>

 
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
    <Footer/>
    </>
  )
}

export default menu