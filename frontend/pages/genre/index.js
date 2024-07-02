import React from 'react'
import Genrecard from '@/components/Genrecard'
import Head from 'next/head'



const category = (props) => {
    return (
        <>
        <Head>
            <title>Genre - Category | Flim-Fusion</title>
        </Head>
            <section className="genrenamesec">
                <div className="genrename">
                    <h1>Explore by Genre</h1>
                    <p>Explore diverse genres, from heartwarming romance to spine-chilling horror, each offering a unique experience. Discover films that cater to every taste and emotion, leaving you captivated</p>
                </div>
            </section>
            <section className="genremoviesec genremovie">
                <Genrecard link={'/genre/action'} img={'/img/action.jpg'} title={"Action Movies"} description={"An action-packed movie filled with thrilling stunts, intense fight scenes, and high-speed chases that keep you on the edge of your seat."} />
                <Genrecard link={'/genre/adventure'} img={'/img/adventure.jpg'} title={"Adventure Movies"} description={"Embark on an exhilarating adventure as brave explorers navigate treacherous landscapes, encounter mystical creatures, and unravel ancient mysteries in this thrilling adventure movie."} />
                <Genrecard link={'/genre/animation'} img={'/img/animation.jpg'} title={"Animation Movies"} description={"Enter a whimsical world of enchanting animation, where colorful characters embark on magical journeys, spreading joy and delivering heartfelt messages in this captivating animated adventure."} />
                <Genrecard link={'/genre/comedy'} img={'/img/comedy.jpg'} title={"Comedy Movies"} description={"Get ready for non-stop laughter in this hilarious comedy movie. With witty one-liners, outrageous situations, and a talented cast of comedic geniuses, it's guaranteed to leave you in stitches from start to finish."} />
                <Genrecard link={'/genre/crime'} img={'/img/crime.jpg'} title={"Crime Movies"} description={"Discover the untold stories and explore the real world through this captivating documentary. Uncover fascinating truths, gain insightful perspectives, and delve into thought-provoking subjects that will leave you informed and inspired."} />
                <Genrecard link={'/genre/drama'} img={'/img/drama.jpg'} title={"Drama Movies"} description={"Intense emotions, complex relationships, and gripping narratives converge in this captivating drama, delivering a powerful and unforgettable cinematic experience."} />
                <Genrecard link={'/genre/fantasy'} img={'/img/fantasy.jpg'} title={"fantasy Movies"} description={"Embark on a mesmerizing journey through realms of magic and wonder in this enchanting fantasy film. Immerse yourself in mystical creatures, epic quests, and breathtaking landscapes in this captivating adventure"} />
                <Genrecard link={'/genre/horror'} img={'/img/horror.jpg'} title={"Horror Movies"} description={"Experience bone-chilling terror and spine-tingling suspense in this gripping horror film. Brace yourself for terrifying encounters, heart-pounding suspense, and a chilling atmosphere that will haunt your nightmares."} />
                <Genrecard link={'/genre/mystery'} img={'/img/mystery.jpg'} title={"Mystery Movies"} description={"Unravel the enigmatic puzzle and delve into the depths of suspense in this captivating mystery movie. Follow clues, navigate twists and turns, and uncover shocking revelations in a race against time."} />
                <Genrecard link={'/genre/romance'} img={'/img/romantic.jpg'} title={"Romantic Movies"} description={"Indulge in the tender and heartfelt moments of this enchanting romantic film. Experience the magic of love, witness soulful connections, and be swept away by the irresistible chemistry between the characters."} />
                <Genrecard link={'/genre/science_fiction'} img={'/img/scifi.jpg'} title={"Sci-fi Movies"} description={"Embark on an extraordinary journey to the realms of the future in this mind-bending sci-fi adventure. Explore advanced technology, encounter alien worlds, and ponder the limitless possibilities of the universe."} />
                <Genrecard link={'/genre/thriller'} img={'/img/thriller.jpg'} title={"Thriller Movies"} description={"Hold your breath and brace yourself for a heart-pounding thrill ride in this gripping thriller. Suspense, twists, and unexpected turns will keep you on the edge of your seat until the very end."} />

            </section>
        </>
    )
}

export default category