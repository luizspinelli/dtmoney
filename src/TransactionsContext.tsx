import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>
interface TransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => void;
}

export const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, [])

  function createTransaction(transaction: ITransactionInput) {
    api.post('transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}
