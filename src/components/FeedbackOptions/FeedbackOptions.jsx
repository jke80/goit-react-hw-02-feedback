import PropTypes from 'prop-types';
import { StyledButtonList } from './FeedbackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          </li>
        );
      })}
    </StyledButtonList>
  );
};

FeedBackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
