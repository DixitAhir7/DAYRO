import { firstTime, sidebarBtn, popup, addanimationclass, Loginvalidation, shareDayro, addhoverbackground } from "../functions-flie/functions.js";
import { themechange } from "../theme-js/theme.js";

const useremail = new Loginvalidation();
useremail.validatelogin();

sidebarBtn();
popup(); //login modal
firstTime(); //user visiting first-time
shareDayro(); //sharing functionlity
addhoverbackground(); //hover background
addanimationclass(); //animate css class auto
themechange(); //dark theme