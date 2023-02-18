import { Online } from './FriendListItem.style';

export const FriendListItem = ({ items: { avatar, name, id, isOnline } }) => {
  return (
    <li key={id}>
      <span>{name}</span>
      <img src={avatar} alt={name} width="48" />
      <Online status={isOnline ? 'isOnline' : 'offline'}>0</Online>
    </li>
  );
};
