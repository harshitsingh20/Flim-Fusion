
import Movie from "@/components/Movie";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Addmovie() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Loading state, loader or any other indicator
    return <div className='full-h flex flex-center'>
      <div className="loading-bar">Loading</div>
    </div>;
  }

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/auth');
    }
  }, [router, session]);



  if (session) {

    return <>
      <div className="addblogspage container">
        <div className="blogsadd">
          <div className="titledashboard w-100 flex flex-sb">
            <div>
              <h2>Add movie</h2>
              <h3>ADMIN PANEL</h3>
            </div>
          </div>
          <Movie />
        </div>
      </div>
    </>
  }
}