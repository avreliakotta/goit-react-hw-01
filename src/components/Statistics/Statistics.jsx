import css from './Statistics.module.css'
import PropTypes from 'prop-types';
export function Statistics({ title, stats }) {
 const newStats = stats.reduce((acc, item) => {
  if (!acc[item.label]) {
    acc[item.label] = { label: item.label, percentage: 0 };
  }
  acc[item.label].percentage += item.percentage;
  console.log(acc);
  return acc;
}, {});

const newArr = Object.values(newStats);
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        { newArr.map((item) => {
          return (
            <li key={item.label} className={css.item}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}