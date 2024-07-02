import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import useFetchData from '@/hooks/useFetchData';


export default function all() {

  // use hooks
  const { alldata, loading } = useFetchData('/api/getmovies');

  // filter for published movies required
  const publishedData = alldata.filter(ab => ab.status === 'publish');

  const [selectedGenre, setSelectedGenre] = useState('All Movies');

  const genres = ['All Movies', 'action', 'adventure', 'animation', 'comedy', 'crime', 'drama', 'english Movies', 'horror', 'romance', 'thriller', 'science_fiction'];
  const categories = ["bollywood", "hollywood", "south", "gujarati", "marvel_studio", "tv_Shows", "web_series"];

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };
  
  const filteredData = publishedData.filter(movie => {
    if (selectedGenre === 'All Movies') return true;
    if (categories.includes(selectedGenre)) {
      return movie.category === selectedGenre;
    } else {
      return movie.genre.includes(selectedGenre);
    }
  });
  

  return (
    <>
      <Head>
        <title>All Movies & Web Series Download | Flim-Fusion</title>
      </Head>
      <section className="genrenamesec">
        <div className="genrename">
          <h1>All Movies & Series</h1>
          <p>Indulge in the magic of cinema, where genres blend seamlessly, delivering action, romance, drama, and more. Enjoy an immersive experience that sparks joy and leaves you wanting more.</p>
        </div>
      </section>
      <div className="moviestegs" >
        {/* Mapping over the genres array to generate buttons */}
        {genres.map(genre => (
          <button
            key={genre}
            className={selectedGenre === genre ? 'active' : ''}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
        {categories.map(category => (
          <button
            key={category}
            className={selectedGenre === category ? 'active' : ''}
            onClick={() => handleGenreClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <section className="genremoviesec">
        <div className="genremovie">
          {filteredData.map((movie) => (
            <div className="mcard" key={movie._id}>
              <Link href="/">

                <div className="cardimg">
                  <img
                    key={movie._id}
                    src={movie.smposter}
                    alt="image"
                    loading="lazy"
                  />
                </div>
                <div className="contents">
                  <h5>{movie.title}</h5>
                  <h6>
                    <span>{movie.year}</span>
                    <div className="rate">
                      <i className="cardfas">
                        <FaHeart />
                      </i>
                      <i className="cardfas">
                        <FaEye />
                      </i>
                      <i className="cardfas">
                        <FaStar />
                      </i>
                      <h6>{movie.rating}</h6>
                    </div>
                  </h6>
                </div>

              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* Element to trigger loading more data */}
      {/* <div ref={loadMoreRef}></div> */}
    </>
  )
}

