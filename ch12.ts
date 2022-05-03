function IfElseIfTest () {

  let age: number = 17;
  let charge: number;

  if(age < 8) {
    charge = 1000;
    console.log("미 취학 아동입니다")
  } else if(age < 14) {
    charge = 2000;
    console.log("초등학생 입니다.")
  } else if(age < 20) {
    charge = 2500;
    console.log("중, 고등학생 입니다.")
  } else {
    charge = 3000;
    console.log("일반인 입니다.")
  }

  console.log("입장료는" + charge + "입니다.");

}

IfElseIfTest();