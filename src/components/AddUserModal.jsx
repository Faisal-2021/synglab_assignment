import React, { useId } from "react";
import CustomModal from "./CustomModal";
import { useToggleUserAddMOdel } from "../zustand/UserModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSchema } from "../schema/AddUser";
import InputField from "./InputField";
import { useNewUserData } from "../zustand/NewUserData";

function AddUserModal() {
  const { addNewUser } = useNewUserData();
  const { open, setOpen } = useToggleUserAddMOdel();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      phone: "",
      street: "",
      city: "",
      website: "",
      company: "",
    },
  });

  async function AddNewUser(data) {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: Math.random(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        username: data.username,
        website: data?.website,
        company: data?.company,

        address: {
          street: data.street,
          city: data.city,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        addNewUser(json);
        setOpen();
      });
    reset();
  }

  return (
    <CustomModal open={open} setOpen={setOpen} title="Add New User">
      <form
        noValidate
        onSubmit={handleSubmit(AddNewUser)}
        className=" grid gap-6 mb-6 md:grid-cols-2"
      >
        <InputField
          label={"name"}
          placeholder={"Enter your name"}
          register={register}
          errorMessage={errors?.name?.message}
        />
        <InputField
          label={"email"}
          register={register}
          placeholder={"Enter your email address"}
          errorMessage={errors?.email?.message}
        />
        <InputField
          register={register}
          label={"username"}
          placeholder={"Username"}
          isInvalid={Boolean(errors?.username?.message)}
          errorMessage={errors?.username?.message}
        />
        <InputField
          register={register}
          label={"phone"}
          errorMessage={errors?.phone?.message}
          placeholder={"Enter mobile number"}
        />
        <InputField
          register={register}
          errorMessage={errors?.website?.message}
          label={"website"}
          placeholder={"website url"}
        />
        <InputField
          register={register}
          errorMessage={errors?.company?.message}
          label={"company"}
          placeholder={"company name"}
        />
        <InputField
          register={register}
          errorMessage={errors?.street?.message}
          label={"street"}
          placeholder={"House no, Street and area  "}
        />
        <InputField
          register={register}
          errorMessage={errors?.city?.message}
          label={"city"}
          placeholder={"City "}
        />

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Add User
        </button>
      </form>
      {/* buttons for close and submit */}
      <div className=" flex justify-between">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Close
        </button>
      </div>
    </CustomModal>
  );
}

export default AddUserModal;
