import React from 'react'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const SliderImage = () => {
    const images = [
        'https://www.smartprix.com/bytes/wp-content/uploads/2022/12/Avatar.jpeg',
        'https://therideronline.com/wp-content/uploads/2022/12/Wakanda-Forever-1-900x473.jpg',
        '/img/121215.jpg',
        // Add more image paths here...
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 4500);
        return () => clearInterval(interval);
    }, []);


    const contentList = [
        {
            duration: '1h 49min',
            rating: '7.8',
            genre: 'Action / Sci-Fi',
            title: 'Avatar: The Way of Water',
            description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.'
        },
        {
            duration: '2h 41min',
            rating: '7.1',
            genre: 'Comady / Action / Sci-Fi',
            title: 'Black Panther: Wakanda Forever',
            description: 'Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T Challa s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.),'
        },
        {
            duration: '1h 49min',
            rating: '6.5',
            genre: 'Action / Adventure / Sci-Fi',
            title: 'Pirates Of The Caribbean',
            description: 'Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disneys theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.'
        },
        // Add more content objects here if needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentContent = contentList[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
        }, 4500);

        return () => clearInterval(interval);
    }, [contentList.length]);
    return (
        <>
            <div className={styles.slideimagebx} >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Slider Image"
                        className={index === currentImage ? styles.activeImage : styles.inactiveImage}
                        loading="lazy"
                    />
                ))}
                <div className={styles.content}>
                    <h6>Duration: <span id="header_dur">{currentContent.duration}</span></h6>
                    <h3 id="header_gen"><span className={styles.star}>&#9733;</span>{currentContent.rating}
                        <span>{currentContent.genre}</span>
                    </h3>
                    <h1 id="header_title">{currentContent.title}</h1>
                    <p id="header_pra">{currentContent.description}</p>
                    <div className={styles.btns}>
                        <a href="/"> <button>&#9654; WATCH</button></a>
                        <a href="/"><button className={styles.btn_download}><FontAwesomeIcon icon={faDownload} className={styles.faDownload} /> DOWNLOAD</button></a>
                    </div>
                </div>
                <div className={styles.slider_btns}>
                    {contentList.map((_, index) => (
                        <h6
                            key={index}
                            style={{ backgroundColor: currentIndex === index ? 'white' : '#555' }}
                        ></h6>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SliderImage