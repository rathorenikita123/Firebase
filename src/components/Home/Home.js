import React from "react";
import './Home.css';
import Login from '../../components/Login/LogIn';

const Home = () => {
  return (
    <>
      <h1 className="text-center m-3">SOLRUF</h1>
      <div>
        <Login />
      </div>
    </>
  );
};

export default Home;