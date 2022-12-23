import { CommentModel } from '../schema/Comments.js';

class Comments {
  // 새로운 댓글 생성
  static async create({ comment, name, password }) {
    return CommentModel.create({
      comment,
      name,
      password
    });
  }

  static async findAll() {
    return CommentModel.find({}).sort({ createdAt: -1 });
  }
  static async findByCommentId(commentId) {
    return CommentModel.findOne({commentId});
  }


  static async delete(commentId) {
    return CommentModel.findOneAndDelete({ commentId });
  }



}

export { Comments };