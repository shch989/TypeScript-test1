interface Card {
  getCardId(): void
  getCardName(): void;
  getCardDescription(): void; 
  printCard(): void;
}

class CardImpl implements Card {
  getCardId(): void {
    console.log("CardId 출력");
  }
  getCardName(): void {
    console.log("CardName 출력");
  }
  getCardDescription(): void {
    console.log("CardDescription 출력");
  }
  printCard(): void {
    console.log("All Card Info 출력");
  } 
}