import React, { useContext } from "react";
import "../CreateNewPlaygroundModal/style.scss"
import { modalContext } from "../../../Context/ModalContext/ModalProvider";


function NewPlaygroundModal() {
  const modalFeatures=useContext(modalContext);

  return (
    <div className="modal">
      <div className="inner-modal">
        <div className="item">
          <h2>Create New Playground</h2>
          <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
        </div>
        <div className="item"  style={{ gap:"1rem"}}>
          <input name="folderName"  style={{ flex:"1"}}/>
          <select name="language">
            <option value="cpp">CPP</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="python">PYTHON</option>
            <option value="java">JAVA</option>
          </select>
        </div>
        <div className="item">
          <button className="modal-btn" style={{flex:"1"}}>Create Playground</button>
        </div>
      </div>
    </div>
  );
}

export default NewPlaygroundModal;
