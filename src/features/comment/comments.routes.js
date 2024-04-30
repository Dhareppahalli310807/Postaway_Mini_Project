import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();
const commentController = new CommentController();

commentRouter.post('/:postId', commentController.addComment);
commentRouter.get('/:postId', commentController.getCommentByPost);
commentRouter.put('/:commentId', commentController.updateComment);
commentRouter.delete('/:commentId', commentController.deleteComment);

export default commentRouter;
