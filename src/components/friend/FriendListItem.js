import { Online } from './FriendListItem.style';
import PropTypes from 'prop-types';

export const FriendListItem = ({ items: { avatar, name, isOnline } }) => {
  return (
    <li>
      <span>{name}</span>
      <img src={avatar} alt={name} width="48" />
      <Online status={isOnline ? 'isOnline' : 'offline'}>0</Online>
    </li>
  );
};

FriendListItem.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
