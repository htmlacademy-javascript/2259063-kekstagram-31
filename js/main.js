import { openUploadPicture } from './form/form-modal';
import { closeUploadPictureHandler } from './form/form-modal';
import { getData } from './api/get-data';
import { setPictureFormSubmit } from './form/form-validate';
import { openPicture } from './picture/open-picture';
import { renderPictures } from './picture/render-pictures';
import { showFiltersForPreviewPanel, changeFilterForPreview, filterButtons } from './filters/filters';

openUploadPicture();
getData().then((data) => openPicture(renderPictures(data), data)).then(() => showFiltersForPreviewPanel());
setPictureFormSubmit(closeUploadPictureHandler);
changeFilterForPreview(filterButtons);
