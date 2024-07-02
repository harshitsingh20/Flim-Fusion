import Head from "next/head";
import Link from "next/link";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbCategoryPlus } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";
import { RiDraftLine } from "react-icons/ri";
import { FcRating } from "react-icons/fc";
import useFetchData from "@/hooks/useFetchData";
import Spinner from "@/components/Spinner";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";

export default function Home() {

  const { alldata, loading } = useFetchData(`/api/getmovies`);

  const publishedMovies = alldata.filter(ab => ab.status === "publish");
  const draftmovies = alldata.filter(ab => ab.status === 'draft');

  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    // Loading state, loader or any other indicator
    return <Loading/>;
  }

  // Check if there's no active session and redirect to login page
  if (!session) {
    router.push('/auth');
    return null; // Return null or any loading indicator while redirecting
  }


  if (session) {
    return (
      <>
        <Head>
          <title>Movie App | Backend</title>
          <meta name="description" content="Movie website backend" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {loading ? <Loading /> : <div className="container">
          <div className="topheadertitle flex flex-sb">
            <div>
              <h1 className="mb-1">Explore all type of movies here</h1>
              <p className="mb-2 w-66">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam at nulla nesciunt libero eius molestias ratione placeat !</p>
              <Link href="/"><button>Exclusive On <span>Flim-Fusion</span></button></Link>
            </div>
            <img src="/img/rocket.png" alt="rocket" />
          </div>

          <div className="fourcards flex flex-sb">
            <div className="fcard">
              <div className="flex flex-sb">
                <div className="fcardsvg">
                  <BiSolidMoviePlay />
                </div>
                <h3>Total Movies</h3>
                <BsThreeDotsVertical />
              </div>
              <div className="flex flex-sb wh-100">
                <img src="/img/chartone.svg" alt="chart" />
                <h4>{publishedMovies.length}</h4>
              </div>
            </div>
            <div className="fcard">
              <div className="flex flex-sb">
                <div className="fcardsvg">
                  <TbCategoryPlus />
                </div>
                <h3>Category</h3>
                <BsThreeDotsVertical />
              </div>
              <div className="flex flex-sb wh-100">
                <img src="/img/charttwo.svg" alt="chart" />
                <h4>7</h4>
              </div>
            </div>
            <div className="fcard">
              <div className="flex flex-sb">
                <div className="fcardsvg">
                  <RiMovie2Line />
                </div>
                <h3>All Genre</h3>
                <BsThreeDotsVertical />
              </div>
              <div className="flex flex-sb wh-100">
                <img src="/img/chartthree.svg" alt="chart" />
                <h4>11</h4>
              </div>
            </div>
            <div className="fcard">
              <div className="flex flex-sb">
                <div className="fcardsvg">
                  <RiDraftLine />
                </div>
                <h3>Draft Movies</h3>
                <BsThreeDotsVertical />
              </div>
              <div className="flex flex-sb wh-100">
                <img src="/img/chartfour.svg" alt="chart" />
                <h4>{draftmovies.length}</h4>
              </div>
            </div>
          </div>

          <div className="moviecards flex flex-col flex-left gap-2 w-100">
            <div className="flex flex-sb w-100 movietitle">
              <h2>List Of Latest Movies</h2>
              <Link href="/addmovie"><button>Add Movie</button></Link>
            </div>
            {loading ? <div><Spinner /></div> : <> {publishedMovies.slice(0, 3).map((movie) => {
              return <div className="moviecard" key={movie._id}>
                <img src={movie.bgposter || "/img/noimage.jpg"} alt="movie" />
                <div className="moviecardinfo">
                  <div>
                    <h3>{movie.slug}</h3>
                    <p>{movie.category}</p>
                  </div>
                  <Link href="/">{movie.downloadlink['480p']}</Link>
                  <div>
                    <FcRating /> {movie.rating}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Link href={`/movies/edit/${movie._id}`}><button>Update Movie</button></Link>
                    <Link href={`/movies/delete/${movie._id}`}><button>Delete Movie</button></Link>
                  </div>
                </div>
              </div>
            })}</>}


            <Link href='/movies' className="loadmorehomebtn w-100 flex flex-center mt-2"><button>Load more</button></Link>


          </div>
        </div>}
      </>
    );
  }
}
