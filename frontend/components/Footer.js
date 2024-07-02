import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className='m-auto footersec'>
                    <div className="fcontent">
                        <div className="flogo">
                            <h1><Link href='/'>Flim-Fusion</Link></h1>
                        </div>
                        <div className="quicklink">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/series'>Series</Link></li>
                            <li><Link href='/genre'>Genre</Link></li>
                            <li><Link href='/all'>All Movies</Link></li>
                            <li><Link href='/genre'>Category</Link></li>
                            <li><Link href='/bollywood'>Bollywood</Link></li>
                            <li><Link href='/hollywood'>Hollywood</Link></li>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright &copy; 2023 All rights reserved | by&nbsp;<Link href="/">Flim-Fusion</Link></p>
                    </div>
                    <div className="fperasec">
                        <p>Disclaimer :- We does not host any files on it's servers. All files or contents hosted on third party websites | We does not accept responsibility for contents hosted on third party websites. We just index those links which are already available in internet</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer