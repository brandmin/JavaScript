var a = 1;
var a = 2;
document.write(a, "<br>");

// 자바스크립트에서는 alert에서만 이스케이프 문자 사용 가능
document.write('안\n녕\n hello', "<br>");

// * 연산은 앞에서 2개씩 실행. 둘중에 하나라도 문자열이면 문자열로 변경
document.write("11+22+33", "<br>");
document.write(11 + 22 + "33", "<br>");
document.write("11" + 22 + 33, "<br>");
document.write("11" + "22" + "33", "<br>");

// boolean은 연산되면 true는 1, false는 0
document.write(true + 1, "<br>");
document.write(false + 1, "<br>");
document.write(true + "1", "<br>");

// true, false개념 0이면 false, 1이면 true
document.write(!!0, "<br>");
document.write(10, "<br>");
document.write(Boolean(10), "<br>");
document.write(!!10, "<br>");