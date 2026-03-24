import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ handleClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <button className="btn btn-danger" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
