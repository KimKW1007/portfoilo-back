import bcrypt from 'bcrypt';
import { Comments } from '../db/index.js';

class commentConnect {
  static async addComment({ comment, name, password }) {
    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    // db에 저장
    const createdComment = await Comments.create({
      name,
      comment,
      password: hashedPassword
    });
    return createdComment;
  }

  static async getComment() {
    const data = await Comments.findAll();

    return data;
  }
  static async removeComment({commentId, password}) {
    const data = await Comments.findByCommentId(commentId);
    if(!data){
      throw new Error("유저없음")
    }
    const hashedPassword = await bcrypt.compare(password, data.password);
    if (!hashedPassword) throw new Error("비밀번호아님")
    if (hashedPassword) {
      return Comments.delete(commentId);
    }
  }
}
export { commentConnect };
