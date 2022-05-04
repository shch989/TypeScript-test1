function WhileTest() {

    let num: number = 1;
    let sum: number = 0;

    while(num <= 10) {
        sum += num
        num++
    }

    console.log(sum)
    console.log(num)

}

WhileTest()