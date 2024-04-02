import { openUploadPicture } from './form/form-modal';
import { closeUploadPictureHandler } from './form/form-modal';
import { getData } from './api/get-data';
import { setPictureFormSubmit } from './form/form-validate';
import { openPicture } from './picture/open-picture';
import { renderPictures } from './picture/render-pictures';
import { showFiltersForPreviewPanel } from './filters/filters';
import { changeFilterForPreview, filterButtons } from './filters/filters';


openUploadPicture();
setPictureFormSubmit(closeUploadPictureHandler);
const dataPromise = getData().then((data) => {
  openPicture(renderPictures(data), data);
  showFiltersForPreviewPanel();
  return data;
});

changeFilterForPreview(filterButtons, dataPromise);
