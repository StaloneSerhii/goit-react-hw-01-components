import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items: friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem items={friend} />
      ))}
    </ul>
  );
};
