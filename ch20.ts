function ContinueTest() {

    let num: number;

    for(num = 1; num <= 100; num++) {

        if((num % 3) != 0) continue

        console.log(num)

    }

}

ContinueTest()