import { FriendListItem } from './FriendListItem';
import { FriendsList } from './Friend.style';

export const FriendList = ({ items: friends }) => {
  return (
    <div>
      <FriendsList>
        {friends.map(friend => (
          <FriendListItem items={friend} />
        ))}
      </FriendsList>
    </div>
  );
};
