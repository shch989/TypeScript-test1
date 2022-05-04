function BreakTest() {

    let sum: number = 0
    let num: number

    for( num = 1; ; num++ ) {

        sum += num

        if( sum >= 100 ) {
            break
        }

    }

    console.log(sum)
    console.log(num)

}

BreakTest()