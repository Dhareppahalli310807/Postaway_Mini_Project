import express from 'express';
import PostController from './post.controller.js';
import upload from '../../middlewares/multer.middleware.js';

const postRouter = express.Router();
const postController = new PostController();

postRouter.post('/', upload.single('imageUrl'), postController.createPost);
postRouter.get('/all', postController.getAllPosts);
postRouter.get('/', postController.getAllPostsByUser);
postRouter.get('/:id', postController.getPostById);
postRouter.put(
  '/:id',
  upload.single('imageUrl'),
  postController.updatePostById
);
postRouter.delete('/:id', postController.deletePostById);

export default postRouter;
