import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { AiFillSetting } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";

export default function contact() {
    return <>
        <div className="contactpage">
            <div className="contactcard">
                <div className="contactdesign">
                    <div className="topccard">
                        <div className="tcardsvg">
                            <HiMiniBars3CenterLeft />
                            <AiFillSetting />
                        </div>
                        <div className="usercoderimg">
                            <img src="/img/coder.jpg" alt="coder" />
                        </div>
                        <div className="usercoderinfo">
                            <h1>Harshit Singh</h1>
                            <h3>Full Stack Developer</h3>
                            <div className="usercodersvg">
                                <Link href='/'><IoLogoInstagram /></Link>
                                <Link href='/'><RiTelegramLine /></Link>
                                <Link href='/'><SiGithub /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="bottomcard">
                        <Link href='/' className="followbtn">Follow</Link>
                        <div className="bcardtext">
                            <p>Learn More About My Profile</p>
                            <FaArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}