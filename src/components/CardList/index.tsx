import { ICardGame } from "../../interfaces/ICard";
import Card from "../Card";

interface CardListProps {
  cards: ICardGame[];
  excludeCard: (card: ICardGame) => void;
  searchInputValue: string;
  cardRareFilter: string;
  handleChangeFilter: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  cardTrunfoFilter: boolean;
}

function CardList({
  cards,
  excludeCard,
  searchInputValue,
  cardRareFilter,
  handleChangeFilter,
  cardTrunfoFilter,
}: CardListProps) {
  return (
    <>
      <input
        type="text"
        name="searchInputValue"
        placeholder="Procurar carta"
        data-testid="name-filter"
        onChange={handleChangeFilter}
        disabled={cardTrunfoFilter}
      />
      <select
        name="cardRareFilter"
        data-testid="rare-filter"
        value={cardRareFilter}
        onChange={handleChangeFilter}
        disabled={cardTrunfoFilter}
      >
        <option>todas</option>
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>
      <label>
        Super Trunfo
        <input
          type="checkbox"
          name="cardTrunfoFilter"
          data-testid="trunfo-filter"
          checked={cardTrunfoFilter}
          onChange={handleChangeFilter}
        />
      </label>
      <div className="card-list">
        {cards
          .filter((card) => card.cardName.includes(searchInputValue))
          .filter((card) =>
            cardRareFilter !== "todas" ? card.cardRare === cardRareFilter : card
          )
          .filter((card) => (cardTrunfoFilter ? card.cardTrunfo : card))
          .map((card) => (
            <div key={card.cardName} className="card-item">
              <Card
                cardName={card.cardName}
                cardDescription={card.cardDescription}
                cardAttr1={card.cardAttr1}
                cardAttr2={card.cardAttr2}
                cardAttr3={card.cardAttr3}
                cardImage={card.cardImage}
                cardRare={card.cardRare}
                cardTrunfo={card.cardTrunfo}
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={() => excludeCard(card)}
                // sempre que houver param -> arrow function
              >
                Excluir
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default CardList;
