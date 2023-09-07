import React, {useContext} from 'react';

import MemberContext from '../../context/MemberContext';
import MemberForm from '../../components/memberComponents/MemberForm';

const AddMemberScreen = ({navigation}) => {
  const {addMember} = useContext(MemberContext);

  return (
    <MemberForm
      onSubmit={newMember => {
        addMember(newMember, () => navigation.navigate('Members'));
      }}
    />
  );
};

export default AddMemberScreen;
