let p = new Promise((resolve, reject) => {
  resolve('first!'); //First
});

p.then((msg) => {
  console.log(msg);
  //   에러를 강제 발생시키는 코드, catch로 바로 이동함
  //   throw new Error('##에러!');
  return 'second'; // second
})
  // 그 전에 return된 값을 이어서 받음
  .then((msg) => {
    console.log(msg);
    return 'third'; // third
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log('오류 발생 ==> ' + error);
  });
