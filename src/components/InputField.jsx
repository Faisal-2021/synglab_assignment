import React from "react";

function InputField({
  label,
  placeholder,
  errorMessage,
  register,
  isDisabled = false,
}) {
  return (
    <div>
      <label className="block capitalize mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        disabled={isDisabled}
        {...register(label)}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        // defaultValue={defaultValue}
      />
      {<p className=" text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
}

export default InputField;
