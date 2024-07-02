
import Head from "next/head";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react"

export default function profile() {

    const { data: session } = useSession();   

    return <>
        <Head>
            <title>Profile page</title>
        </Head>
        <div className="container">
            <div className="profilesettings">
                <div className="leftprofile_details flex">
                    <img src="/img/coder.png" alt="coder" data-aos="fade-left" />
                    <div className="w-100" data-aos="fade-up">
                        <div className='flex flex-sb flex-left mt-2'>
                            <h2>My Profile:</h2>
                            <h3>Harshit Singh <br /> Full Stack Developer</h3>
                        </div>
                        <div className="flex flex-sb mt-2">
                            <h3>Phone:</h3>
                            <input type="text" defaultValue="+91-9559771478" />
                        </div>
                        <div className="mt-2">
                            <input type="email" defaultValue={session ? <>{session.user.email}</> : 'harshitsingh2021@gmail.com'} />
                        </div>
                        <div className="flex flex-center w-100 mt-2">
                            <button>Save</button>
                        </div>
                    </div>

                </div>
                <div className="rightlogoutsec" data-aos="fade-left">
                    <div className="topaccoutnbox">
                        <h2 className="flex flex-sb">My Account <MdOutlineAccountCircle /></h2>
                        <hr />
                        <div className="flex flex-sb mt-1">
                            <h3>Active Account <br /> <span>{session ? <>{session.user.email}</> : 'Not Logged In'}</span></h3>
                            {/* <button>Log Out</button> */}
                            {session ? <button onClick={signOut}>Log Out</button> : <button onClick={signIn}>Log In</button>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}