import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.headItem}>Type</th>
          <th className={s.headItem}>Amount</th>
          <th className={s.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.tableRow}>
            <td className={s.tableItem}>{item.type}</td>
            <td className={s.tableItem}>{item.amount}</td>
            <td className={s.tableItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
