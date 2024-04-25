import React from "react";
import "./Dialog.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { isDialogShowFalse } from "../../../redux/slices/modelSlice";

const Dialog: React.FC= () => {
    const {isDialogShow} = useAppSelector(state => state.modal);

    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
      const checked = e.target.checked
      console.log(checked,"checked");
      localStorage.setItem("dialog", JSON.stringify(!checked));
    }


  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => dispatch(isDialogShowFalse())}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="img/modal-dialog.jpg" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>NEWSLETTER</h3>
            </div>
            <p className="popup-text">
              Sign up to our newsletter and get exclusive deals you won find any
              where else straight to your inbox!
            </p>
            <form className="popup-form">
              <input type="text" placeholder="Enter Email Address Here" />
              <button className="btn btn-primary">SUBSCRIBE</button>
              <label>
                <input onChange={handleChange} type="checkbox" />
                <span>Don`t show this popup again</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal-overlay"
        onClick={() => dispatch(isDialogShowFalse())}
      ></div>
    </div>
  );
};

export default Dialog;