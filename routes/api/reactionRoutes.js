const router = require('express').Router();
const { addReaction, removeReaction } = require('../../controllers/thoughtController');

// POST route to create a reaction to a thought
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE route to remove a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
