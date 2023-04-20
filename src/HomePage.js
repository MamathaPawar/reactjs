/*import React from 'react';*/
/*import React, { useState } from 'react';*/
import './App.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h2>Discover the Best Shows and Movies</h2>
        <form>
        <button type="submit" class="search-button">Search</button>

          <input type="text" class="search" placeholder="Search for a show or movie" />
         
        </form>
      </div>
      <div className="homepage-filter">
        <form>
        <label>Filter by:</label>
        <select>
          <option value="year">Year</option>
          <option value="platform">Platform</option>
        </select>
        </form>
      </div>
      
      <div className="sections">
              <ul className="section-menu">
                <li className="sec-items">
                  <a href="/2023">2023</a>
                </li>
                <li className="sec-item">
                  <a href="/jiocinema">jio Cinema</a>
                </li>
                <li className="sec-item">
                  <a href="/hotstar">Hot Star</a>
                </li>
                <li className="sec-item2">
                  <a href="primevidep">Prime Video</a>
                </li>
                <li className="sec-item2">
                  <a href="netflix">Net Flix</a>
                </li>
                <li className="sec-item2">
                  <a href="/SunNxt"> Sun NXT</a>
                </li>

              </ul>
            </div>
            <div className="homepage-grid">
        <div className="homepage-image">
        <img src={img1} alt="img1" />
          
          <div className="image-description">
            <p> Platform:Hotstar</p>
            <p>Release:1/6/23</p>
            <p>Amazing Webseries</p>
          </div>
        </div>
        <div className="homepage-image">
        <img src={img2} alt="img2" />
          <div className="image-description">
            <p>platform:PrimeVideo</p>
            <p>Release:12/9/23</p>
            <hp>Pan India Tollywood movie</hp>
          </div>
        </div>
        <div className="homepage-image">
        <img src={img3} alt="img3" />
          
          <div className="image-description">
            <p>Platform:Netflix</p>
            <p>Release:30/8/23</p>
            <p>Family entertinment movie</p>
          </div>
        </div>
        <div className="homepage-image">
        <img src={img4} alt="img4" />

          <div className="image-description">
            <p>Platfrom:SunNxt</p>
            <p>Release:10/5/23</p>
            <p>fanntastic bollywood movuw</p>
          </div>
        </div>
      </div>
          </div>
    
  );
}

export default HomePage;
