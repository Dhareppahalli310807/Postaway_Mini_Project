import PostModel from './post.model.js';

export default class PostController {
  createPost(req, res) {
    const { caption } = req.body;
    const imageUrl = req.file.filename;
    const userId = req.userId;
    const post = PostModel.createNewPost(userId, caption, imageUrl);
    res.status(201).json({ success: true, post });
  }
  getAllPosts(req, res) {
    const posts = PostModel.getAllPosts();
    res.status(200).json({ success: true, posts });
  }
  getAllPostsByUser(req, res) {
    const userId = Number(req.userId);
    const userPosts = PostModel.getUserPosts(userId);
    res.status(200).json({ success: true, posts: userPosts });
  }
  getPostById(req, res) {
    const postId = Number(req.params.id);
    const post = PostModel.getSinglePost(postId);
    res.status(200).json({ success: true, post });
  }
  updatePostById(req, res) {
    const postId = Number(req.params.id);
    const { caption } = req.body;
    const imageUrl = req.file.filename;
    const updatedPost = PostModel.updateSinglePost(postId, caption, imageUrl);
    res.status(201).json({ success: true, post: updatedPost });
  }
  deletePostById(req, res) {
    const postId = Number(req.params.id);
    const deletedPost = PostModel.deleteSinglePost(postId);
    res.status(201).json({ success: true, post: deletedPost });
  }
}
