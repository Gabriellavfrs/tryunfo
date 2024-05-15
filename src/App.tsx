import "./App.css";
import { useState } from "react";
import { ICardGame, IFilter } from "./interfaces/ICard";
import Form from "./components/Form";
import Card from "./components/Card";
import CardList from "./components/CardList";

function App() {
  const [cardData, setCardData] = useState<ICardGame>({
    cardName: "",
    cardDescription: "",
    cardAttr1: "0",
    cardAttr2: "0",
    cardAttr3: "0",
    cardImage: "",
    cardRare: "normal",
    cardTrunfo: false,
  });

  const [hasTrunfo, setHasTrunfo] = useState<boolean>(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] =
    useState<boolean>(true);
  const [filter, setFilter] = useState<IFilter>({
    searchInputValue: "",
    cardRareFilter: "todas",
    cardTrunfoFilter: false,
  });
  const [cardsList, setCardsList] = useState<ICardGame[]>([]);

  function onInputChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, type, value } = event.target;
    const newValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;

    setCardData({
      ...cardData,
      [name]: newValue,
    });
    validateInputs();
  }

  function validateInputs() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = cardData;

    const sumAtributes =
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const TOTAL_MAX_ATR = 210;
    const MAX_VALUE_ATR = 90;

    const validateIsNotEmpty =
      !!cardName && !!cardDescription && !!cardImage && !!cardRare;

    const validateRequeriments =
      sumAtributes <= TOTAL_MAX_ATR &&
      Number(cardAttr1) <= MAX_VALUE_ATR &&
      Number(cardAttr2) <= MAX_VALUE_ATR &&
      Number(cardAttr3) <= MAX_VALUE_ATR &&
      Number(cardAttr1) >= 0 &&
      Number(cardAttr2) >= 0 &&
      Number(cardAttr3) >= 0;

    if (validateIsNotEmpty && validateRequeriments) {
      setIsSaveButtonDisabled(false);
    } else {
      setIsSaveButtonDisabled(true);
    }
  }

  function onSaveButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = cardData;

    const cardGame = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo) {
      setHasTrunfo(true);
    }

    setCardsList([...cardsList, cardGame]);

    setCardData({
      ...cardData,
      cardName: "",
      cardDescription: "",
      cardAttr1: "0",
      cardAttr2: "0",
      cardAttr3: "0",
      cardImage: "",
      cardRare: "normal",
      cardTrunfo: false,
    });

    setIsSaveButtonDisabled(true);
  }

  function excludeCard(item: ICardGame) {
    const newArrayCards = cardsList.filter(
      (card) => card.cardName !== item.cardName
    );

    setCardsList(newArrayCards);

    if (item.cardTrunfo) {
      setHasTrunfo(false);
    }
  }

  function handleChangeFilter(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, type, value } = event.target;
    const newValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setFilter({
      ...filter,
      [name]: newValue,
    });
  }

  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = cardData;

  const { searchInputValue, cardRareFilter, cardTrunfoFilter } = filter;

  return (
    <main>
      <div className="card-insertion-container">
        <section className="card-form">
          <Form
            onInputChange={onInputChange}
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={cardTrunfo}
            isSaveButtonDisabled={isSaveButtonDisabled}
            onSaveButtonClick={onSaveButtonClick}
            hasTrunfo={hasTrunfo}
          />
        </section>
        <section className="preview-card">
          <h2>Pré-Visualização</h2>
          <Card
            cardName={cardName}
            cardDescription={cardDescription}
            cardAttr1={cardAttr1}
            cardAttr2={cardAttr2}
            cardAttr3={cardAttr3}
            cardImage={cardImage}
            cardRare={cardRare}
            cardTrunfo={cardTrunfo}
          />
        </section>
      </div>
      <div className="card-list-container">
        <h2>Deck de Cartas</h2>
        <CardList
          cards={cardsList}
          excludeCard={excludeCard}
          searchInputValue={searchInputValue}
          handleChangeFilter={handleChangeFilter}
          cardRareFilter={cardRareFilter}
          cardTrunfoFilter={cardTrunfoFilter}
        />
      </div>
    </main>
  );
}

export default App;
