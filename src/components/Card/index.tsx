import "./styles.css";

interface CardProps {
  cardName: string;
  cardDescription: string;
  cardAttr1: string;
  cardAttr2: string;
  cardAttr3: string;
  cardImage: string;
  cardRare: string;
  cardTrunfo: boolean;
}

function Card({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
}: CardProps) {
  return (
    <div className="card-container">
      <h1 className="card-title" data-testid="name-card">
        {cardName}
      </h1>
      <img
        className="card-img"
        src={cardImage}
        alt={cardName}
        data-testid="image-card"
      />
      <article className="card-desc" data-testid="description-card">
        {cardDescription}
      </article>
      <section className="card-atr-container">
        <div className="card-atr">
          <h4>Atrib. 01</h4>
          <p data-testid="attr1-card">{cardAttr1}</p>
        </div>
        <div className="card-atr">
          <h4>Atrib. 02</h4>
          <p data-testid="attr2-card">{cardAttr2}</p>
        </div>
        <div className="card-atr">
          <h4>Atrib. 03</h4>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </div>
      </section>
      <div className="rare-container">
        <section data-testid="rare-card">{`Raridade: ${cardRare}`}</section>
        {cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div>}
      </div>
    </div>
  );
}

export default Card;
