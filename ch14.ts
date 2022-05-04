function SwitchCaseTest(a: number) {

    let month: number = a;
    let day: number | string;

    switch(month) {

        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            day = 31;
            break

        case 4: case 6: case 9: case 11:
            day = 30;
            break

        case 2:
            day = 28;
            break

        default: {
            day = '존재하지 않는 달입니다.'
            break
        }

    }

    console.log(month + "월은 " + day + '일 입니다')

}

SwitchCaseTest(5);
SwitchCaseTest(11);
SwitchCaseTest(99);