import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import useFetchData from '@/hooks/useFetchData';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';
import Spinner from '@/components/Spinner';




export default function genres() {

    const router = useRouter();
    const { genre } = router.query
    // fetch movie data
    const { alldata, loading } = useFetchData(`/api/getmovies?genre=${genre}`)

    const filteredMovies = alldata.filter((item) => item.genre === item.genre)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 20);

    const genremovies = [...filteredMovies].reverse()


    const capitalizeTitle = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    // for title 
    const pageTitle = `${router.query.genre} - Genre | Flim-Fusion`;
    const capitalizedTitle = capitalizeTitle(pageTitle);

    return (

        <>
            <Head>
                <title>{capitalizedTitle}</title>
            </Head>
            <section className="genrenamesec">
                <div className="genrename">
                    <h1>Genre : {router.query.genre}</h1>
                    <p>From heart-pounding action to tear-jerking drama, genres offer a diverse cinematic experience. Choose your favorite genre and get ready to be transported into captivating storytelling.</p>
                </div>
            </section>
            <section className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {genremovies.length === 0 ? <p className="nodatafound">No Movie Found</p> :
                            <>
                                {genremovies.map((movie) => (
                                    <div className="mcard" key={movie._id}>
                                        <Link href={`/movies/${movie.slug}`}>

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
                            </>
                        }
                    </>}

                </div>
            </section>
        </>
    )
}


