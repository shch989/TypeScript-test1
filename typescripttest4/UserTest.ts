class Person {
  private id: number;
  private name: string;
  private description: string;

  public getId(): number {
    return this.id;
  }
  public setId(id: number) {
    this.id = id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string) {
    this.description = description;
  }
  public printMember(): void {
    console.log("안녕하세요")
  }
}

class Admin extends Person {
  private admin: boolean

  public getAdmin(): boolean {
    return this.admin;
  }
  public setAdmin(admin: boolean): void {
    this.admin = admin;
  }
}

class User extends Person {
  private text: string

  public getText(): string {
    return this.text;
  }
  public setText(text: string): void {
    this.text = text;
  }
  public printMember(): void {
    console.log("안녕하세요 회원정보 클래스입니다.")
  }
}

const Lee = new User();
Lee.printMember()

const Kim = new Admin();
Kim.printMember();