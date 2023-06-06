const { User } = require("./../model/User");

const { Movie } = require("./../model/Movie");

const { Review } = require("./../model/Reviews");
async function getStatistics(req, res) {
  try {
    const users = await User.find({});
    const movies = await Movie.find({});
    const reviews = await Review.find({});

    res.status(500).json({
      users: users.length,
      movies: movies.length,
      reviews: reviews.length,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getStatistics };
