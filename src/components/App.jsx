import { Profile } from './Profile';
import user from '../data/user.json'

import { Statistics } from './Statistics'
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
