"use strict"

import { Imageupload, deleteImage, updateImage, showData, doneUpdatingProfile } from '../../../modules/accountjs/acc.js';

const accountimg = new Imageupload();
accountimg.getimage();

deleteImage();
updateImage();
showData();
doneUpdatingProfile();