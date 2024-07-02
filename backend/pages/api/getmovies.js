import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";

export default async function handle(req, res) {

    // If authenticated, connect to MongoDB
    await mongooseConnect();

    const { method } = req;


    if (method === 'POST') {
        const { title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility,youtubelink, language, watchonline, downloadlink, category, status } = req.body;

        const movieData = await Movie.create({
            title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility,youtubelink, language, watchonline, downloadlink, category, status
        })

        res.json(movieData)
    }

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Movie.findById(req.query.id));
        } else {
            res.json((await Movie.find()).reverse())
        }
    }


    if (method === 'PUT') {
        const { _id, title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility,youtubelink, language, watchonline, downloadlink, category, status } = req.body;
        await Movie.updateOne({ _id }, {
            title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, subtitle, size, quaility,youtubelink, language, watchonline, downloadlink, category, status
        });

        res.json(true);
    }

    if (method === 'DELETE') {
        if (req.query?.id) {
            await Movie.deleteOne({ _id: req.query?.id });
            res.json(true)
        }
    }
}