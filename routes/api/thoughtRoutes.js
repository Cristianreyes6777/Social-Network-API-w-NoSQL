const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

// Routes for /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(addThought);

router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Reaction routes are separate and imported
router.use('/reactions', require('./reactionRoutes'));

module.exports = router;
