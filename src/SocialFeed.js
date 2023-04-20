import React from "react";
import Social1 from './Social1.png';
import Social2 from './Social2.png';
import Social3 from './Social3.png';
import Social4 from './Social4.png';
import Social5 from './Social5.png';
import Social6 from './Social6.png';


const SocialFeed = () => {
  return (
    <div className="social-feed">
      <h2 className="sh2">Social Feed</h2>
      <div className="social-item">
        <img src={Social1} alt="Social 1" />
        <div className="description">
          <p>Image 1 Description</p>
        </div>
      </div>
      <div className="social-item">
        <img src={Social2} alt="Social 2" />
        <div className="description">
          <p>Image 2 Description</p>
        </div>
      </div>
      <div className="social-item">
        <img src={Social3} alt="Social 3" />
        <div className="description">
          <p>Image 3 Description</p>
        </div>
      </div>
      <div className="social-item">
        <img src={Social4} alt="Social 4" />
        <div className="description">
          <p>Image 4 Description</p>
        </div>
      </div>
      <div className="social-item">
        <img src={Social5} alt="Social 5" />
        <div className="description">
          <p>Image 5 Description</p>
        </div>
      </div>
      <div className="social-item">
        <img src={Social6} alt="Social 6" />
        <div className="description">
          <p>Social 6 Description</p>
        </div>
      </div>
    </div>
  );
};

export default SocialFeed;