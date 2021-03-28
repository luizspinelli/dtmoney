import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOPen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOPen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  );
}
