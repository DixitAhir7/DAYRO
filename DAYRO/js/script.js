"use strict"

import { firstTime, sidebarBtn, popup, addanimationclass, Loginvalidation, shareDayro, addhoverbackground, labels, fontweight, fetchjson, toggleDropdown } from "../functions-flie/functions.js";

/*
functions defination inorder
sidebar,loginmodal,whenuservisitfirsttime,sharetomedia,hoverwhiteonsidebaratags,animate_css,whensidebarcollapsed all textnone,fw-mediumto atgas,translate
*/
try {
    const useremail = new Loginvalidation(); useremail.validatelogin();
    sidebarBtn(); popup(); firstTime(); shareDayro(); addhoverbackground(); addanimationclass(); labels(); fontweight(); fetchjson(); toggleDropdown();
} catch (e) { console.log('error while calling functions', e); }
