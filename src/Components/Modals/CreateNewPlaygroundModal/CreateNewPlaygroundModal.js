import React, { useContext } from 'react';
import "./style.scss"
import { modalContext } from '../../../Context/ModalContext/ModalProvider';

function CreateNewPlaygroundModal() {
  const modalFeatures=useContext(modalContext);


  return (
    <div className='modal'>
        <div className='inner-modal'>
        <div className='item'>
            <h2>Create New Playground & Create New Folder</h2>
          <span class="material-symbols-outlined" onClick={modalFeatures.closeModal}>close</span>
            
        </div>
        <div className='item'>
            <p>Enter Folder Name</p>
            <input name='folderName' />
        </div>
        <div className='item'>
            <p>Enter File Name</p>
            <input name='fileName' />
        </div>
        <div className='item'>
            <select name='language'>
                <option value="cpp">CPP</option>
                <option value="javascript">JAVASCRIPT</option>
                <option value="python">PYTHON</option>
                <option value="java">JAVA</option>
            </select>
            <button className='modal-btn'>
                 Create Playground
            </button>
        </div>
        </div>
    </div>
  )
}

export default CreateNewPlaygroundModal