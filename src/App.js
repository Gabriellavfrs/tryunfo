import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    // estados iniciais
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cards: [],
      searchInputValue: '',
      cardRareFilter: 'todas',
      cardTrunfoFilter: false,
    };
  }

  // função genérica para capturar o nome e valor (digitado ou selecionado) do elemento
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // atribuição do valor do elemento para seu respectivo estado
    this.setState({
      [name]: value,
    }, this.validateInputs);
  }

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sumAtributes = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const TOTAL_MAX_ATR = 210;
    const MAX_VALUE_ATR = 90;

    const validateIsNotEmpty = !!cardName && !!cardDescription
      && !!cardImage && !!cardRare;

    const validateRequeriments = sumAtributes <= TOTAL_MAX_ATR
      && Number(cardAttr1) <= MAX_VALUE_ATR && Number(cardAttr2) <= MAX_VALUE_ATR
      && Number(cardAttr3) <= MAX_VALUE_ATR && Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0 && Number(cardAttr3) >= 0;

    if (validateIsNotEmpty && validateRequeriments) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  onSaveButtonClick = (event) => {
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
    } = this.state;
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
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prevState) => ({
      cards: [...prevState.cards, cardGame],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  excludeCard = (item) => {
    const { cards } = this.state;
    const newArrayCards = cards.filter((card) => card.cardName !== item.cardName);

    this.setState({
      cards: newArrayCards,
    });

    if (item.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  handleChangeFilter = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
      searchInputValue,
      cardRareFilter,
      cardTrunfoFilter,
    } = this.state;

    return (
      <main>
        <div className="card-insertion-container">
          <section className="card-form">
            <Form
              onInputChange={ this.onInputChange }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
          </section>
          <section className="preview-card">
            <h2>Pré-Visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </div>
        <div className="card-list-container">
          <h2>Deck de Cartas</h2>
          <CardList
            cards={ cards }
            excludeCard={ this.excludeCard }
            searchInputValue={ searchInputValue }
            onInputChange={ this.onInputChange }
            handleChangeFilter={ this.handleChangeFilter }
            cardRareFilter={ cardRareFilter }
            cardTrunfoFilter={ cardTrunfoFilter }
          />
        </div>
      </main>
    );
  }
}

export default App;
