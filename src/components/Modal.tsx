import React, { useContext, useState } from "react";
import { close } from "../assets/SvgIcons";
import { data } from "../assets/data";
import { DataContext } from "../dataContext/dataContext";
interface ModalI {
  open: boolean;
  onClose: () => void;
  initialValue: data;
}
const Modal = (props: ModalI) => {
  const { dispatch } = useContext(DataContext);
  const { open, onClose, initialValue } = props;

  const [editForm, setEditForm] = useState(initialValue);
  const [error, setError] = useState<string[]>([]);

  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof data
  ) => {
    setEditForm((prev) => ({ ...prev, [key]: e.target?.value }));
    if (e.target.value) {
      setError((prev) => prev.filter((i) => i !== key));
    } else setError((prev) => [...prev, key]);
  };

  const handelSubmit = () => {
    onClose();
    dispatch && dispatch(editForm, "EDIT");
  };

  const errorDiv = <div className="helper-text">This Field is Required</div>;

  return (
    <>
      <div
        className="modal-overlay"
        style={{ display: open ? "block" : "none" }}
        onClick={onClose}
      ></div>
      <div className={`${open ? "open" : "close"} modal`}>
        <div className="modal-head">
          <h3>Basic Modal</h3>
          <button onClick={onClose}>{close}</button>
        </div>
        <form className="modal-body">
          <label>
            <p>Name:</p>
            <input
              className={`${error.includes("name") ? "error" : ""}`}
              type="text"
              value={editForm.name}
              onChange={(e) => handelChange(e, "name")}
            />
            {error.includes("name") ? errorDiv : null}
          </label>
          <label>
            <p>Email:</p>
            <input
              className={`${error.includes("email") ? "error" : ""}`}
              type="text"
              value={editForm.email}
              onChange={(e) => handelChange(e, "email")}
            />
            {error.includes("email") ? errorDiv : null}
          </label>
          <label>
            <p>Phone:</p>
            <input
              className={`${error.includes("phone") ? "error" : ""}`}
              type="text"
              value={editForm.phone}
              onChange={(e) => handelChange(e, "phone")}
            />
            {error.includes("phone") ? errorDiv : null}
          </label>
          <label>
            <p>Website:</p>
            <input
              className={`${error.includes("website") ? "error" : ""}`}
              type="text"
              value={editForm.website}
              onChange={(e) => handelChange(e, "website")}
            />
            {error.includes("website") ? errorDiv : null}
          </label>
        </form>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button disabled={error.length !== 0} onClick={handelSubmit}>
            Ok
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
