import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../comps/Footer/Footer';
import Header from '../comps/Header/Header';

const Home = () => {
  return (
    <>
      <Header/>
      <section id="about">
        <h2>About Us</h2>
        <p>Located in the vibrant multicultcral landscape of Canada, GoWaka Restaurant stands as a delicious testament to the rich and diverse flavors of Nigeria. This culinary gem brings the essence of Nigerian cuisine to the Canadian dining scene, offering an authentic and immersive dining experience that transports patrons to the heart of West Africa.</p>
      </section>
      <section id="menu">
        <h2>Our Menu</h2>
        <p>At GoWaka, the menu is a culinary journey through Nigeria's diverse regional cuisines, showcasing a variety of flavors, ingredients, and cooking techniques. From the bustling streets of Lagos to the savannas of the North, the menu offers a tantalizing selection of dishes that will satisfy both seasoned aficionados of Nigerian cuisine and newcomers eager to explore something new.</p>
        <Link to={"/Menu"} className="menu-button">View Menu</Link>
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
