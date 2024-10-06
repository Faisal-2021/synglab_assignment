import { useEffect, useState } from "react";
import "./App.css";
import AddUserModal from "./components/AddUserModal";
import { useNewUserData } from "./zustand/NewUserData";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import DeleteUserModal from "./components/DeleteUserModal";

// Zustand imports
import { useToggleUserDeleteModal } from "./zustand/deleteModal";
import { useToggleUserUpdateModal } from "./zustand/updateModal";
import UpdateuserModal from "./components/UpdateuserModal";

function App() {
  const { users, setUsers } = useNewUserData();
  const { setOpen } = useToggleUserDeleteModal();

  const {setOpenU} = useToggleUserUpdateModal()

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setUsers(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        // setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForPosts();
  }, []);

  const [user, setUser] = useState(); //state that contain user id and name to perform delete operation

  // function to handle delete modal
  function handleDeleteModal(user) {
    setUser(user);
    setOpen();

  }

  function handleUpdateModal(user){
    setOpenU()
    setUser(user);
  }

  return (
    <div className=" relative bg-gray-50 ">
      <Navbar />

      <table className=" mt-20  w-full text-sm text-lef text-gray-500  h-full">
        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" text-white font-medium h-full ">
          {users?.map((item, index) => (
            <tr
              //  onClick={handleUserDetails}
              key={index}
              className="odd:bg-emerald-500 odd:hover:bg-emerald-600 even:hover:bg-gray-600 hover:cursor-pointer even:bg-gray-500  border-b "
            >
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.username}</td>
              <td className="px-6 py-4 flex  gap-x-2">
                <Link
                  to={`userdetails/${item.id}`}
                  state={{
                    data: item,
                  }}
                >
                  <span className=" group relative ">
                    <span className=" invisible group-hover:visible  absolute bg-slate-700 py-0.5 px-2 rounded-md text-sm -bottom-8">
                      View
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" w-5 h-5  text-sky-400 hover:text-sky-300"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                </Link>
                <span
                  className=" group relative"
                  onClick={() => handleDeleteModal(item)}
                >
                  <span className=" invisible group-hover:visible  absolute bg-rose-500 py-0.5 px-2 rounded-md text-sm -bottom-8">
                    delete
                  </span>
                  <svg
                    className=" text-red-400 hover:text-red-300 w-5 h-5 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </span>

                <span
                  className=" group relative"
                  onClick={() => handleUpdateModal(item)}
                >
                  <span className=" invisible group-hover:visible  absolute bg-green-500 py-0.5 px-2 rounded-md text-sm -bottom-8">
                    Update
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" w-5 h-5 text-blue-500"
                  >
                    <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                    <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                    <circle cx="10" cy="7" r="4" />
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddUserModal />
      <DeleteUserModal user={user} />
      <UpdateuserModal user={user} />
    </div>
  );
}

export default App;
