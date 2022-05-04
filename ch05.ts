class User {
    public height: number
    public weight: number
    public name: string
    public age: number
    
    constructor(height: number, weight: number, name: string, age: number) {
        this.height = height
        this.weight = weight
        this.name = name
        this.age = age
    }

    showUser(): void {
        console.log("키가 " + this.height + "이고 몸무게가 " + this.weight + "킬로인 남성이 있습니다. 이름은 " + this.name + " 이고 나이는 " + this.age + "세입니다.")
    }
}

let userTomas = new User(180, 78, "Tomas", 37)
userTomas.showUser();