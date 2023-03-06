import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Nome da Carta
          <input type="text" name="" data-testid="name-input" />
        </label>
        <label>
          Descrição da Carta
          <textarea name="" cols="30" rows="10" data-testid="description-input" />
        </label>
        <label>
          Primeiro atributo da carta
          <input type="number" name="" data-testid="attr1-input" />
        </label>
        <label>
          Segundo atributo da carta
          <input type="number" name="" data-testid="attr2-input" />
        </label>
        <label>
          Terceiro atributo da carta
          <input type="number" name="" data-testid="attr3-input" />
        </label>
        <label>
          Src da imagem
          <input type="text" name="" data-testid="image-input" />
        </label>
        <label>
          Raridade da carta
          <select name="" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label>
          Super Trunfo
          <input type="checkbox" name="" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button" type="buton">Salvar</button>
      </form>
    );
  }
}

export default Form;
