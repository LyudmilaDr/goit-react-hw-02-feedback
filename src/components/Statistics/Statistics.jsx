import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>
          <h3>Good:</h3>
          <span>{good}</span>
        </StatisticsItem>
        <StatisticsItem>
          <h3>Neutral:</h3>
          <span>{neutral}</span>
        </StatisticsItem>
        <StatisticsItem>
          <h3>Bad:</h3>
          <span>{bad}</span>
        </StatisticsItem>
        <StatisticsItem>
          <h3>Total:</h3>
          <span>{total}</span>
        </StatisticsItem>
        <StatisticsItem>
          <h3>Positive feedback:</h3>
          <span>{positiveFeedback}%</span>
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
