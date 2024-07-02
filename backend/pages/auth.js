import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import Head from "next/head";

export default function Auth() {
    const { data: session } = useSession();
    
    return <>
        <Head>
            <title>Movie App | Backend</title>
        </Head>
        <div className="container">
            <div className="loginfront flex flex-center" >
                <div className="loginbox flex flex-col">
                    <Image src='/img/coder.png' width={250} height={250} />
                    <h1>Welcome Admin of the Harshit Singh 👋</h1>
                    <p>Visit our main website <a href="https://harshit.in">Harshit Singh</a></p>

                    {session ? <button className='mt-2' onClick={signOut} >Log Out This Account</button> : <button className='mt-2' onClick={signIn} >Login with Google</button>}
                    
                </div>
            </div>
        </div>

    </>
}