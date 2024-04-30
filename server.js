import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './src/features/user/user.routes.js';
import { errorHandlerMiddleware } from './src/middlewares/error.middleware.js';
import { invalidRoutesHandlerMiddleware } from './src/middlewares/inValid.middleware.js';
import cookieParser from 'cookie-parser';
import postRouter from './src/features/post/post.routes.js';
import jwtAuth from './src/middlewares/jwtAuth.middleware.js';
import commentRouter from './src/features/comment/comments.routes.js';
import likeRouter from './src/features/like/like.routes.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';

const server = express();

//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(cookieParser());
server.use(loggerMiddleware);

//paths
server.use('/api/users', userRouter);
server.use('/api/posts', jwtAuth, postRouter);
server.use('/api/comments', jwtAuth, commentRouter);
server.use('/api/likes', jwtAuth, likeRouter);

//invalid routes
server.use(invalidRoutesHandlerMiddleware);

//error handling
server.use(errorHandlerMiddleware);

server.listen(9090, () => {
  console.log('server listening on 9090');
});
