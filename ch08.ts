function ShortCircuit () {
  
  let num1: number = 10;
  let i: number = 2;

  let value: boolean = ((num1 = num1 + 10) < 10) && ((i = i + 2) < 10);
  console.log(value);
  console.log(num1);
  console.log(i); // And의 경우 앞의 내용이 false일 경우 뒤의 내용은 실행하지 않는다

  value = ((num1 = num1 + 10) < 10) || ((i = i + 2) < 10);
  console.log(value);
  console.log(num1);
  console.log(i);

}

ShortCircuit();