import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newsData from '../data/News.json';
import './News.css';

function News({ category }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mouseDownHandler = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const mouseLeaveHandler = () => setIsDown(false);
  const mouseUpHandler = () => setIsDown(false);

  const mouseMoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // სენსიტიურობა
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (id) => {
    navigate(`/article/${id}`);
  };

  // ფილტრაცია კატეგორიის მიხედვით (თუ გადმოცემულია)
  const filteredNews = category
    ? newsData.filter((news) => news.category === category)
    : newsData;

  return (
    <div className="news-wrapper">
      <div className="news-header">
        <h2 className="news-title">სიახლეები</h2>
        <span className="news-line"></span>
      </div>
      <div
        className="news-cards"
        ref={scrollRef}
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
      >
        {filteredNews.map(({ id, title, image, date }) => {
          const formattedDate = new Date(date).toLocaleDateString("ka-GE");
          return (
            <div key={id} className="news-card" onClick={() => handleClick(id)}>
              <img className="news-image" src={image} alt={title} />
              <div className="news-content">
                <p className="news-date">{formattedDate}</p>
                <h3 className="news-card-title">{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
