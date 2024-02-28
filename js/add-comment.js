import { createComment } from './create-comment.js';
import { MIN_COMMENTS, MAX_COMMENTS } from './data.js';
import { getRandomInteger } from './util';

const addComment = () =>
  Array.from(
    { length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) },
    createComment
  );

export { addComment };
