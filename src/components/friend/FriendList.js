import PropTypes from 'prop-types';
import { FriendsList } from './Friend.style';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <div>
      <FriendsList>
        {items.map(friend => (
          <FriendListItem items={friend} key={friend.id} />
        ))}
      </FriendsList>
    </div>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
