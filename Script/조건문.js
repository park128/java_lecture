// let num1 = 5;
// if(num1 < 0){
//     console.log("음수입니다.");
// }else if(num1 < 10){
//     console.log('10보다 작은 양수입니다.');
// }else{
//     console.log("10보다 큰 수입니다.");
// }

//1.문제 주어진수가 짝수인지 홀수인지를 판단해보세요.console
//1. 짝수와 홀수를 어떻게 구분할까?
// let num3 = 5623;
// if(num3%2==0){
//     console.log("짝수입니다.");
// }else if(num3%2!=0){
//     console.log("홀수입니다.");
// }

//더 간단하게 줄이는 코드. 이렇게 줄이는게 실력이다.
// let num5 = 5623;
// if(num5%2==0){
//     console.log("짝수입니다.");
// }else{
//     console.log("홀수입니다.");
// }

//2.변수가 숫자인지 아닌지 판별해보세요.
// let 변수4 = "안녕";
// if(typeof(변수4)=='number'){
//     console.log("숫자입니다.")
// }else{
//     console.log("숫자가아닙니다.")
// }

//3.변수가 3의 배수인지 판별해보세요.

// let 변수3 = 12;
// if(변수3%3==0){
//     console.log("3의 배수가 맞습니다.")
// }else{
//     console.log("3의 배수가 아닙니다.")
// }


// 4. 반지름이 r인 원의 넓이를 구해보세요.



// 5. 세숫자를 비교하여 가장 큰 숫자를 출력해보세요.
// let 변수1 = 90;
// let 변수2 = 40;
// let 변수3 = 25;
// if(변수1 > 변수2 && 변수1 >변수3){
//     console.log("변수1")
// }else if(변수2 > 변수1&&변수2 >변수3){
//     console.log("변수2")
// }else if(변수3 > 변수2 &&변수3 >변수1){
//     console.log("변수3")
// }

// let num1 = 20;
// let num2 = 80;
// let num3 = 40;
// let max = num1
// if(max < num2){
//     max=num2;
// }
// if(max < num3){
//     max = num3;
// }
// console.log(max);


// 6. 문자열이 들어있는 변수에 "안녕" 이 들어있으면 "안녕하세요"를 콘솔에 찍으세요.

// let 변수1 = "안녕반가워";
// if(변수1=="안녕"){
//     console.log("안녕하세요")
// }else{
//     console.log("잘가세요.")
// }

// let str = "안녕하세요 자바 초보 개발자 입니다.";
// if(str.includes("안녕")){
//     console.log("안녕하세요");
// }

// 8. 숫자가 3의 배수면 3의 배수, 5의 배수면 5의 배수라고 출력하되 15의 배수라면 15의 배수라고만 출력해주세요.(3,5의 배수인지는 출력하지 말아라.)
// let 변수1 = 10;
// if(변수1%15==0){
//     console.log("15의 배수 입니다.")
// }else if(변수1%5==0){
//     console.log("5의 배수 입니다.")
// }else if(변수1%3==0){
//     console.log("3의 배수입니다.")
// }else{
//     console.log("3의 배수가 아닙니다.")
// }

//9. 0~100의 점수가 들어있는 변수의 등급을 출력해보세요.
//90점대 = 수, 80점대 = 우, 70점대 = 미, 60점대 = 양, 59점대 = 가

// let 점수 = 100;
// if(점수<=100 && 점수>=90){
//     console.log("수");
// }else if(점수<90 && 점수>=80){
//     console.log("우");
// }else if(점수<80 && 점수>=70){
//     console.log("미");
// }else if(점수<70 && 점수>=60){
//     console.log("양");
// }else if(점수>0 && 점수<59){
//     console.log("가");
// }else{
//     console.log("잘못된 정보입니다.");
// }


