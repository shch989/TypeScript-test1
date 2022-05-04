function DoWhileTest(num: number) {

    let input: number = num;
    let sum: number = 0;

    do {

        sum += input;
        console.log(sum)

    } while (input != 0)

}

DoWhileTest(5);
DoWhileTest(19);
DoWhileTest(333);