function ContantTest(a: number, b: number) {
  // const는 java에서는 final
  const MAX_NUM = a
  const MIN_NUM = b

  // MIN_NUM = 2; 새로 할당 불가

  console.log("최소값: ", MIN_NUM, " 최대값: ", MAX_NUM);
}

ContantTest(100, 0)