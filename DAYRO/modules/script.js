import { Loginvalidation, addanimationclass, addhoverbackground, fetchjson, firstTime, fontweight, labels, popup, shareDayro, sidebarBtn, toggleDropdown } from "../modules/functions-flie/functions.js"

/*
share to media,hover white on sidebaratags,animate_css,when sidebar collapsed textnone,fw-mediumto atgas,translate
*/

try {
    const useremail = new Loginvalidation(); useremail.validatelogin();
    sidebarBtn(); popup(); firstTime(); shareDayro(); addhoverbackground(); addanimationclass(); labels(); fontweight(); fetchjson(); toggleDropdown();
} catch (e) { console.log('error while calling functions', e); }