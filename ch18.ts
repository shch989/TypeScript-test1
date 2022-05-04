function NestedLoopTest() {

    let dan: number = 2;
    let count: number = 1;

    for( dan =2 ; dan <= 9; dan++ ) {

        console.log(`=== ${dan}단 ===`)

        for(count = 1; count <= 9; count++) {

            console.log(`${dan} x ${count} = ${dan * count}`)

        }

    }

}

NestedLoopTest()