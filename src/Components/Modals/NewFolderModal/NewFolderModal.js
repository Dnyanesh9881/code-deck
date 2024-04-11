import React, { useContext } from "react";
import "../CreateNewPlaygroundModal/style.scss"
import { modalContext } from "../../../Context/ModalContext/ModalProvider";
import { PlaygroundContext } from "../../../Context/PlaygroundContext/PlaygroundProvider";

function NewFolderModal() {
  const modalFeatures=useContext(modalContext);
  const {addFolder}=useContext(PlaygroundContext);
  function createNewFolder(e){
    e.preventDefault();
    const folderName=e.target.folderName.value;
     addFolder(folderName);
     modalFeatures.closeModal();
  }
  return (
    <div className="modal">
      <form className="inner-modal" onSubmit={createNewFolder}>
        <div className="item">
          <h2>Create New Folder</h2>
          <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
        </div>
        <div className="item" style={{gap:"1rem"}}>
          <input name="folderName" style={{ flex:"1"}}/>
          <button className="modal-btn">Create Folder</button>
        </div>
      </form>
    </div>
  );
}

export default NewFolderModal;
