import React, { useContext } from 'react';
import "./style.scss"
import { modalContext } from '../../../Context/ModalContext/ModalProvider';
import { PlaygroundContext } from '../../../Context/PlaygroundContext/PlaygroundProvider';

function CreateNewPlaygroundModal() {
  const modalFeatures=useContext(modalContext);
  const {addNewPlayground}=useContext(PlaygroundContext);

function createNewPlayground(e){
  e.preventDefault();
  const folderName=e.target.folderName.value
  const fileName=e.target.fileName.value
  const language=e.target.language.value
  // console.log(folderName, fileName, language);
addNewPlayground(folderName, fileName, language)
modalFeatures.closeModal();
}
  return (
    <div className='modal'>
        <form className='inner-modal' onSubmit={createNewPlayground}>
        <div className='item'>
            <h2>Create New Playground & Create New Folder</h2>
          <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
            
        </div>
        <div className='item'>
            <p>Enter Folder Name</p>
            <input name='folderName' required/>
        </div>
        <div className='item'>
            <p>Enter File Name</p>
            <input name='fileName' required/>
        </div>
        <div className='item'>
            <select name='language' required>
                <option value="cpp">CPP</option>
                <option value="javascript">JAVASCRIPT</option>
                <option value="python">PYTHON</option>
                <option value="java">JAVA</option>
            </select>
            <button className='modal-btn' type='submit' >
                 Create Playground
            </button>
        </div>
        </form>
    </div>
  )
}

export default CreateNewPlaygroundModal