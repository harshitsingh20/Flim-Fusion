import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link"
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function bollywood() {
    const { alldata, loading } = useFetchData('/api/getmovies');

    // filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === 'publish');

    const moviesdata = publishedData.filter(ab => ab.category === "bollywood");


    return <>
        <Head>
            <title>ALL Bollywood | Flim-Fusion</title>
            <meta name="description" content="All the Web Series" />
        </Head>
        <section className="genrenamesec">
            <div className="genrename">
                <h1>Bollywood</h1>
                <p>Experience the vibrant world of Bollywood with its dazzling dances, melodious music, and heartwarming stories. A cinematic extravaganza that captivates hearts worldwide.</p>
            </div>
        </section>
        <section className="genremoviesec">
            <div className="genremovie">

                {loading ? <Spinner /> : <>
                    {moviesdata.length === 0 ? <p className="nodatafound">No Series Found</p> : <> {moviesdata.map((movie) => (
                        <div className="mcard" key={movie._id}>
                            <Link href={`/movies/${movie.slug}`}>
                                <div className="cardimg">
                                    <img
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
                    ))}</>}
                </>}

            </div>
        </section>
    </>
}