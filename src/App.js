import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import Profile from './Profile';


const Navbar = () => (
  <nav className="navbar fade-in">
    <div className="logo">FoodieExpress</div>
    <ul className="nav-links">
      <li><a href="#product">Shop</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Reserve my table</a></li>
      <li><Link to="/profile">My Profile</Link></li>
      </ul>
    <div className="search-icon">🔍</div>
  </nav>
);

const Hero = () => (
  <section className="hero slide-up">
    <div className="hero-content">
      <h1>INDULGE IN BLISS</h1>
      <p>Our Rich & Creamy Hot Chocolate – Warmth in Every Sip! Try it Now!</p>
      <button className="shop-btn">SHOP NOW</button>
    </div>
    <div className="hero-image">
      <img src="./cold.jpg" alt="Hot Chocolate" />
    </div>
  </section>
);



const ProductTabs = () => (
  <section id ="product" className="product-tabs fade-in">
    <h2 style={{ textAlign: 'center' }}>BEST-SELLING PRODUCTS</h2>
    <div className="tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <button>Coffees</button>
      <button>Beverages</button>
      <button>Gourmet Meals</button>
      <button>Nibble</button>
      <button>Sweet Treats</button>
    </div>
    <div className="products" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      <ProductCard
        img="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        name="Green Lemon Tea"
        desc="Natural flavor with lemon"
        price="$3.00"
      />
      <ProductCard
        img="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        name="South Indian Filter Coffee"
        desc="Rich taste & aroma"
        price="$2.50"
      />
      <ProductCard
        img="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        name="Thick Hot Chocolate"
        desc="Indulgent delight"
        price="$3.99"
      />
    </div>
  </section>
);

const ProductCard = ({ img, name, desc, price }) => (
  <div className="card zoom-in">
    <img src={img} alt={name} />
    <h4>{name}</h4>
    <p>{desc}</p>
    <span>{price}</span>
  </div>
);

const SalesBanner = () => (
  <section className="sales-banner slide-left">
    <h3>BEST DEALS</h3>
    <p>Sales of the Week</p>
    <button>SHOP NOW</button>
  </section>
);

const Categories = () => (
  <section className="categories fade-in">
    <h3>OUR CATEGORIES</h3>
    <div className="category-list">
      {[
        { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", name: "Pizza" },
        { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", name: "Burger" },
        { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", name: "Sandwiches" },
        { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", name: "Pasta" },
        { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", name: "Coffee" },
        { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93", name: "Beverages" }
      ].map((cat, index) => (
        <div key={index} className="cat zoom-in">
          <img src={cat.img} alt={cat.name} />
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials fade-in">
    <h3 style={{ textAlign: 'center' }}>What Our Customers Say</h3>
    <div className="testimonial-list" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      <div className="testimonial zoom-in">
        <p>"Absolutely loved the hot chocolate! So creamy and delicious."</p>
        <strong>- Priya R.</strong>
      </div>
      <div className="testimonial zoom-in">
        <p>"The filter coffee takes me straight to my childhood mornings in Chennai!"</p>
        <strong>- Arjun M.</strong>
      </div>
      <div className="testimonial zoom-in">
        <p>"Tried their gourmet meal and it was top-notch. Highly recommended!"</p>
        <strong>- Sneha D.</strong>
      </div>
    </div>
  </section>
);


const Newsletter = () => (
  <section className="newsletter fade-in">
    <h3>Subscribe to our Newsletter</h3>
    <p>Get exclusive offers, recipes, and the latest news delivered straight to your inbox.</p>
    <div className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </section>
);


const Footer = () => (
  <footer className="footer fade-in">
    <div className="footer-content">
      <div className="footer-section about">
        <h4>About FoodieExpress</h4>
        <p>Your go-to destination for gourmet meals, beverages, and sweet treats.</p>
      </div>
      <div className="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h4>Contact Us</h4>
        <p>Email: support@foodieexpress.com</p>
        <p>Phone: +123 456 7890</p>
        <div className="social-icons">
          <a href="#" className="icon">📘</a>
          <a href="#" className="icon">📷</a>
          <a href="#" className="icon">🐦</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
    </div>
  </footer>
);



const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <ProductTabs />
          <SalesBanner />
          <Categories />
          <Testimonials />
          <Footer />
          
        </>
      } />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);



export default App;
