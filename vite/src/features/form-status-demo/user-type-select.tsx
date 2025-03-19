import { FC, use } from 'react';
import type { getUserTypes } from './api/get-user-types';

type Props = {
  getUserTypes: ReturnType<typeof getUserTypes>;
};

export const UserTypeSelect: FC<Props> = ({ getUserTypes }) => {
  const userTypes = use(getUserTypes);
  console.log('userTypes', userTypes);
  return (
    <select name="userType">
      {userTypes.map((userType) => (
        <option key={userType} value={userType}>
          {userType}
        </option>
      ))}
    </select>
  );
};
