export const FriendListItem = ({ items: { avatar, name, id, isOnline } }) => {
  return (
    <li key={id}>
      <span>{name}</span>
      <img src={avatar} alt={name} width="48" />
      <p status={isOnline ? 'isOnline' : 'offline'}></p>
    </li>
  );
};
