import { openUploadPicture } from './form/form-modal';
import { closeUploadPictureHandler } from './form/form-modal';
import { getData } from './api/get-data';
import { setPictureFormSubmit } from './form/form-validate';
import { openPicture } from './picture/open-picture';
import { renderPictures } from './picture/render-pictures';
import { changeFilterForPreview, filterButtons } from './filters/filters';


openUploadPicture();
setPictureFormSubmit(closeUploadPictureHandler);
getData().then((data) => {
  openPicture(renderPictures(data), data);
  changeFilterForPreview(filterButtons, data);
});
