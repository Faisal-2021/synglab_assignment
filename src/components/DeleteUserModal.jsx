import React from "react";
import CustomModal from "./CustomModal";
import { useToggleUserDeleteModal } from "../zustand/deleteModal";
import { useNewUserData } from "../zustand/NewUserData";

function DeleteUserModal({ user }) {
  const { open, setOpen } = useToggleUserDeleteModal();

  const { deleteUser } = useNewUserData();

  async function DeleteUser() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("user deleted", user.id);
        deleteUser(user.id);
        setOpen();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete() {
    DeleteUser();
  }

  return (
    <CustomModal open={open} setOpen={setOpen} title="Delete a user">
      <p className=" text-rose-500 font-medium my-1">
        Are you sure? Do you want to Delete a User - {user?.name} ?
      </p>

      <button
        type="button"
        onClick={handleDelete}
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Delete
      </button>
    </CustomModal>
  );
}

export default DeleteUserModal;
