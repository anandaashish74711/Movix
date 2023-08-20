import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  useEffect(() => {
    if (!loading && data?.results?.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const bg = url.backdrop + data?.results[randomIndex].backdrop_path;
      setBackground(bg);
    }
  }, [data, loading, url]);

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className='heroBanner' style={{ backgroundImage: `url(${background})` }}>
      <div className="backdrop-img"></div>
      <div className='wrapper'>
        <div className="HeroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV shows, and people to discover.</span>
          <div className='searchInput'>
            <input 
              type="text"
              placeholder='Search for a movie or TV show...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
