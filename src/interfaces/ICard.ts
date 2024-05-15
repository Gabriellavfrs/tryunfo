export interface ICardGame {
  cardName: string;
  cardDescription: string;
  cardAttr1: string;
  cardAttr2: string;
  cardAttr3: string;
  cardImage: string;
  cardRare: string;
  cardTrunfo: boolean;
}

export interface IFilter {
  searchInputValue: string;
  cardRareFilter: string;
  cardTrunfoFilter: boolean;
}