import React from "react";

const Table = ({ car, handleDelete }) => {
  const { _id, user } = car;


  return (
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{_id}</div>
                </div>
              </div>
            </td>
            <td>
              {user.name}
            </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.hobbies}</td>
            <th>
              <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>
            </th>
          </tr>
      
  );
};

export default Table;
