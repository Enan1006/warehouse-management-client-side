import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './AccountBanner.css'

const AccountBanner = () => {
  const handelBtnClick = useNavigate();
  return (
    <div className="bg-dark bg-opacity-10">
        <div className="container py-5 banner">
      <div className="first_grid-column grid-column">
        <h2>Sign in for a members only experience</h2>
        <p>Manage your preferred stores, orders and wishlist</p>
      </div>
      <div className="second-first_grid-column grid-column">
        <div className="d-flex pt-2">
          <div className="w-50 ">
            <Button
              className="btn btn-danger px-5 py-2"
              onClick={() => handelBtnClick("/login")}
            >
              SIGN IN
            </Button>
          </div>
          <div className="w-50">
            <Button
              className="btn btn-dark"
              onClick={() => handelBtnClick("/register")}
            >
              CREATE ACCOUNT
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountBanner;
