import { firstTime, sidebarBtn, popup, addanimationclass, Loginvalidation, shareDayro, addhoverbackground, labels, fontweight } from "../functions-flie/functions.js";
import { themechange } from "../theme-js/theme.js";

const useremail = new Loginvalidation();
useremail.validatelogin();

sidebarBtn();
popup();
firstTime();
shareDayro();
addhoverbackground(); //hover background
addanimationclass(); //animate css class auto
themechange();
labels(); //whensidebarcolllapse
fontweight(); //fontweight