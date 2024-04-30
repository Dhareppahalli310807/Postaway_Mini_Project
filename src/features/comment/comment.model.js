import { customErrorHandler } from '../../middlewares/error.middleware.js';

export default class CommentModel {
  constructor(id, userId, postId, content) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
  }
  // add a comment
  static addComment(userId, postId, content) {
    if (!postId) {
      throw new customErrorHandler(404, 'Post not found', false);
    }
    if (!content) {
      throw new customErrorHandler(400, 'Please add content to comment', false);
    }
    const newComment = new CommentModel(
      comments.length + 1,
      userId,
      postId,
      content
    );
    comments.push(newComment);
    return newComment;
  }
  // retrive all comments on a post
  static getAllCommentsByPostId(postId) {
    if (!postId) {
      throw new customErrorHandler(404, 'Post not found', false);
    }
    const postComments = comments.filter((c) => c.postId === postId);
    return postComments;
  }
  // edit comment
  static updateComment(commentId, content) {
    if (!commentId) {
      throw new customErrorHandler(404, 'comment not found', false);
    }
    if (!content) {
      throw new customErrorHandler(400, 'Please add content to comment', false);
    }
    const updatedComment = comments.find((c) => c.id === commentId);
    if (!updatedComment) {
      throw new customErrorHandler(404, 'Comment missing.', false);
    }
    Object.assign(updatedComment, { content });
    return updatedComment;
  }
  //delete a comment
  static deleteComment(commentId) {
    if (!commentId) {
      throw new customErrorHandler(404, 'Post not found', false);
    }

    const deleteCommentIndex = comments.findIndex((c) => c.id === commentId);
    if (deleteCommentIndex === -1) {
      throw new customErrorHandler(404, 'Comment missing.', false);
    }
    const deletedComment = comments[deleteCommentIndex];
    comments.splice(deleteCommentIndex, 1);
    return deletedComment;
  }
}

let comments = [];
