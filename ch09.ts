function BitTest() {

  let num1: number = 5; // 00000101
  let num2: number = 10; // 00001010

  console.log(num1 | num2);
  console.log(num1 & num2);
  console.log(num1 ^ num2);
  console.log(~num1);

  console.log(num1 << 2);
  console.log(num1);
  console.log(num1 <<= 2);
  console.log(num1);

}

BitTest();