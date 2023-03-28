import PropTypes from 'prop-types';
import { Button, ReviewsList } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrayKeys = Object.keys(options);
  return (
    <>
      <ReviewsList>
        {arrayKeys.map(button => (
          <li key={button}>
            <Button onClick={() => onLeaveFeedback(button)}>{button}</Button>
          </li>
        ))}
      </ReviewsList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
