class Student2 {

    public studentID: number
    public studentName: string
    public address: string

    constructor(studentID: number, studentName: string, address: string) {
        this.studentID = studentID
        this.studentName = studentName
        this.address = address
    }

    showStudentInfo(): void {
        console.log(this.studentID + "학번 학생의 이름은 " + this.studentName + "이고, 주소는 " + this.address + "입니다.")
    }

    getStudentName(): string {
        return this.studentName
    }

    setStudentName(name: string): void {
        this.studentName = name;
    } 

}

let studentLee = new Student2(20172271, "성 현", "수영구");
studentLee.showStudentInfo()

let studentKim = new Student2(20172280, "완 도", "동래구")
studentKim.showStudentInfo()

