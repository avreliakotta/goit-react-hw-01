import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export const TransactionHistory=({ items })=> {
const groupedData = items.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item);
  return acc;
}, {});

console.log(groupedData);
const newArr = Object.values(groupedData).flat(1);
   
  return (<table className={css.transactionHhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {newArr.map(({ id, type, amount, currency }) => {
          return <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        })
        }
        
      </tbody>
    </table>
  )
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
}