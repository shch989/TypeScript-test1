function ConitionTest (a: number, b: number) {

  let num1: number = a;
  let num2: number = b;
  let max: number;

  console.log(`두 수를 입력 받아서 더 큰 수를 출력하세요 : ${a}, ${b}`);

  max = (num1 > num2)? num1 : num2;
  console.log(max);

}

ConitionTest(1000, 999);