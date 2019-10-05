// 자바스크립트 실행순서 알기: 싱글쓰레드이다.
// 코드를 모두 실행하고 마지막에 예약된 큐를 확인해서 실행한다.
// 따라서 실행결과는 항상 동일하다.

console.log("A");

//예약
setTimeout(function (){  // 일단 큐에 넣음
    console.log("B");
}, 0);

console.log("C"); // 그리고 c를 찍음, 그 뒤에 큐에 넣은 setTimeout 실행.

//만일 루프가돌면?
// while(true) {} // 메인쓰레드가 계속 일을 하고 있기때문에 큐에 있는 작업 실행 못함.

//예약목록 확인 및 실행