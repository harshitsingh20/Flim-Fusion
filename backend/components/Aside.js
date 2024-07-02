import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Aside() {

    const { data: session } = useSession();

    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleClick = () => {
        setClicked(!clicked);
    }
    const handleLinkClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    }

    useEffect(() => {
        // Update active link state when the page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]);

    return <>
        <div className="aside">
            <div className="logo flex">
                <BiCameraMovie />
                <Link href='/'><h1>MOVIES</h1></Link>
            </div>
            <ul className="mt-2">
                <Link href="/" className={activeLink === '/' ? "active" : ''} onClick={() => handleLinkClick('/')}><li><div><IoHomeSharp /></div>Dashboard</li></Link>
                <Link href="/movies" className={activeLink === '/movies' ? "active" : ''} onClick={() => handleLinkClick('/movies')}><li><div><BiSolidCameraMovie /></div>Movies</li></Link>
                <Link href="/addmovie" className={activeLink === '/addmovie' ? "active" : ''} onClick={() => handleLinkClick('/addmovie')}><li><div><MdOutlinePlaylistAdd /></div>Add</li></Link>
                <Link href="/draft" className={activeLink === '/draft' ? "active" : ''} onClick={() => handleLinkClick('/draft')}><li><div><RiDraftFill /></div>Draft</li></Link>
            </ul>
            <h3 className="mt-2">Account Pages</h3>            
            <ul className="mt-1">
                <Link href="/profile" className={activeLink === '/profile' ? "active" : ''} onClick={() => handleLinkClick('/profile')}><li><div><FaUser /></div>Profile</li></Link>
                <Link href="/auth" className={activeLink === '/auth' ? "active" : ''} onClick={() => handleLinkClick('/auth')}><li><div><PiSignInBold /></div>{session ? "Sign Out" : "Sign In"}</li></Link>
            </ul>
        </div>
    </>
}