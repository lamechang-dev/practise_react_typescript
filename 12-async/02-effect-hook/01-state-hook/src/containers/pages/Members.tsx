import { FC } from 'react';
import { useParams } from 'react-router';

import Members from 'components/pages/Members';
import useGetMembers from 'hooks/use-get-members';

const EnhancedMembers: FC = () => {
  const { orgCode = '' } = useParams();
  const { users, isLoading } = useGetMembers(orgCode);

  return <Members {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
