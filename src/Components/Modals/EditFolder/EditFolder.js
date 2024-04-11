import React, { useContext } from 'react'
import "../CreateNewPlaygroundModal/style.scss";
import { modalContext } from '../../../Context/ModalContext/ModalProvider'
import { PlaygroundContext } from '../../../Context/PlaygroundContext/PlaygroundProvider';


const EditFolder=()=> {
    const modalFeatures=useContext(modalContext);
    const {editFolder}=useContext(PlaygroundContext);
function editThisFolder(e){
  e.preventDefault();
  const folderName=e.target.folderName.value
     editFolder(modalFeatures.modalPayload, folderName);
     modalFeatures.setModalPayload(null);
     modalFeatures.closeModal();
}
  return (
    <div className="modal">
    <form className="inner-modal" onSubmit={editThisFolder}>
      <div className="item">
        <h2>Edit Folder Title</h2>
        <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
      </div>
      <div className="item" style={{gap:"1rem"}}>
        <input name="folderName" style={{ flex:"1"}}/>
        <button className="modal-btn">Update Title</button>
      </div>
    </form>
  </div>
  )
}

export default EditFolder