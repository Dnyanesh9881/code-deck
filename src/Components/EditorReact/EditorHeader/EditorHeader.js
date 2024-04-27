import React, { useContext, useEffect} from 'react'
import { modalContext } from '../../../Context/ModalContext/ModalProvider';
import Modal from '../../Modals/Modal';
import { PlaygroundContext, languageCodes } from '../../../Context/PlaygroundContext/PlaygroundProvider';

const EditorHeader = ({currentLanguage, setCurrentLanguage, theme, setTheme, folderId, fileId, currentTitle, setCurrentCode, currentCode}) => {
    const modalFeatures=useContext(modalContext);
    const {save}=useContext(PlaygroundContext);
    function openEditCardModal(){
        modalFeatures.openModal("EDIT_FILE");
        modalFeatures.setModalPayload({
            folderId: folderId,
            fileId: fileId,
          });
        // console.log("click is working");
       }

       function saveCode(){
          save(folderId, fileId, currentTitle, currentLanguage, currentCode);
          // console.log(folderId, fileId, currentTitle, currentLanguage, currentCode);
       }
       function updateLanguage(e){
        setCurrentLanguage(e.target.value);
        setCurrentCode(languageCodes[e.target.value]);
       }
       
          
       
      
  return (
    <div className="editor-header">
        <div className="editor-header-items">
          <h2>{currentTitle}</h2>
          <div className="edit-save-btn">
            <span class="material-symbols-outlined" onClick={openEditCardModal}>edit</span>
            <button className="save-code-btn" onClick={saveCode}>save code</button>
          </div>
        </div>
        <div className="editor-header-items">
          <select value={currentLanguage} onChange={updateLanguage}>
            <option value="cpp">Cpp</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
          <select value={theme} onChange={(e)=>setTheme(e.target.value)}>
            <option value="vs-light">vs-light</option>
            <option value="vs-dark">vs-dark</option>
          </select>
        </div>
        <Modal />
      </div>
  )
}

export default EditorHeader