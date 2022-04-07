import { useState } from "react";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import Modal from 'react-modal'

Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}


