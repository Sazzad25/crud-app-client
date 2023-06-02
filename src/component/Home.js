import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Table from "./Table";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (_id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://crud-server-rho.vercel.app/information/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = displayUsers.filter((odr) => odr._id !== _id);
            setDisplayUsers(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl">Total Users: {displayUsers.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-xl">ID</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Phone Number</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Hobbies</th>
              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayUsers.map((car) => (
              <Table
                key={car._id}
                car={car}
                handleDelete={handleDelete}
              ></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;