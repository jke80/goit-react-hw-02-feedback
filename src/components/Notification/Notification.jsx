import PropTypes from 'prop-types';
import { StyledNotification } from './Notification.styled';

export const Notification = ({ message }) => (
  <StyledNotification>{message}</StyledNotification>
);

Notification.propType = {
  message: PropTypes.string.isRequired,
};
