import { Transaction, TransactionTable } from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionTable>
        {items.map(item => (
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </TransactionTable>
    </Transaction>
  );
};
