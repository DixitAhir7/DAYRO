import { Imageupload, deleteImage, updateImage, } from '../account-html/accountjs/acc.js';

// functions for useraccimages
const accountimg = new Imageupload();
accountimg.displayimage();
accountimg.validImage();

deleteImage();
updateImage();