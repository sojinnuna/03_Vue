let msg = 'GLOBAL';
function outer() {
  // 스코프 내에서 가장 가까이 있는 변수 값을 먼저 찾는다.
  let msg = 'OUTER';
  console.log(msg); // OUTER
  // 무조건 참 -> 무조건 실행
  if (true) {
    let msg = 'BLOCK';
    console.log(msg); // BLCOK
  }
}
// 첫번째, 아우터에 들어감
outer();
