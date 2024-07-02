import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { FaBookmark, FaCheck, FaEye, FaHeart, FaImdb, FaStar, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { FaShareFromSquare } from 'react-icons/fa6';
import useFetchData from '@/hooks/useFetchData';

export default function moviesPost() {

    const router = useRouter();
    const { slug } = router.query

    // use hooks
    const { alldata, loading } = useFetchData(`/api/getmovies?slug=${slug}`);
    const { allmovie } = useFetchData(`/api/getmovies`);

    // filter publish movies
    const publishedData = allmovie.filter(ab => ab.status === 'publish');



    // share in whatsapp app
    const [showShareLinks, setShowShareLinks] = useState(false);
    const shareLinksRef = useRef(null);

    const handleButtonClick = () => {
        setShowShareLinks(!showShareLinks);
    };

    const handlePageClick = (event) => {
        if (shareLinksRef.current && !shareLinksRef.current.contains(event.target)) {
            setShowShareLinks(false);
        }
    };

    useEffect(() => {
        // Attach the click event listener to the document
        document.addEventListener('click', handlePageClick);
        return () => {
            // Cleanup the event listener when the component is unmounted
            document.removeEventListener('click', handlePageClick);
        };
    }, []);
    //



    // scroll left right data
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollLeft -= 300; // Adjust the scroll distance as needed
    };

    const scrollRight = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollLeft += 500; // Adjust the scroll distance as needed
    };


    return <>
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div>
                <div className="slideimagebx" >
                    <img src={alldata && alldata[0]?.bgposter} alt='no image' loading="lazy" />
                </div>
                <div className="mainmoviebx" ref={shareLinksRef}>
                    <div className="leftdata">
                        <div className="leftimgbx">
                            <img src={alldata && alldata[0]?.smposter} alt='no image' loading="lazy" />
                            <div className="seenonly">
                                <div className="seenwatch">
                                    <button><FaBookmark className="sebtn" />Watchlist</button>
                                    <button><FaCheck className="sebtn" />Seen</button>
                                    <button><FaThumbsUp className="sebtn" />Like</button>
                                    <button><FaThumbsDown className="sebtn" />Dislike</button>
                                </div>
                                <a target='_black' href={`${alldata && alldata[0]?.watchonline}`}><button className="watchmoviebtn">Click to watch online</button></a>
                            </div>
                        </div>
                        <div className="rating">
                            <h3>RATING</h3>
                            <div className="rate">
                                <FaImdb className="faImdb" />
                                <h4>{alldata && alldata[0]?.rating} <span>IMDB</span></h4>
                            </div>
                        </div>
                        <div className="rating">
                            <h3>GENRE</h3>
                            <h4 className='uppercase'>{alldata && alldata[0]?.genre.join(', ')}</h4>
                        </div>
                        <div className="rating">
                            <h3>RUNTIME</h3>
                            <h4>{alldata && alldata[0]?.duration}</h4>
                        </div>
                        <div className="rating">
                            <h3>YEAR</h3>
                            <h4>{alldata && alldata[0]?.year}</h4>
                        </div>
                        <div className="rating">
                            <h3>QUALITY</h3>
                            <h4>{alldata && alldata[0]?.quaility}</h4>
                        </div>
                    </div>
                    <div className="rightdata">
                        <div className="movietitle">
                            <h1>{alldata && alldata[0]?.slug.replaceAll('-', ' ')}</h1>
                            <button onClick={handleButtonClick} className="faShareFromSquare"><FaShareFromSquare /></button>

                        </div>
                        <p className="dpera">DOWNLOAD FREE NOW</p>
                        <div className="moviedescription">
                            <article className="movieinfo">
                                <h3 className='uppercase' >{alldata && alldata[0]?.titlecategory} category Info :</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className='uppercase'>&#9642; titlecategory Name:</td>
                                            <td>{alldata && alldata[0]?.title}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Release Year:</td>
                                            <td>{alldata && alldata[0]?.year}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Genre:</td>
                                            <td className="uppercase">{alldata && alldata[0]?.genre.join(', ')}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Language:</td>
                                            <td>{alldata && alldata[0]?.language}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Subtitle:</td>
                                            <td>{alldata && alldata[0]?.subtitle}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Size:</td>
                                            <td>{alldata && alldata[0]?.size}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Quality:</td>
                                            <td>{alldata && alldata[0]?.quaility}</td>
                                        </tr>
                                        <tr>
                                            <td>&#9642; Format:</td>
                                            <td>MKV</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </article>
                            <article>
                                <div className="storyline">
                                    <h3>Sunopsis / Story Line :</h3>
                                    <p>{alldata && alldata[0]?.description}</p>
                                </div>
                            </article>
                            <section className="downloadsec">
                                <h2>G-Drive [GDToT] Download Links</h2>
                                <div className="downloadlinks">
                                    <a href={alldata && alldata[0]?.downloadlink['480p']} target="_blank">Download 480p</a>
                                    <a href={alldata && alldata[0]?.downloadlink['720p']} target="_blank">Download 720p</a>
                                    <a href={alldata && alldata[0]?.downloadlink['1080p']} target="_blank">Download 1080p</a>
                                    <a href={alldata && alldata[0]?.downloadlink['4k']} target="_blank">Download 2160p-4k</a>
                                </div>
                            </section>
                        </div>
                        <div className="youtubeiframe">
                            <h3 id="movietrailer" className='uppercase'>titlecategory Trailer :</h3>
                            <iframe width="100%" height="370" src={alldata && alldata[0]?.youtubelink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="raletedmovies">
                    <h3>LATEST MOVIES :</h3>
                    <div className="scrollcards">
                        {publishedData.slice(0, 12).map((movie) => (
                            <div className="card" key={movie._id}>
                                <Link href={`/movies/${movie.slug}`}>
                                    <div className="cardimg">
                                        <img src={movie.smposter} alt="no image" loading="lazy" />
                                    </div>
                                    <div className="contents">
                                        <h5>{movie.movieshortname}</h5>
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
                    <div className="cardbuttons">
                        <button onClick={scrollLeft} className="cardleft">&#8592;</button>
                        <button onClick={scrollRight} className="cardRight">&#8594;</button>
                    </div>
                </div>
                <div className="sharelinks" style={{ display: showShareLinks ? 'flex' : 'none' }} >
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://www.makmovies.in/${router.query.slug}`}`} target='_black'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#25D366"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z" /></svg></Link></div>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://www.makmovies.in/${router.query.slug}`}`} target='_black'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#E4405F'><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg></Link></div>
                    <div className="svg"><Link href={`https://api.whatsapp.com/send?text=${`https://www.makmovies.in/${router.query.slug}`}`} target='_black'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#1877F2'><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg></Link></div>

                </div>
            </div>
        </>
    </>
}