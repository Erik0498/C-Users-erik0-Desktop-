var a = 10; 
var b = 15;
var c = 20;
var d = 21;
var x1;
var x2;
function Sum1() {
    var result = a + b;
    document.write("<p>Sum1 result: " + result);
}
function Sum2(x1,x2) {
    var result = x1 + x2;
    document.write("<p>Sum2 result: "+ result);
}

Sum1();
Sum2();
Sum2(c, d);