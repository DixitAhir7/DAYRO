import { Imageupload, deleteImage, updateImage, } from '../account/accountjs/acc.js';

// functions for useraccimages
const accountimg = new Imageupload();
accountimg.validImage();

deleteImage();
updateImage();