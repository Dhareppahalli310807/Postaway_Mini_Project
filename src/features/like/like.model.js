import { customErrorHandler } from '../../middlewares/error.middleware.js';

export default class LikeModel {
  constructor(id, userId, postId) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
  }

  static toggleLike(userId, postId) {
    if (!postId) {
      throw new customErrorHandler(404, 'Post not found', false);
    }
    const likeIndex = likes.findIndex(
      (l) => l.postId === postId && l.userId === userId
    );
    if (likeIndex !== -1) {
      likes.splice(likeIndex, 1);
    } else {
      const like = new LikeModel(likes.length + 1, userId, postId);
      likes.push(like);
    }
  }
  static getLikesByPost(postId) {
    if (!postId) {
      throw new customErrorHandler(404, 'Post not found', false);
    }
    const likesArr = likes.filter((l) => l.postId === postId);
    return likesArr;
  }
}

let likes = [];
