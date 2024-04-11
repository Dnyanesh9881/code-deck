import React, { useContext } from "react";
import Card from "../Card/Card";
import { modalContext } from "../../Context/ModalContext/ModalProvider";
import { PlaygroundContext } from "../../Context/PlaygroundContext/PlaygroundProvider";

function Folder({ data }) {
  const modalFeatures = useContext(modalContext);
  const { deleteFolder } = useContext(PlaygroundContext);

  function openNewPlaygroundModal() {
    modalFeatures.setModalPayload(data.id);
    modalFeatures.openModal("NEW_PLAYGROUND");
  }
  function openEditFolderModal() {
    modalFeatures.setModalPayload(data.id);

    modalFeatures.openModal("EDIT_FOLDER");
  }
  function deleteThisFolder() {
    deleteFolder(data.id);
  }
  return (
    <div className="folder">
      <div className="folder-items">
        <div className="folder-header">
          <span style={{ color: "#ffca28" }} class="material-symbols-outlined">
            folder
          </span>
          <h2>{data.title}</h2>
        </div>
        <div className="folder-btns">
          <span class="material-symbols-outlined" onClick={deleteThisFolder}>
            delete
          </span>
          <span class="material-symbols-outlined" onClick={openEditFolderModal}>
            edit
          </span>
          <button
            className="new-plaground-btn"
            onClick={openNewPlaygroundModal}
          >
            <span class="material-symbols-outlined">add</span>
            <span>New Playground</span>
          </button>
        </div>
      </div>
      <div className="all-cards">
        {data.files.map((card) => (
          <Card key={card.id} file={{ card, folderId: data.id }} />
        ))}
      </div>
    </div>
  );
}

export default Folder;
