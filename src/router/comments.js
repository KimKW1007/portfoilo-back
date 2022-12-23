import { commentConnect } from '../connect/comment.js';
import { Router } from 'express';

const commentRouter = Router();

commentRouter.post('/', async (req, res, next) => {
  try {
    const { name, password, comment } = req.body;
    const newComment = await commentConnect.addComment({
      name,
      password,
      comment
    });
    return res.status(201).json(newComment);
  } catch (error) {
    return res.status(401).send('Post 오류');
  }
});
commentRouter.get('/', async (req, res, next) => {
  try {
    const comments = await commentConnect.getComment();
    return res.status(200).send(comments);
  } catch (error) {
    return res.status(401).send('Get 오류');
  }
});
commentRouter.delete('/', async (req, res, next) => {
  try {
    const { commentId, password } = req.body;
    await commentConnect.removeComment({
      commentId,
      password
    });
    return res.status(200).send('삭제완료');
  } catch (error) {
    return res.status(401).send('Delete 오류');
  }
});
export { commentRouter };
