import React from "react";
import news1 from './news1.png';
import news2 from './news2.png';

const NewsPanel = () => {
  return (
    <div className="news-panel">
      <h2 className="Newngsheading">NEWS</h2>
      <div className="news-item">
        <img src={news1} alt="news1" />
        <div className="content">
          <p className="image-desc">Apple CEO Tim Cook meets PM Modi, promises doubling of jobs to 2 lakh</p>
          <br />
          <p className="description">Last month, an armed mob of around 1,000 people vandalised a madrassa in Bihar and set fire to its 113-year-old library, leaving its collection of over 4,500 books reduced to ashes</p>
        </div>
      </div>
      <div className="news-item">
        <div className="content">
          
        </div>
        <img src={news2} alt="news2" />
        <div className="content">
          <p className="image-desc">Straight Bat: Azeem has special place in Hyderabad cricket</p>
          <br />
          <p className="description">Singareni nails Kishan for lies on fiscal health
Counters his misleading claims about company’s loans, net profit, employees’ salaries

</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPanel;
 