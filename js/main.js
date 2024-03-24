import { addPictures } from './picture/add-picture';
import { renderPicutres } from './picture/render-pictures';
import { openPicture } from './picture/open-picture';
import { openUploadPicture } from './form/form-modal';

const picturesDataArr = addPictures();
const picturesLayout = renderPicutres(picturesDataArr);
openPicture(picturesLayout, picturesDataArr);
openUploadPicture();

export { picturesDataArr, picturesLayout };
