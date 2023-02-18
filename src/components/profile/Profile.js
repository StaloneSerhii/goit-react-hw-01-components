import PropTypes from 'prop-types';
import { NameStlye, Stats, ListStat, ProfileCard } from './Profile.style';

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
    <ProfileCard>
      <div>
        <img src={avatar} alt="User avatar" width="250px" />
        <NameStlye>{username}</NameStlye>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ListStat>
        <li>
          <span>Followers:</span>
          <Stats> {followers}</Stats>
        </li>
        <li>
          <span>Views:</span>
          <Stats> {views}</Stats>
        </li>
        <li>
          <span>Likes:</span>
          <Stats> {likes}</Stats>
        </li>
      </ListStat>
    </ProfileCard>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
