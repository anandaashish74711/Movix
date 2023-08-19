import React from 'react'
import './style.scss'
const HeroBanner = () => {
  return (
    <div className='heroBanner'>
        <div className='wrapper'>
            <div className="HeroBannerContent">
                <span className="title">Welcome.</span>
                <span className="subTitle">Millions of movie,TV shows and people to discover.
                </span>
                <div className='searchInput'>
                  <input 
                  type="text"
                  placeholder='search for a movie or tv show....'
                  />
                  <button>Search</button>
                </div>

            </div>
        </div>
    </div>
  );
}

export default HeroBanner