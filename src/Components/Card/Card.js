import React, { useContext } from "react";
import { modalContext } from "../../Context/ModalContext/ModalProvider";
import { PlaygroundContext } from "../../Context/PlaygroundContext/PlaygroundProvider";
import { useNavigate } from "react-router-dom";

function Card({ file }) {
  const modalFeatures = useContext(modalContext);
  const { deleteFile } = useContext(PlaygroundContext);
  const navigate = useNavigate();

  function openEditCardModal(e) {
    e.stopPropagation(); 
    modalFeatures.setModalPayload({
      folderId: file.folderId,
      fileId: file.card.id,
    });
    modalFeatures.openModal("EDIT_FILE");
  }
  function deleteThisCard(e) {
    e.stopPropagation(); 

    deleteFile(file.folderId, file.card.id);
  }
  function goToPlaygroung() {
    navigate(`playground/${file.folderId}/${file.card.id}`);
  }
  return (
    <div className="card" onClick={goToPlaygroung}>
      <div className="card-items">
        <img alt="logo" src="logo.png" />
        <div className="card-title-language">
          <p>{file.card.title}</p>
          <p>language: {file.card.language}</p>
        </div>
      </div>
      <div className="card-btns">
        <span class="material-symbols-outlined" onClick={(e)=>deleteThisCard(e)}>
          delete
        </span>
        <span class="material-symbols-outlined" onClick={(e)=>openEditCardModal(e)}>
          edit
        </span>
      </div>
    </div>
  );
}

export default Card;
