// //정의 : function 함수명(인자){본문};
// //호출 : 함수명(인자전달);
// ​
// // function printHello(name){
// //     console.log(name+"님 반가워요");
// // }
// ​
// // printHello("홍길동");
// ​
// // function add(num1, num2){
// //     return num1+num2;
// // }
// // let result = add(5, 23);
// ​
// // let result2 = add(3,5);
// // let result3 = add(92, 5);
// // let result4 = result2+result3;
// // console.log(result4);
// ​
// ​
// //문제1. 3개의 숫자를 받아서 합을 리턴하는 함수
// // function add(num1, num2, num3){
// //     return num1+num2+num3;
// // }
// // console.log(add(3,5,8));
// ​
// //문제2. 두수를 입력받아서 더 큰수를 리턴하는 함수
// // function getBigger(num1, num2){
// //     if(num1>num2){
// //         return num1;
// //     }else{
// //         return num2;
// //     }
// // }
// // console.log(getBigger(83, 83));
// ​
// ​
// //문제3. 가로와 높이를 입력받아 삼각형의 넓이를 구하는 함수
//         //예) 함수(4,5) == 10
// // function calcTriArea(width, height){  //매개변수(파라미터)
// //     if(width<0 || height<0){
// //         return false;
// //     }
// //     return 0.5 * width * height;
// // }
// ​
// // let result = calcTriArea(-3,8);  //전달인자(아규먼트)
// // if(result == false){
// //     console.log("양수를 입력해주세요");
// // }
// // else{
// //     console.log(result);
// // }
// ​
// ​
// //문제4. 첫번째수부터 두번째수까지 자연수의 총합을 구하는 함수
//        //예) 함수(1,3) ==1+2+3 = 6     함수(1,100) == 5050
// // function sum(starNum, endNum){
// //     let total = 0;
// //     for(let i=starNum; i<=endNum; i++){
// //         total += i;
// //     }
// //     return total;
// // }
// ​
// //  let result = sum(2,10);    //이름을 total로 바꿔도 block에 의해 다른 변수임
// //  console.log(result);
// ​
// //문제5. 가우스가 푼방식으로 풀기
// //1+100=101   2+99 = 101    3+98 = 101   가운데서 50과 51에서 끝나고 101
// //101*50 = 5050         //양끝을 합친수 * 둘사이 수의갯수/2
// // function gauseSum(startNum, endNum){
// //     let 합친수 = startNum + endNum;
// //     let 갯수 = (endNum - startNum +1)/2;    //맞는식
// //         //(startNum + endNum -1)  /2;   //틀린식
// //     let 합계 = 합친수 * 갯수;
// //     return 합계;
// // }
// ​
// //홀짝으로 분리
// // function gauseSum2(startNum, endNum){
// //     let 합친수 = startNum + endNum;
// //     let 차이 = endNum - startNum;
// //     let 갯수;
//     //2,4   2+3+4 = 3*1 +3     차이2 짝수
//     //3,7   3+4+5+6+7 = 10*2 +5   차이4 짝수
//     //1,10  1+2+3...+10 = 11*5   차이9 홀수
//     //짝수일때 : 합친수*차이/2 + 가운데수
//     //홀수일때 : 합친수*차이/2
// //}
// ​
// ​
// //무조건 반값에다가 갯수 곱하기
//     // 1부터 10이면 11/2 = 5.5  반값에다가 원소갯수
//     // 2부터 5이면  7/2 =3.5  3.5*4 = 14
//     // 2부터 6이면  8/2 =4   4*5 = 20


// //겁나 헷갈리게
// // let name = "name";
// // function getName(name){
// //     let name2 = name;
// //     console.log("name : "+name2);
// //     return name2;
// // }

// // getName(name);

// 문제 6. 숫자를 하나 받아서 구구단중 해당단만 출력하는 함수를 만들어보세요.
// 1. 함수이름
// 2. 인자
// 3. 본문
// 4. 리턴값
// function printDan(dan){
//     {
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// }
// printDan(5)

// //방금 만든 printDan함수 내부를 고치지말고 그대로 활용해서 구구단 전체를 찍는 printGugudan 함수를 만들어보세요. 단끼리는 한줄 띄어주세요.

// function printGugudan(){
//     for(let i=1; i<=9; i++)
//     printDan(dan);
//     console.log("");
// }

//점심먹고 오후시간

//1. 인자 2개를 받아서 큰수에서 작은수를 뺀값을 출력하는 함수

// function name(a,b){
//     if(a<b){
//         return(b-a);
//     }
//     else if(a>b){
//         return(a-b);
//     }
// }
// console.log(name(4,100))

//2. 첫번째인자: 문자열    두번째인자 : 숫자
//   첫번째인자를 n번 출력하는 함수
// f("bong",3) bong 을 줄띄우면서 3번이 아니라 bongbongbong을 찍어보세요

// let llll = "";
// let name = "love";
// function QNQN(name,n){
//     for(let i=1; i<=n; i++){
//         llll += name;
//         
//     }console.log(llll);
// }
// QNQN(name,3);
// 

// 3. isOverTen(숫자) 는 10보다 크면 true, 이하면 false를 반화하는 함수다.
// 1번에서 만든 함수의 결과값을 인자로 넘겨 "10보다 큽니다.","10이하입니다."를 출력해보세요



// function name(a,b){
//     if(a<b){
//         return(b-a);
//     }
//     else if(a>b){
//         return(a-b);
//     }
// }

// let kongb = new Boolean(false);

// let kong =(name(50,4));


// function isOverTen(kong){
//     if(kong>10){
//         kongb=true;
//     }else if(kong<=10){
//         kongb=false;
//     }
// }

// isOverTen(kong);
// if(kongb==true){
//     console.log("10보다 큽니다.")
// }else if(kongb==false){
//     console.log("10보다 작습니다.")
// }

// 4. calcFigure(도형이름, 변의길이)
// 삼각형, 사각형, 원 3개의 넓이를 리턴하는 함수를 만들어보세요.
// 가정 : 정삼각형, 정사각형, 원은 변의 길이를 지름으로 쓴다.
// 정삼각형공식 = 루트3 / 4 * 한변의제곱
// 루트구하기 = Math.sqrt(숫자)
// 저 3개 말고 들어오면 "지원하지 않는 도형입니다."출력

function tkarkr(a,b){
    switch(a){
        case "정삼각형":
            console.log((Math.sqrt(3))/4)*b^2;
            break;
        case "정사각형":
            console.log(b*b);
            break;
        case "원":
            console.log(b/2*b/2*3.14)
            break;
        default :
            console.log("지원하지 않는 도형입니다");
    }
}

tkarkr("정삼각형",5);