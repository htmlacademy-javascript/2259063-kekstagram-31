import { getRandomId, getRandomInteger, getRandomText, getRandomArrayElement, } from '../util.js';

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const RANDOM_TEXT =
  'Всё отлично! В целом всё неплохо, но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

const NAMES = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Emily',
  'Frank',
  'Grace',
  'Henry',
  'Ivy',
  'Jack',
  'Katherine',
  'Leo',
  'Mia',
  'Nathan',
  'Olivia',
  'Paul',
  'Quinn',
  'Rachel',
  'Sam',
  'Taylor',
  'Ursula',
  'Victor',
  'Wendy',
  'Xander',
  'Yasmine',
];

const getCommentId = getRandomId();

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomText(RANDOM_TEXT),
  name: getRandomArrayElement(NAMES),
});

export { createComment };
