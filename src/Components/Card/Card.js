import React, { useContext } from 'react'
import { modalContext } from '../../Context/ModalContext/ModalProvider'
import { PlaygroundContext } from '../../Context/PlaygroundContext/PlaygroundProvider';

function Card({file}) {
  const modalFeatures=useContext(modalContext);
  const {deleteFile}=useContext(PlaygroundContext);
   

 function openEditCardModal(){
  modalFeatures.setModalPayload({folderId:file.folderId, fileId:file.card.id})
 
  console.log(modalFeatures.modalPayload);
modalFeatures.openModal("EDIT_FILE");
 }
 function deleteThisCard(){
    deleteFile(file.folderId, file.card.id)
 }
  return (
    <div className="card">
    <div className="card-items">
        <img alt="logo" src="logo.png" />
        <div className="card-title-language">
            <p>{file.card.title}</p>
            <p>language: {file.card.language}</p>
        </div>
    </div>
    <div className="card-btns">
    <span class="material-symbols-outlined" onClick={deleteThisCard}>delete</span>
  <span class="material-symbols-outlined" onClick={openEditCardModal}>edit</span>
    </div>
</div>
  )
}

export default Card