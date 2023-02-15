import { Profile } from './profile/Profile';
import user from '../data/user.json'

import { Statistics } from './static/Statistics'
import data from '../data/data.json'

import { FriendList } from './friend/FriendList';
import friends from '../data/friends.json'

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics items={data} />
      <FriendList items = {friends} />
    </div>
  );
};
