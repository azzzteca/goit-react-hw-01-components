import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => {
          // const itemClass = () => {
          //   switch (el.label) {
          //     case '.docx':
          //       return 'blue';
          //     case '.pdf':
          //       return 'violet';
          //     case '.mp3':
          //       return 'red';
          //     case '.psd':
          //       return 'green';
          //     default:
          //       return null;
          //   }
          // };

          // const colorClass = itemClass();
          // console.log(colorClass);

          let colorClass;
          console.log(colorClass);

          switch (el.label) {
            case '.docx':
              colorClass = 'blue';
              break;
            case '.pdf':
              colorClass = 'violet';
              break;
            case '.mp3':
              colorClass = 'red';
              break;
            case '.psd':
              colorClass = 'green';
              break;
            default:
              return null;
          }
          console.log(colorClass);

          return (
            <li key={el.id} className={`s.{colorClass}`}>
              <span className={s.label}>{el.label}</span>
              <span className="percentage">{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
