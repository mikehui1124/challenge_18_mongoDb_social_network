const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions 
router.route('/:thoughtId/reactions').post(addReaction);

// /api/apps/:thoughtId/reactions/:reactionId  
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

// userId 6366b1adc038ba20edc2b4f1
// thoughtId 
// reactionId 