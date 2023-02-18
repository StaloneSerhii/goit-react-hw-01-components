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
