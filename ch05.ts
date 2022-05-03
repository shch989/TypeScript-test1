function OperatorTest() {

  let gameScore: number = 150;

  let lastScore1: number = ++gameScore;
  let lastScore2: number = gameScore++;

  console.log(lastScore1);
  console.log(lastScore2);

}

OperatorTest();