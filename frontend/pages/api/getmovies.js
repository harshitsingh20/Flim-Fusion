import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";

export default async function handle(req, res) {
    const { method } = req;

    await mongooseConnect();

    if (method === 'GET') {
        if (req.query?.id) {
            // Fetch a single movies by id
            const movies = await Movie.findById(req.query.id);
            res.json(movies);
        } else if (req.query?.title) {
            // Fetch movies by title for search function
            const title = await Movie.find({ title: req.query.title });
            res.json(title.reverse());
        } else if (req.query?.titlecategory) {
            // Fetch movies by titlecategory
            const titlecategory = await Movie.find({ titlecategory: req.query.titlecategory });
            res.json(titlecategory.reverse());
        } else if (req.query?.genre) {
            // Fetch movies by genre
            const genre = await Movie.find({ genre: req.query.genre });
            res.json(genre.reverse());
        } else if (req.query?.category) {
            // Fetch movies by category
            const category = await Movie.find({ category: req.query.category });
            res.json(category.reverse());
        } else if (req.query?.slug) {
            // Fetch movies by bcategory
            const movies = await Movie.find({ slug: req.query.slug });
            res.json(movies.reverse());
        } else {
            // Fetch all movies
            const Movies = await Movie.find();
            res.json(Movies.reverse());
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
