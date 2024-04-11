import React, { useContext } from 'react'
import "../CreateNewPlaygroundModal/style.scss";
import { modalContext } from '../../../Context/ModalContext/ModalProvider'

function EditCard() {
    const modalFeatures=useContext(modalContext);

  return (
    <div className="modal">
    <div className="inner-modal">
      <div className="item">
        <h2>Edit File Title</h2>
        <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
      </div>
      <div className="item" style={{gap:"1rem"}}>
        <input name="folderName" style={{ flex:"1"}}/>
        <button className="modal-btn">Update Title</button>
      </div>
    </div>
  </div>
  )
}

export default EditCard;