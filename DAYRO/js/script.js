import { firstTime, sidebarBtn, Loginvalidation, translateguj, shareDayro, addhoverbackground } from "../functions-flie/functions.js";

const useremail = new Loginvalidation();
useremail.validatelogin();

sidebarBtn();
firstTime(); //user visiting first-time
translateguj(); //translate fun
shareDayro(); //sharing functionlity
addhoverbackground(); //hover background