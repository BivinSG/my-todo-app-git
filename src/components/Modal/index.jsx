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
  // Hide modal when closed
  if (!modalOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <div className={styles["modal-title"]}>{modalTitle}</div>
        </div>

        <div className={styles["modal-body"]}>{modalBody}</div>

        <div className={styles["modal-footer"]}>
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
