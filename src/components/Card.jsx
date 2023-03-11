import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card-container">
        <h1 className="card-title" data-testid="name-card">{ cardName }</h1>
        <img
          className="card-img"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <article
          className="card-desc"
          data-testid="description-card"
        >
          { cardDescription }
        </article>
        <section className="card-atr-container">
          <div className="card-atr">
            <h4>Atrib. 01</h4>
            <p data-testid="attr1-card">{ cardAttr1 }</p>
          </div>
          <div className="card-atr">
            <h4>Atrib. 02</h4>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
          </div>
          <div className="card-atr">
            <h4>Atrib. 03</h4>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
        </section>
        <div className="rare-container">
          <section data-testid="rare-card">
            { `Raridade: ${cardRare}` }
          </section>
          { cardTrunfo && <div data-testid="trunfo-card">Super Trunfo</div> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
