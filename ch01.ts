class Order {

    public orderId: number
    public byerId: string
    public sellerId: string
    public productId: number
    public orderDate: string

    constructor(orderId: number,  byerId: string, sellerId: string, productId: number, orderDate: string) {

        this.orderId = orderId
        this.byerId = byerId
        this.sellerId = sellerId
        this.productId = productId
        this.orderDate = orderDate

    }

}

class Student {

    public studentNumber: number
    public studentName: string
    public majorCode: number
    public majorName: string
    public grade: number

    constructor(studentNumber: number, studentName: string, majorCode: number, majorName: string, grade: number) {

        this.studentNumber = studentNumber
        this.studentName = studentName
        this.majorCode = majorCode
        this.majorName = majorName
        this.grade = grade

    }

}

class UserInfo {

    public userId: string
    public userPassword: string
    public userName: string
    public address: string
    public phoneNumber: number

    constructor( userId: string, userPassword: string, userName: string, address: string, phoneNumber: number ) {

        this.userId = userId
        this.userPassword = userPassword
        this.userName = userName
        this.address = address
        this.phoneNumber = phoneNumber

    }

}

const userinfo = new UserInfo('shch989', '981104', '성현', '부산시 수영구', 1099762790)
console.log(userinfo.userId)
console.log(userinfo.userPassword)
console.log(userinfo.userName)
console.log(userinfo.address)
console.log(userinfo.phoneNumber)