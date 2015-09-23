//구분구적법을 이용하여 정적분하기.
//Authored by Youngbin Han <sukso96100@gmail.com>
var function_to_integrate = "x^2+4*x"; // 정적분할 식
var start = 2; // 정적분 구간 시작 지점
var end = 4; // 정적분 구간 종료 지점
var n = 2000; // n 값 지정, 값이 클수록 정적분 결과값이 더 정확해짐.
var length = end - start; // 정적분할 구간의 길이
var dlength = length / n; // 구간의 길이를 n 으로 나눔
var result = 0; // 정적분 결과값
console.log("다음 식을 구분구적법 방법으로 정적분 합니다. " + function_to_integrate);
console.log(start+"부터 "+end+"까지 정적분 합니다.");
console.log("구간의 길이를 "+n+" 으로 나눠서 정적분 합니다.");
console.log("정적분을 시작 합니다.");
console.log("++++++++++");
for(var i = 0; i <= n; i++){
  console.log("==========");
  var x = start + dlength * i;
  var y = eval(function_to_integrate);
  console.log("x값은 "+ x + ", y값은 " + y + " 입니다.");
  console.log("가로길이 값은 "+ dlength + ", 세로길이 값은 " + y + " 입니다.");
  console.log("넓이값은 "+dlength*y + " 입니다.");
  result += dlength*y;
  console.log("지금까지의 넓이합은 "+result+"입니다.");
  console.log("==========");
}
console.log("++++++++++");
console.log(function_to_integrate+" 를 "+start+"부터 "+end+"까지 구간의 길이를 "+n+" 으로 나눠서 구분구적법 방법으로 정적분 하였습니다.");
console.log("정적분 결과값은 "+result+" 입니다");
