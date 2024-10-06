import React, { useEffect } from "react";
import CustomModal from "./CustomModal";
// import { useToggleUserUpdateModal } from "../zustand/updateModal";
import InputField from "./InputField";
import { useToggleUserUpdateModal } from "../zustand/updateModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../schema/AddUser";
import { useNewUserData } from "../zustand/NewUserData";

function UpdateuserModal({ user }) {
  const { updateUser, deleteUser } = useNewUserData();
  const { openU, setOpenU } = useToggleUserUpdateModal();
  console.log(user);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: user?.name,
      email: "",
      username: "",
      phone: "",
      street: "",
      city: "",
      website: "",
      company: "",
    },
  });

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("phone", user.phone);
      setValue("username", user.username);
      setValue("website", user.website);
      setValue("street", user.address.street);
      setValue("city", user.address.city);
      setValue("company", user.company.name);
    }
  }, [user, setValue]);

  function UpdateUserData(data) {
    deleteUser(user.id);
    updateUser({ ...data, id: user.id });
    setOpenU()
  }

  return (
    <CustomModal open={openU} setOpen={setOpenU} title="Update User Details">
      <form
        noValidate
        onSubmit={handleSubmit(UpdateUserData)}
        className=" grid gap-6 mb-6 md:grid-cols-2"
      >
        <InputField
          defaultValue={user?.name}
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
          isDisabled={true}
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
          Update User details
        </button>
      </form>
    </CustomModal>
  );
}

export default UpdateuserModal;
