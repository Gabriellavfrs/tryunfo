import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const {
      cards,
      excludeCard,
      searchInputValue,
      cardRareFilter,
      handleChangeFilter,
      cardTrunfoFilter,
    } = this.props;

    return (
      <>
        <input
          type="text"
          name="searchInputValue"
          placeholder="Procurar carta"
          data-testid="name-filter"
          onChange={ handleChangeFilter }
          disabled={ cardTrunfoFilter }
        />
        <select
          name="cardRareFilter"
          data-testid="rare-filter"
          value={ cardRareFilter }
          onChange={ handleChangeFilter }
          disabled={ cardTrunfoFilter }
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
            checked={ cardTrunfoFilter }
            onChange={ handleChangeFilter }
          />
        </label>
        <div className="card-list">
          {cards
            .filter((card) => card.cardName.includes(searchInputValue))
            .filter((card) => (cardRareFilter !== 'todas'
              ? card.cardRare === cardRareFilter : card))
            .filter((card) => (cardTrunfoFilter ? card.cardTrunfo : card))
            .map((card) => (
              <div key={ card.cardName } className="card-item">
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => excludeCard(card) }
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
}
const cardProps = PropTypes.shape({
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
});

CardList.propTypes = {
  cards: PropTypes.arrayOf(cardProps).isRequired,
  excludeCard: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  cardTrunfoFilter: PropTypes.bool.isRequired,
};

export default CardList;
