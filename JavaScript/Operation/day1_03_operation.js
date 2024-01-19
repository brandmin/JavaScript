document.write(50>60, "<br>");
document.write(11 == '11', "<br>");
document.write(11 === '11', "<br>");
document.write(11 != '11', "<br>");
document.write(11 !== '11', "<br>");
// 7>6 먼저 계산 true.
// true > 5: 1>5 false
document.write(7>6>5, "<br>");
document.write(''==false, "<br>");
document.write(''==0, "<br>");
document.write(''===false, "<br>");
document.write(''===0, "<br>");

str = "";
document.write(str !=0, "<br>");
document.write(str !==0, "<br>");

str = "0";
document.write(str != 0, "<br>");
document.write(str !== 0, "<br>");

document.write(1>2 && 3>4, "<br>");
document.write(1 == 2 || 1 != 2, "<br>");

var a = 10;
var b = 20;

document.write(a+b, "<br>");
document.write(b*3, "<br>");
document.write(10 % 3, "<br>");

var a = (10>20) ? 10:20;
document.write(a);
