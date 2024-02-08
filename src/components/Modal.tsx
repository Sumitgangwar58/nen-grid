import React from "react";
import { close } from "../assets/SvgIcons";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-head">
        <h3>Basic Modal</h3>
        <button>{close}</button>
      </div>
      <form className="modal-body">
        <label>
          <p>Name:</p>
          <input type="text" />
        </label>
        <label>
          <p>Email:</p>
          <input type="text" />
        </label>
        <label>
          <p>Phone:</p>
          <input type="text" />
        </label>
        <label>
          <p>Website:</p>
          <input type="text" />
        </label>
      </form>
      <div className="modal-footer">
        <button>Cancel</button>
        <button>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
