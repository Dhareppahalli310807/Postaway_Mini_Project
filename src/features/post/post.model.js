import { customErrorHandler } from '../../middlewares/error.middleware.js';

export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }
  static createNewPost(userId, caption, imageUrl) {
    if (!caption) {
      throw new customErrorHandler(400, 'Caption cannot be empty', false);
    }
    if (!imageUrl) {
      throw new customErrorHandler(400, 'Post needs a image', false);
    }
    const newPost = new PostModel(posts.length + 1, userId, caption, imageUrl);
    posts.push(newPost);
    return newPost;
  }
  // get all posts
  static getAllPosts() {
    return posts;
  }
  // get post created by a user using userId
  static getUserPosts(userId) {
    const userPosts = posts.filter((p) => p.userId === userId);
    return userPosts;
  }
  //getting a post by id
  static getSinglePost(postId) {
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      throw new customErrorHandler(404, 'Post not found', false);
    }
    return post;
  }
  //update a post
  static updateSinglePost(postId, caption, imageUrl) {
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      throw new customErrorHandler(404, 'Post not found', false);
    }
    if (!caption) {
      throw new customErrorHandler(400, 'Caption cannot be empty', false);
    }
    if (!imageUrl) {
      throw new customErrorHandler(400, 'Post needs a image', false);
    }
    Object.assign(post, { caption, imageUrl });
    return post;
  }
  //delete a post
  static deleteSinglePost(postId) {
    const postIndex = posts.findIndex((p) => p.id === postId);
    if (postIndex === -1) {
      throw new customErrorHandler(
        404,
        'Cannot find the post to delete',
        false
      );
    }
    const deletedPost = posts[postIndex];
    posts.splice(postIndex, 1);
    return deletedPost;
  }
}

let posts = [];
