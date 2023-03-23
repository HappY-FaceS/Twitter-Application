import express from 'express';

import { createTweet, getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signup } from '../../controllers/auth-controller.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes',toggleLike);

router.post('/comments', createComment);

export default router;