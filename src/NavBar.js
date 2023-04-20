import React from 'react';
import logo from './stellify-logo.jpg';
export default function NavBar(){
    return (
        <div>
        <nav className="navbar">
          <div className="navbar-left">
          
          <img src={logo} alt="Logo" width="50" height="50" />
            <h3>OTT Shows</h3>
          </div>
          <div className="navbar-right">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/dashboard">My Dashboard</a>
              </li>
              <li className="nav-item">
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="navbar-2">
            <div className="navbar-left">
              <ul className="nav-menu">
                <li className="nav-item">
                  <a href="/shows">Shows</a>
                </li>
                <li className="nav-item">
                  <a href="/movies">Movies</a>
                </li>
              </ul>
            </div>
    
            
          </nav>
          
          
    </div>
    
    
    
      );
    }
