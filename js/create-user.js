import { getRandomId, getRandomArrayElement, getRandomInteger } from './util.js';
import { addComment } from './add-comment.js';
import { PHOTO_DESCRIPTIONS, MIN_LIKES, MAX_LIKES } from './data.js';

const getUserId = getRandomId();
const getUserPhoto = getRandomId();

const createUser = () => ({
  id: getUserId(),
  url: `photos/${getUserPhoto()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: addComment(),
});

export { createUser };
