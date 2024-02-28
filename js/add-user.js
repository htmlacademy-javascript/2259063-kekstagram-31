import { MAX_USERS } from './data.js';
import { createUser } from './create-user.js';

const addUser = () => Array.from({ length: MAX_USERS }, createUser);

export { addUser };
