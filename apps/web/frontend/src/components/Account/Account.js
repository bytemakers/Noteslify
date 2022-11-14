import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Switch from "react-js-switch";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import GlobalContext from "../../context/GlobalContext";
import { Modal } from "../common/Modal";
import Sidenav from "../Sidenav/Sidenav";
import "./Account.css";


const Account = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOpen, setOpen] = useState(false);
  const { theme, setTheme } = useContext(GlobalContext);
  const navigate = useNavigate();

  const openChangePasswordDialog = () => {
    const popupBox = document.getElementById("popup-box");
    popupBox.classList.add("show");

    document.getElementById("modal-title-input").focus();
  };

  const closeChangePasswordDialog = () => {
    document.getElementById("modal-current-password-input").value = "";
    document.getElementById("modal-new-password-input").value = "";
    document.getElementById("modal-confirm-password-input").value = "";
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    document.getElementById("popup-box").classList.remove("show");
  };

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changePassword = async (e) => {
    e.preventDefault();

    if (
      currentPassword.length < 8 ||
      newPassword.length < 8 ||
      confirmPassword.length < 8
    ) {
      toast.error("Password should be at least 8 characters.");
    } else if (newPassword !== confirmPassword) {
      toast.error("Passwords did not match!");
    } else {
      const token = sessionStorage.getItem("auth-token");
      const response = await fetch(
        "http://localhost:8181/api/auth/login/changepassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify({
            currentpassword: currentPassword,
            newpassword: newPassword,
          }),
        }
      );
      const responseJson = await response.json();

      if (response.status === 200) {
        toast.success(responseJson.success);
        closeChangePasswordDialog();
      } else {
        toast.error(responseJson.error);
      }
    }
  };


  const deleteAccount = async () => {

    const authToken = sessionStorage.getItem('auth-token');
    const response = await fetch('http://localhost:8181/api/auth/deleteaccount', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authToken
      }
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      toast.success(json.success);
    }
    else {
      toast.error(json.error);
    }

  }

  useEffect(() => {
    if (!sessionStorage.getItem('auth-token')) {
      navigate('/login', { replace: true });
      return
    }
  }, [navigate])



  return (
    <>
      <Helmet>
        <title>Noteslify | My Account</title>
        <meta name="description" content="Manage Your Noteslify Account From Here." />
      </Helmet>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Sidenav />
      <section className="home">
        <div className="head">
          <div className="text">My Account</div>
          <div>
            <label>
              <Switch
                value={isSwitchOn}
                onChange={switch_onChange_handle}
                backgroundColor={{ on: "var(--primary-color)", off: "white" }}
                borderColor={{ on: "var(--primary-color)", off: "white" }}
              />
            </label>
          </div>
        </div>

        {/* Change Password Modal Starts */}
        <div id="popup-box" className="popup-box">
          <div className="popup">
            <div className="content">
              <header>
                <p>Change Password</p>
                <i
                  onClick={closeChangePasswordDialog}
                  className="fa-solid fa-xmark"
                ></i>
              </header>
              <form
                onSubmit={changePassword}
                id="notes-form"
                action="#"
                encType="multipart/form-data"
              >
                <div className="row title">
                  <label>Current Password</label>
                  <input
                    id="modal-current-password-input"
                    type="password"
                    name="title"
                    spellCheck="false"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>

                <div className="row title">
                  <label>New Password</label>
                  <input
                    id="modal-new-password-input"
                    type="password"
                    name="title"
                    spellCheck="false"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div className="row title">
                  <label>Confirm Password</label>
                  <input
                    id="modal-confirm-password-input"
                    type="password"
                    name="title"
                    spellCheck="false"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button>Change Password</button>
              </form>
            </div>
          </div>
        </div>
        {/* Change Password Modal Ends */}

        <div className="wrapper">
          <li
            onClick={() => {
              openChangePasswordDialog();
            }}
            className="add-box"
          >
            <div className="icon">
              <i className="fa-solid fa-key"></i>
            </div>
            <p>Change Password</p>
          </li>

          <li
            onClick={() => {
              setOpen(true)
            }}
            className="add-box"
          >
            <div className="icon">
              <i className="fa-solid fa-key"></i>
            </div>
            <p>Delete Account</p>
          </li>
        </div>

        <Modal title="Are you sure you want to delete your account?" isOpen={isOpen} onClose={() => setOpen(false)} onConfirm={() => {
          deleteAccount();
          setOpen(false);

        }} />
      </section>
    </>
  );
};

export default Account;
