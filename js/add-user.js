
import { createPhoto } from './create-photo.js';

const MAX_USERS = 25;

const addUser = () => Array.from({ length: MAX_USERS }, createPhoto);

export { addUser };
