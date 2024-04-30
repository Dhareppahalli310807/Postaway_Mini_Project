import LikeModel from './like.model.js';

export default class LikeController {
  toggleLike(req, res) {
    const userId = Number(req.userId);
    const postId = Number(req.params.postId);
    LikeModel.toggleLike(userId, postId);
    return res.status(200).json({ success: true, msg: 'Like toggled' });
  }
  getLikesByPost(req, res) {
    const postId = Number(req.params.postId);
    const likes = LikeModel.getLikesByPost(postId);
    return res.status(200).json({ success: true, likes });
  }
}
