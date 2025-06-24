import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../store/reducers/UserReducer";
import { FaTrash } from "react-icons/fa";

function Users() {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const DeleteHandler = (id) => {
    dispatch(userDelete(id));
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 py-10 px-4 text-white flex justify-center">
      <div className="w-[60vw] bg-transparent-200 shadow-xl rounded-xl p-8 ">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 border-b  border-gray-700 pb-2">
          User List
        </h1>

        <ul className="space-y-6 gap-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-gray-700 rounded-lg p-4 flex justify-between items-center hover:bg-gray-600 transition-all duration-200 border-b-2 border-pink-600"
            >
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>

              <button
                onClick={() => DeleteHandler(user.id)}
                className="text-red-500 hover:text-red-700 transition-all duration-150"
                title="Delete User"
              >
                <FaTrash size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
