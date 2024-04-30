import express from 'express';
import LikeController from './like.controller.js';

const likeRouter = express.Router();
const likeController = new LikeController();

likeRouter.get('/toggle/:postId', likeController.toggleLike);
likeRouter.get('/:postId', likeController.getLikesByPost);

export default likeRouter;
