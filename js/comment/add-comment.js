import { createComment } from './create-comment';
import { getRandomInteger } from '../util';

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const addComment = () =>
  Array.from(
    { length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) },
    createComment
  );

export { addComment };
