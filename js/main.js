import { getData } from './api.js';
import { renderPhotos } from './render.js';
import { closeUserModal } from './user-modal.js';
import { setUserFormSubmit } from './user-modal.js';

getData((photo) => renderPhotos(photo));
setUserFormSubmit(closeUserModal);
