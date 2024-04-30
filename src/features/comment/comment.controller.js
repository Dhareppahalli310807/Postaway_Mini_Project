import CommentModel from './comment.model.js';

export default class CommentController {
  addComment(req, res) {
    const userId = Number(req.userId);
    const { content } = req.body;
    const postId = Number(req.params.postId);
    const comment = CommentModel.addComment(userId, postId, content);
    res.status(201).json({ success: true, comment });
  }
  getCommentByPost(req, res) {
    const postId = Number(req.params.postId);
    const comments = CommentModel.getAllCommentsByPostId(postId);
    res.status(200).json({ success: true, comments });
  }
  updateComment(req, res) {
    const commentId = Number(req.params.commentId);
    const content = req.body.content;

    const updatedComment = CommentModel.updateComment(commentId, content);
    res.status(201).json({ success: true, comment: updatedComment });
  }
  deleteComment(req, res) {
    const commentId = Number(req.params.commentId);
    const deletedComment = CommentModel.deleteComment(commentId);
    res.status(200).json({ success: true, comment: deletedComment });
  }
}
