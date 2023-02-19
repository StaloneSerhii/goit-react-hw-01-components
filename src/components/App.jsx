import { Profile } from './profile/Profile';
import user from '../data/user.json';
import { ProfileStyle } from './profile/Profile.style';

import { Statistics } from './statistic/Statistics';
import data from '../data/data.json';

import { FriendList } from './friend/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './transaction/TransactionHistory';
import transaction from '../data/transactions.json';

import { Container } from './App.style';

export const App = () => {
  return (
    <Container>
      <ProfileStyle>
        <Profile items={user} />
      </ProfileStyle>
      <Statistics title={"Upload stats"} items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};
