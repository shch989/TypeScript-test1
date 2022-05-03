function LogicalTest() {
  
  let num1: number = 10;
  let num2: number = 20;

  let flag: boolean = (num1 > 0) && (num2 > 0); // && => and
  console.log(flag);

  flag = (num1 < 0) && (num2 > 0);
  console.log(flag);

  flag = (num1 > 0) || (num2 > 0); // || => or
  console.log(flag);

  flag = (num1 < 0) || (num2 > 0);
  console.log(flag);

  flag = !(num1 > 0); // ! => not
  console.log(flag);

}

LogicalTest()