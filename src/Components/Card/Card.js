import React, { useContext } from 'react'
import { modalContext } from '../../Context/ModalContext/ModalProvider'

function Card({file}) {
  const modalFeatures=useContext(modalContext);


 function openEditCardModal(){
modalFeatures.openModal("EDIT_FILE");
 }
  return (
    <div className="card">
    <div className="card-items">
        <img alt="logo" src="logo.png" />
        <div className="card-title-language">
            <p>{file.title}</p>
            <p>language: {file.language}</p>
        </div>
    </div>
    <div className="card-btns">
    <span class="material-symbols-outlined">delete</span>
  <span class="material-symbols-outlined" onClick={openEditCardModal}>edit</span>
    </div>
</div>
  )
}

export default Card