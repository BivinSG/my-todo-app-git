import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
  modalOpen,
  modalClose,
  modalTitle,
  modalBody,
  handleSave,
  handleClose,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <div className={styles["model-header"]}>
          <div className={styles["model-title"]}>{modalTitle}</div>
        </div>
        <div className={styles["model-body"]}>{modalBody}</div>
        <div className={styles["model-footer"]}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save  
          </button>
          <button className={styles["close-btn"]} onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
