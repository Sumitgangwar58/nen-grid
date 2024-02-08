import React, { useState } from "react";
import { data } from "../assets/data";
import {
  deleteIcon,
  edit,
  heart,
  mail,
  phone,
  website,
} from "../assets/SvgIcons";
import Modal from "./Modal";

const imgUrl =
  "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy";

export default function Card(props: data) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={imgUrl} alt="Avatar" width={200} height={200} />
        </div>
        <div className="card-body">
          <h3 className="title">{props.name}</h3>
          <div className="item email">
            <i>{mail}</i>
            <p>{props.email}</p>
          </div>
          <div className="item">
            <i>{phone}</i>
            <p>{props.phone}</p>
          </div>
          <div className="item">
            <i>{website}</i>
            <p>{props.website}</p>
          </div>
        </div>
        <div className="card-footer">
          <button>
            <i>{heart}</i>
          </button>
          <button onClick={() => setOpen((prev) => !prev)}>
            <i>{edit}</i>
          </button>
          <button>
            <i>{deleteIcon}</i>
          </button>
        </div>
      </div>
      {open && <Modal />}
    </>
  );
}
