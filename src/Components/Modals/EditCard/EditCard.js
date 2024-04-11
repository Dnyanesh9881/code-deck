import React, { useContext } from "react";
import "../CreateNewPlaygroundModal/style.scss";
import { modalContext } from "../../../Context/ModalContext/ModalProvider";
import { PlaygroundContext } from "../../../Context/PlaygroundContext/PlaygroundProvider";

const EditCard = () => {
  const modalFeatures = useContext(modalContext);
  const { editFile } = useContext(PlaygroundContext);

  function editCard(e) {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    editFile(
      modalFeatures.modalPayload.folderId,
      modalFeatures.modalPayload.fileId,
      fileName
    );
    modalFeatures.setModalPayload(null);
    modalFeatures.closeModal();
  }
  return (
    <div className="modal">
      <form className="inner-modal" on onSubmit={editCard}>
        <div className="item">
          <h2>Edit File Title</h2>
          <span
            class="material-symbols-outlined"
            onClick={modalFeatures.closeModal}
          >
            close
          </span>
        </div>
        <div className="item" style={{ gap: "1rem" }}>
          <input name="fileName" style={{ flex: "1" }} />
          <button className="modal-btn" type="submit">
            Update Title
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
