class ch2 {
  private id: number;
  private name: string;
  private description: string;
  private test: string;

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string): void {
    this.description = description;
  }
  public getTest(): string {
    return this.test;
  }
  public setTest(test: string): void {
    this.test = test;
  }
  public printMember(): void {
    console.log("안녕하세요");
  }
  public Info(): void {
    console.log("id : " + this.id);
    console.log("name : " + this.name);
    console.log("descriptiond : " + this.description);
    console.log("test : " + this.test);
  }
}

const Lee = new ch2()

Lee.setId(7);
Lee.setName("이순신")
Lee.setDescription("조선 중기의 무신")
Lee.setTest("1545년 4월 28일 한성부")

console.log(Lee.getId())
console.log(Lee.getName())
console.log(Lee.getDescription())
console.log(Lee.getTest)

console.log("====================")

Lee.printMember()
Lee.Info()
