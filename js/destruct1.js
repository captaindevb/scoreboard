// 배열 해체 할당.

let a, b, c;
[a, b, c = 30] = [10, 20]; // 10과 20을 해체해서 각각 할당하여라. c=30은 default parameter 문법. 할당된 값이 없을때 디폴트로 30주기.

console.log(a,b,c); // 10 20