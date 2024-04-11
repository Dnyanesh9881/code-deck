import React, { useContext } from "react";
import "../CreateNewPlaygroundModal/style.scss"
import { modalContext } from "../../../Context/ModalContext/ModalProvider";
import { PlaygroundContext } from "../../../Context/PlaygroundContext/PlaygroundProvider";


function NewPlaygroundModal() {
  const modalFeatures=useContext(modalContext);
  const {addPlayground}=useContext(PlaygroundContext);
  function addNewFile(e){
    e.preventDefault();
    const fileName=e.target.fileName.value;
    const language=e.target.language.value;
   addPlayground( modalFeatures.modalPayload , fileName, language);
   modalFeatures.closeModal();
  }
  return (
    <div className="modal">
      <form className="inner-modal" onSubmit={addNewFile}>
        <div className="item">
          <h2>Create New Playground</h2>
          <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
        </div>
        <div className="item"  style={{ gap:"1rem"}}>
          <input name="fileName"  style={{ flex:"1"}}/>
          <select name="language">
            <option value="cpp">CPP</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="python">PYTHON</option>
            <option value="java">JAVA</option>
          </select>
        </div>
        <div className="item">
          <button className="modal-btn" type="submit" style={{flex:"1"}}>Create Playground</button>
        </div>
      </form>
    </div>
  );
}

export default NewPlaygroundModal;
