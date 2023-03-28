import PropTypes from 'prop-types';
import { NotificationStyle } from './Notification.styled';
export const Notification = ({ message }) => {
  <NotificationStyle>{message}</NotificationStyle>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
