import { FormEvent, useState } from "react";
import Modal from "react-modal"
import closeIMG from '../../assets/images/close.svg';
import incomeIMG from '../../assets/images/income.svg';
import outcomeIMG from '../../assets/images/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      value,
      type,
      category
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIMG} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIMG} alt="Entrada" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIMG} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}