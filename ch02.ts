function addNum(num1: number, num2: number): number {
    let result: number
    result = num1 + num2
    return result
}

function sayHello(greeting: string): void {
    console.log(greeting)
}

function calcSum(): number {

    let sum: number = 0
    let i: number

    for(i = 0; i <= 100; i++) {
        sum += i
    }
    return sum;
}

let n1: number = 10;
let n2: number = 20;

let total: number = addNum(n1, n2)
console.log(total)

sayHello("hello typescript")

total = calcSum()
console.log(total)