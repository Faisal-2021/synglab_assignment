import React from "react";
import { useLocation } from "react-router-dom";

function Userdetails() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className=" bg-sky-300 w-full flex flex-col font-normal gap-3 p-5 min-h-screen border-2 grow text-gray-600 ">
      <p>
        Id :<span className=" font-semibold">{data.id} </span>{" "}
      </p>

      <p className=" ">
        Name :<span className=" font-semibold"> {data.name}</span>
      </p>
      <p>
        Email Address : <span className=" font-semibold">{data.email}</span>
      </p>
      <p>
        Username : <span className=" font-semibold">{data.username}</span>
      </p>
      <p>
        Phone number :<span className=" font-semibold">{data.phone}</span>{" "}
      </p>
      <p>
        Website : <span className=" font-semibold">{data.website}</span>
      </p>
      <p>
        company :<span className=" font-semibold">{data.company?.name}</span>{" "}
      </p>
      <p className=" ">
        Address:{" "}
        <span className=" font-semibold inline-flex  flex-col">
          <span>{data?.address?.street}</span>
          <span>{data?.address?.city}</span>
        </span>
      </p>
    </div>
  );
}

export default Userdetails;
