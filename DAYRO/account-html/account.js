import { Imageupload, deleteImage, updateImage, } from '../account-html/accountjs/acc.js';

// functions for useraccimages
const accountimg = new Imageupload();
accountimg.validImage();

deleteImage();
updateImage();