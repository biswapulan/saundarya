import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import Menubar from "./homeComponents/menuBar";
import Saloncard from "./homeComponents/salonCard";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  // const [products, setProducts] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Loggedout Successfully.");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  // const fetchProducts = async () => {
  //   try {
  //     const url = "http://localhost:8080/products";
  //     const headers = {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     };
  //     const response = await fetch(url, headers);
  //     const result = await response.json();
  //     console.log(result);
  //     setProducts(result);
  //   } catch (err) {
  //     handleError(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  return (
    <div className="home_page">
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Salons</h2>
        <Saloncard />
        <Saloncard />
      </div>
      <Menubar />
      <ToastContainer />
    </div>
  );
}

export default Home;
