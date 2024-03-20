import { addPictures } from './picture/add-picture';
import { renderPicutres } from './picture/render-pictures';
import { openPicture } from './picture/open-picture';

const picturesDataArr = addPictures();
const picturesLayout = renderPicutres(picturesDataArr);
openPicture(picturesLayout, picturesDataArr);

export { picturesDataArr, picturesLayout };
