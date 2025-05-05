import { firstTime, sidebarBtn, popup, addanimationclass, Loginvalidation, translateguj, shareDayro, addhoverbackground } from "../functions-flie/functions.js";

const useremail = new Loginvalidation();
useremail.validatelogin();

sidebarBtn();
popup(); //login modal
firstTime(); //user visiting first-time
translateguj(); //translate fun
shareDayro(); //sharing functionlity
addhoverbackground(); //hover background
addanimationclass(); //animate css class auto