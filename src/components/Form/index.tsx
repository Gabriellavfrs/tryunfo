import "./styles.css";

type FormProps = {
  cardName: string;
  cardDescription: string;
  cardAttr1: string;
  cardAttr2: string;
  cardAttr3: string;
  cardImage: string;
  cardRare: string;
  cardTrunfo: boolean;
  hasTrunfo: boolean;
  isSaveButtonDisabled: boolean;
  onInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onSaveButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Form({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
  hasTrunfo,
  isSaveButtonDisabled,
  onInputChange,
  onSaveButtonClick,
}: FormProps) {
  return (
    <form className="form-container">
      <h2>Adicione uma nova carta</h2>
      <label>
        Nome da Carta
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
          value={cardName}
          onChange={onInputChange}
        />
      </label>
      <label>
        Descrição
        <textarea
          name="cardDescription"
          cols={30}
          rows={10}
          data-testid="description-input"
          value={cardDescription}
          onChange={onInputChange}
        />
      </label>
      <label>
        Atributo 01
        <input
          type="number"
          name="cardAttr1"
          data-testid="attr1-input"
          value={cardAttr1}
          onChange={onInputChange}
        />
      </label>
      <label>
        Atributo 02
        <input
          type="number"
          name="cardAttr2"
          data-testid="attr2-input"
          value={cardAttr2}
          onChange={onInputChange}
        />
      </label>
      <label>
        Atributo 03
        <input
          type="number"
          name="cardAttr3"
          data-testid="attr3-input"
          value={cardAttr3}
          onChange={onInputChange}
        />
      </label>
      <label>
        Src da imagem
        <input
          type="text"
          name="cardImage"
          data-testid="image-input"
          value={cardImage}
          onChange={onInputChange}
        />
      </label>
      <label>
        Raridade da carta
        <select
          name="cardRare"
          data-testid="rare-input"
          value={cardRare}
          onChange={onInputChange}
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
      <label>
        Super Trunfo
        {hasTrunfo ? (
          <span>Você já tem um Super Trunfo em seu baralho</span>
        ) : (
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={cardTrunfo}
            onChange={onInputChange}
          />
        )}
      </label>
      <button
        data-testid="save-button"
        type="submit"
        disabled={isSaveButtonDisabled}
        onClick={onSaveButtonClick}
      >
        Salvar
      </button>
    </form>
  );
}

export default Form;
