import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";


export default function Movie(

    {
        _id,
        title: existingTitle,
        slug: existingSlug,
        bgposter: existingBgposter,
        smposter: existingSmposter,
        titlecategory: existingTitlecategory,
        description: existingDescription,
        rating: existingRating,
        duration: existingDuration,
        year: existingYear,
        genre: existingGenre,
        language: existingLanguage,
        subtitle: existingSubtitle,
        size: existingSize,
        quaility: existingQuaility,
        youtubelink: existingYoutubelink,
        watchonline: existingWatchonline,
        category: existingCategory,
        downloadlink: existingDownloadlink,
        status: existingStatus,
    }

) {

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const [title, setTitle] = useState(existingTitle || '');
    const [slug, setSlug] = useState(existingSlug || '');
    const [bgposter, setBgposter] = useState(existingBgposter || '');
    const [smposter, setSmposter] = useState(existingSmposter || '');
    const [titlecategory, setTitlecategory] = useState(existingTitlecategory || ''); //
    const [description, setDescription] = useState(existingDescription || '');
    const [rating, setRating] = useState(existingRating || '');
    const [duration, setDuration] = useState(existingDuration || '');
    const [year, setYear] = useState(existingYear || '');
    const [genre, setGenre] = useState(existingGenre || []);
    const [language, setLanguage] = useState(existingLanguage || ''); //
    const [subtitle, setSubtitle] = useState(existingSubtitle || ''); //
    const [size, setSize] = useState(existingSize || ''); //
    const [quaility, setQuaility] = useState(existingQuaility || ''); //
    const [youtubelink, setYoutubelink] = useState(existingYoutubelink || ''); //
    const [watchonline, setWatchonline] = useState(existingWatchonline || ''); //
    const [downloadlink, setDownloadlink] = useState(existingDownloadlink || {
        "480p": "",
        "720p": "",
        "1080p": "",
        "4k": ""
    });
    // not use for database
    const [showInputs, setShowInputs] = useState({
        "480p": false,
        "720p": false,
        "1080p": false,
        "4k": false
    });
    const [category, setCategory] = useState(existingCategory || '');
    const [status, setStatus] = useState(existingStatus || '');


    async function createMovie(ev) {
        ev.preventDefault();

        const data = { title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility, youtubelink, language, watchonline, downloadlink, category, status };

        if (_id) {
            await axios.put('/api/getmovies', { ...data, _id })
        } else {
            await axios.post('/api/getmovies', data);
        }

        setRedirect(true);
    };


    if (redirect) {
        router.push('/')
        return null;
    };

    // url for every space will be generate - for every time press space
    const handleSlugChange = (ev) => {
        const inputValue = ev.target.value;
        // console.log("Input Value:", inputValue);

        const newSlug = inputValue
            // Replace spaces with hyphens
            .replace(/\s+/g, '-');

        console.log("New Slug:", newSlug);
        setSlug(newSlug);
    };

    // movie category
    const categories = ["Bollywood", "Hollywood", "South", "Gujarati", "Marvel_Studio", "Tv_Shows", "Web_Series"];


    // download links functions

    const handleInputChange = (resolution, value) => {
        setDownloadlink(prevState => ({
            ...prevState,
            [resolution]: value
        }));
    };

    const toggleInputVisibility = resolution => {
        setShowInputs(prevState => ({
            ...prevState,
            [resolution]: !prevState[resolution]
        }));
    };

    const resolutions = ["480p", "720p", "1080p", "4k"];
    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>


        <form onSubmit={createMovie} className='addmovieform'>

            <div className="w-100 flex gap-3 mt-1">
                {bgposter ? <div className="bgposter flex flex-col w-70 flex-left">
                    <img src={bgposter} id="prv" alt="image" />
                    <label htmlFor="prv" className="w-100">Background Image Preview</label>
                </div> : null}
                {smposter ? <div className="smposter flex flex-col w-33 flex-left">
                    <img src={smposter} id="sprv" alt="image" />
                    <label htmlFor="sprv">Smposter Preview</label>
                </div> : null}
            </div>

            <div className="formdata w-100 flex flex-sb mt-3 flex-left">

                <div className="w-50 flex flex-col flex-left">

                    {/* Movie Background Image */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="bgposter">Background Poster</label>
                        <input type="text" id='bgposter' placeholder='Bgposter image link'
                            value={bgposter}
                            onChange={ev => setBgposter(ev.target.value)}
                        />
                    </div>


                    {/* Movie title */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' required placeholder='Enter small title'
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                        />
                    </div>

                    {/* description movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="description">Storyline</label>
                        <textarea type="text" id='description' placeholder='Enter Small Storyline'
                            value={description}
                            onChange={ev => setDescription(ev.target.value)}
                        />
                    </div>

                    {/* rating movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id='rating' placeholder='rating'
                            value={rating}
                            onChange={ev => {
                                // Ensure the input does not exceed 10.0
                                let newValue = ev.target.value <= 10.0 ? ev.target.value : 10.0;
                                // Ensure the input is not less than 0
                                newValue = newValue >= 0 ? newValue : 0;
                                setRating(newValue);
                            }}
                            step="0.1" // Define the step increment as 0.1
                            max="10.0" // Set the maximum value to 10.0
                            min="0"    // Set the minimum value to 0
                        />
                    </div>

                    {/* duration movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="duration">Duration</label>
                        <input type="text" id='duration' placeholder='Duration of the movie'
                            value={duration}
                            onChange={ev => setDuration(ev.target.value)}
                        />
                    </div>

                    {/* watchonline */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="watchonline">watch online Link</label>
                        <input type="text" id='watchonline' placeholder='Movie watch online link'
                            value={watchonline}
                            onChange={ev => setWatchonline(ev.target.value)}
                        />
                    </div>

                    {/* Downloadlink */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="downloadlink">Download Link</label>
                        <div className="flex gap-1">
                            <div className={showInputs['480p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('480p')}>{showInputs['480p'] ? `Hide 480p` : `Show 480p`} </div>
                            <div className={showInputs['720p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('720p')}>{showInputs['720p'] ? `Hide 720p` : `Show 720p`} </div>
                            <div className={showInputs['1080p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('1080p')}>{showInputs['1080p'] ? `Hide 1080p` : `Show 1080p`} </div>
                            <div className={showInputs['4k'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('4k')}>{showInputs['4k'] ? `Hide 4k` : `Show 4k`} </div>
                        </div>
                        {resolutions ? <>{resolutions.map(resolution => (
                            <div key={resolution} className="w-100" >
                                {showInputs[resolution] && (
                                    <>
                                        {/* <label htmlFor={`downloadlink${resolution}`}>{resolution} Download Link</label> */}
                                        <input
                                            type="text"
                                            id={`downloadlink${resolution}`}
                                            placeholder={`${resolution} Download link`}
                                            value={downloadlink[resolution]}
                                            onChange={ev => handleInputChange(resolution, ev.target.value)}
                                        />
                                    </>
                                )}
                            </div>
                        ))}</> : null}

                    </div>


                    {/* Movie status (Draft or Publish) */}
                    <div className='w-100 flex flex-col flex-left mb-2'>
                        <label>Status</label>
                        <div className="flex gap-05">
                            <input
                                type="radio"
                                id="draft"
                                name="status"
                                value="draft"
                                checked={status === 'draft'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="draft" >Draft</label>
                        </div>
                        <div className="flex gap-05">
                            <input
                                type="radio"
                                id="publish"
                                name="status"
                                value="publish"
                                checked={status === 'publish'}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="publish">Publish</label>
                        </div>
                    </div>


                </div>


                <div className="w-50 flex flex-col flex-left">
                    {/* Movie Small Poster */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="smposter">Main Poster</label>
                        <input type="text" id='smposter' placeholder='smposter image link'
                            value={smposter}
                            onChange={ev => setSmposter(ev.target.value)}
                        />
                    </div>

                    {/* Movie slug url */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="slug">Slug (URL)</label>
                        <input type="text" id='slug' required placeholder='Enter slug title'
                            value={slug}
                            onChange={handleSlugChange}
                        />
                    </div>

                    {/* Release Year of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="year">Year</label>
                        <input type="text" id='year' placeholder='Release Year'
                            value={year}
                            onChange={ev => setYear(ev.target.value)}
                        />
                    </div>
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="youtubelink">Youtube Link</label>
                        <input type="text" id='youtubelink' placeholder='Youtube embed link'
                            value={youtubelink}
                            onChange={ev => setYoutubelink(ev.target.value)}
                        />
                    </div>

                    {/* language of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="language">Select language</label>
                        <select onChange={(e) => setLanguage(e.target.value)} name="language" id="language" value={language}>
                            <option value="">Select language</option>
                            <option value="Hindi (ORG)">Hindi (ORG)</option>
                            <option value="English">English</option>
                            <option value="Hindi - English">Hindi - English</option>
                            <option value="Dual Audio [Hindi (ORG) + English]">Dual Audio [Hindi (ORG) + English]</option>
                            <option value="Dual Audio [Hindi (Cleaned) + English]">Dual Audio [Hindi (Cleaned) + English]</option>
                        </select>
                    </div>

                    {/* Quality of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="quaility">Select Quaility</label>
                        <select onChange={(e) => setQuaility(e.target.value)} name="quaility" id="quaility" value={quaility}>
                            <option value="">Select Quaility</option>
                            <option value="480p || 720p || 1080p - WEB-DL">480p || 720p || 1080p - WEB-DL</option>
                            <option value="480p || 720p || 1080p || 2160p 4K - WEB-DL">480p || 720p || 1080p || 2160p 4K - WEB-DL</option>
                            <option value="480p || 720p || 1080p - HDTS">480p || 720p || 1080p - HDTS</option>
                        </select>
                    </div>

                    {/* subtitle of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="subtitle">Select subtitle</label>
                        <select onChange={(e) => setSubtitle(e.target.value)} name="subtitle" id="subtitle" value={subtitle}>
                            <option value="">Select subtitle</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </select>
                    </div>


                    {/* size of the movie */}
                    <div className='w-100 flex flex-col flex-left mb-2' data-aos="fade-up">
                        <label htmlFor="size">Select size</label>
                        <input type="text" id='size' placeholder='350MB || 1GB || 2GB || 4GB -- Each Quality'
                            value={size}
                            onChange={ev => setSize(ev.target.value)}
                        />
                    </div>


                    <div className="moviecategory flex flex-sb flex-left">
                        {/* Movie Title category */}
                        <div className='w-50 flex flex-col flex-left mb-2'>
                            <label>Title Category :</label>
                            {['Movies', 'Series', 'Shows'].map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input
                                        type="radio"
                                        id={cat.toLowerCase()}
                                        name="titlecategory"
                                        value={cat.toLowerCase()}
                                        checked={titlecategory === cat.toLowerCase()}
                                        onChange={(e) => setTitlecategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* Movie category */}
                        <div className='w-50 flex flex-col flex-left mb-2'>
                            <label>Category :</label>
                            {categories.map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input
                                        type="radio"
                                        id={cat.toLowerCase()}
                                        name="category"
                                        value={cat.toLowerCase()}
                                        checked={category === cat.toLowerCase()}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* Movie Genre */}
                        <div className='w-50 flex flex-col flex-left mb-2'>
                            <label>Genre:</label>
                            <div className='flex flex-col flex-left'>
                                {['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction'].map((genreOption) => (
                                    <label key={genreOption} className="flex gap-05">
                                        <input
                                            type="checkbox"
                                            value={genreOption.toLowerCase()}
                                            checked={genre.includes(genreOption.toLowerCase())}
                                            onChange={(e) => {
                                                const selectedGenre = e.target.value;
                                                setGenre((prevGenres) => {
                                                    if (prevGenres.includes(selectedGenre)) {
                                                        return prevGenres.filter((genre) => genre !== selectedGenre);
                                                    } else {
                                                        return [...prevGenres, selectedGenre];
                                                    }
                                                });
                                            }}
                                        />
                                        {genreOption}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            {/* for save all data in mongodb for sumbmit button */}
            <div className='w-100 mb-2'>
                <button type='submit' className='w-100 flex-center'>SAVE DATA</button>
            </div>

        </form>

    </>
}

