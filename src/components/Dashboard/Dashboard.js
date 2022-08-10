import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../../Firebase';

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth.currentUser);
  })

  const handleSignOut = async (e) => {
    await auth.signOut();
    if (!auth.currentUser) {
      navigate("/login");
    }
  }

  return (
    <div className="d-flex flex-column align-items-center m-5 p-5">
      <h1>Welcome, {auth?.currentUser?.displayName}!</h1>
      <p className="m-3">You're logged in.</p>
      <div className="d-flex">
        <button className="btn btn-dark btn-lg m-3" onClick={handleSignOut} >Sign out</button>
        <button className="btn btn-dark btn-lg m-3" onClick={() => navigate("/edit")}>Edit</button>
      </div>
    </div>
  );
};

export default Dashboard;