"use strict"

import { Imageupload, deleteImage, updateImage, showData } from '../../../modules/accountjs/acc.js';

const accountimg = new Imageupload();
accountimg.getimage();

deleteImage();
updateImage();
showData();