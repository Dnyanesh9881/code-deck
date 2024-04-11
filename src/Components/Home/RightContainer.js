import React, {useContext} from "react";
import { PlaygroundContext }  from '../../Context/PlaygroundContext/PlaygroundProvider'
import Folder from "../Folder/Folder";
import { modalContext } from "../../Context/ModalContext/ModalProvider";


function RightContainer() {
     const{folders}=useContext(PlaygroundContext);
     const modalFeatures=useContext(modalContext);
    
function openNewFolderModal(){
    modalFeatures.openModal("CREATE_FOLDER")
}
  return (
    <div className="right-container">
      <div className="header">
        <h1>
          <span style={{ fontWeight: "400" }}>My</span> Playground
        </h1>
        <button className="add-new-folder-btn" onClick={openNewFolderModal}>
          <span class="material-symbols-outlined">add</span>
          <span>New Folder</span>
        </button>
      </div>
      <div className="all-folder-container">
        {
         folders.map(fold=><Folder key={fold.id} data={fold}/>)
        }
        
      </div>
    </div>
  );
}

export default RightContainer;
