"use strict"

import { Imageupload, deleteImage, updateImage, showData, doneUpdatingProfile } from '../account/accountjs/acc.js';

const accountimg = new Imageupload();
accountimg.getimage();

deleteImage();
updateImage();
showData();
doneUpdatingProfile();