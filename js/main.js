import { fullSizeViewer } from './picture/open-picture';
import { addPictures } from './picture/add-picture';

const PicturesDataArr = addPictures();

fullSizeViewer();

export { PicturesDataArr }
