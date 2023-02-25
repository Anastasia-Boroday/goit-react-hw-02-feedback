import PropTypes from 'prop-types';
export function Statistics({ good, neutral, bad, total, positivePercentage}) {
  return(

    <ul className="stat-list">
      <li className="stat-item">Good: {good}</li>
      <li className="stat-item">Neutral: {neutral}</li>
      <li className="stat-item">Bad: {bad}</li>
      <li className="stat-item">Total:{total}</li>
      <li className="stat-item">Positive feedback:{positivePercentage}%</li>
    </ul>
  )
};
Statistics.PropType = {
  good: PropTypes.node.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};