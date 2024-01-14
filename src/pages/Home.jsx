import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../comps/Footer/Footer';
import Header from '../comps/Header/Header';
import "./Home.css"

const Home = () => {
  return (
    <>
      <Header/>
      <section id="about">
        <h2>About Us</h2>
        <p>Located in the vibrant multicultural landscape of Canada, GoWaka Restaurant stands as a delicious testament to the rich and diverse flavors of Nigeria. 
          This culinary gem brings the essence of Nigerian cuisine to the Canadian dining scene, offering an authentic and immersive dining experience that transports patrons to the heart of West Africa.</p>
      </section>
      <section id="meu">
        <h2>Our Menu</h2>
        <p>At GoWaka, the menu is a culinary journey through Nigeria's diverse regional cuisines, showcasing a variety of flavors, ingredients, and cooking techniques. 
          From the bustling streets of Lagos to the savannas of the North, the menu offers a tantalizing selection of dishes that will satisfy both seasoned aficionados of Nigerian cuisine and newcomers eager to explore something new.
          </p>
         <h4>Some of our Favourites:</h4> 
        <div className="Jollof">
        <h1>Jollof Rice</h1>
        <p>
          The peak of Nigerian taste is brought to you fresh and amazing. Made with the right amount of spice to suit your tastebuds.
        </p>
        </div>
        <div className="GrilledChicken">
        <h1>Grilled Chicken</h1>
        <p>
        This latest addition to our menu has already become our customers’ favorite. Day or night, our Grilled Chicken is the dish you’ve been craving.
         Don't forget to ask your server about our special extras!
        </p>
        </div>
        <div className="ChefSpecial">
        <h1>Chef's Special</h1>
        <p>
        Many restaurants have their own take on this recipe, but we’re confident that ours is the best, always prepared to perfection. 
          Share it with friends or have it all to yourself—you’ll enjoy it till the very last bite.</p>
        <Link to={"/Menu"} className="menu-button">See More→</Link>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>For reservations or inquiries, please contact us at:</p>
        <address>
          Email: info@gowakarestaurant.ca<br/>
          Phone: (123) 456-7890<br/>
          Address: 123 Delicious Street, Canada
        </address>
      </section>
      <section id="login">
        <h2>Login or Signup Now!</h2>
        <p>
        Click here to log in to our website and start earning WakaRewards based on your order amounts. Accumulate these rewards to receive valuable coupons for discounted dining experiences.
        </p>
        <Link to={"/Login"} className="login-button">Login</Link>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
