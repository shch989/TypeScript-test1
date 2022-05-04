function ForTest() {

    let count: number = 1;
    let sum: number = 0;

    for( let i = 0; i < 10; i++, count++ ) {
        sum += count
    }

    console.log(sum)

}

ForTest()