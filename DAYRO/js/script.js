import { firstTime, popUp, sidebarBtn, Loginvalidation, translateguj, shareDayro, addhoverbackground } from "../functions-flie/functions.js";

popUp();
const useremail = new Loginvalidation();
useremail.validatelogin();

sidebarBtn();
firstTime(); //user visiting first-time
translateguj(); //translate fun
shareDayro(); //sharing functionlity
addhoverbackground();