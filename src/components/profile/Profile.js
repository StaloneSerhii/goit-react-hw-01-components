export const Profile = ({
  items: {
    avatar,
    username,
    tag,
    location,
    stats: { likes, views, followers },
  },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers:</span>
          <span> {followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span> {views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       location: PropTypes.string.isRe,
//     })
//   ),
// };
