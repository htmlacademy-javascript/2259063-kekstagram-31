import { MAX_AVATAR, MIN_AVATAR, RANDOM_TEXT, NAMES } from './data.js';
import {
  getRandomId,
  getRandomInteger,
  getRandomText,
  getRandomArrayElement,
} from './util.js';

const getCommentId = getRandomId();

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomText(RANDOM_TEXT),
  name: getRandomArrayElement(NAMES),
});

export { createComment };
