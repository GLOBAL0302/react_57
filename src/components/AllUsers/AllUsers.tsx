import { IUSER } from '../../types';
import User from './User/User';

interface Props {
  allUsers: IUSER[];
}
const AllUsers: React.FC<Props> = ({ allUsers }) => {
  return (
    <div className="col-4">
      {allUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AllUsers;
