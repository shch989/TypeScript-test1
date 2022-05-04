class Order1 {

    public orderNumber: string
    public orderPhone: string
    public orderAdress: string
    public date: number
    public time: number
    public price: number
    public menuNumber: string
    
    constructor(orderNumber: string, orderPhone: string, orderAdress: string, date: number, time: number, price: number, menuNumber: string) {
        this.orderNumber = orderNumber
        this.orderPhone = orderPhone
        this.orderAdress = orderAdress
        this.date = date
        this.time = time
        this.price = price
        this.menuNumber = menuNumber
    }

    showOrder(): void {
        console.log(`주문 접수 번호 : ${this.orderNumber}`)
        console.log(`주문 핸드폰 번호 : ${this.orderPhone}`)
        console.log(`주문 집 주소 : ${this.orderAdress}`)
        console.log(`주문 날짜 : ${this.date}`)
        console.log(`주문 시간 : ${this.time}`)
        console.log(`주문 가격 : ${this.price}`)
        console.log(`메뉴 번호 : ${this.menuNumber}`)
    }
} 

let orderKim = new Order1("202011020003", "010-2345-0001", "서울시 강남구 역삼동 111 - 333", 20201102, 130258, 35000, "0003")
orderKim.showOrder()