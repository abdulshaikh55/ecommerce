import React from "react";
import styles from "./Admin.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../components/AddProduct/AddProduct";
import ListProducts from "../../components/ListProducts/ListProducts";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <Sidebar />

      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProducts />} />
      </Routes>
    </div>
  );
};

export default Admin;
