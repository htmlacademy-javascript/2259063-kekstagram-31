
import { createPicture } from './create-picture';

const MAX_USERS = 25;

const addPicture = () => Array.from({ length: MAX_USERS }, createPicture);

export { addPicture };
