/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    async function fetchUsers() {
      const res = await axios.get("http://localhost:3000/api/user-list", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);
      setUsers(res.data);
    }
    fetchUsers();
    document.title = "User List";
  }, []);

  return (
    <div style={{ maxWidth: "800px" }} className="mx-auto">
      {users?.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No Users Found</h2>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Username</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{user?.username}</td>
                <td>{user?.fullname}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left-circle"></i> Back
        </button>
      </div>
    </div>
  );
};

export default UserList;
