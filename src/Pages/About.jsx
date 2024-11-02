// src/components/About.js
import React from 'react';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
      <h1 className="heading-2">
        About Us
        <hr />
      </h1>
        <p>
          Welcome to Hobson's Blog! We are passionate about bringing you the latest news, trends, and insights from various fields, including technology, food, fashion, and lifestyle. Our goal is to create a space where readers can explore and discover valuable information that enriches their lives.
        </p>
        
        <h3>Who We Are</h3>
        <p>
          Founded by Abdiaziz Mohamed, a dedicated writer and frontend developer based in Kenya, our blog aims to share knowledge and experiences that resonate with our audience. With a keen interest in diverse topics, I strive to deliver well-researched content that is both informative and engaging.
        </p>
        
        <h3>Our Mission</h3>
        <p>
          At Hobson's , our mission is to empower readers with information that inspires action and fosters curiosity. We believe that knowledge is a powerful tool that can bring about positive change in individuals and communities.
        </p>
        
        <h3>What We Cover</h3>
        <ul>
          <li>News Articles: Stay updated with the latest headlines in technology, food, fashion, and lifestyle.</li>
          <li>In-Depth Guides: Explore comprehensive guides that provide insights into various subjects.</li>
          <li>Trendy Topics: Discover what's hot and trending in today's world.</li>
          <li>Personal Insights: Gain perspective from my experiences as a developer and content creator.</li>
        </ul>
        
        <h3>Get Involved</h3>
        <p>
          Your feedback and suggestions are valuable to us! Feel free to reach out through our <a href="/contact">Contact Us</a> or connect with us on social media.
        </p>

        <h3>Join Our Community</h3>
        <p>
          Subscribe to our newsletter to receive the latest updates, tips, and exclusive content directly to your inbox!
        </p>
      </div>
    </section>
  );
};

export default About;
