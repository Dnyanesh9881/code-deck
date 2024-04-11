import React, { useContext } from 'react'
import { modalContext } from '../../Context/ModalContext/ModalProvider';

function LeftContainer() {
  const modalFeatures=useContext(modalContext);

  function openCreateNewPlaygroundModal(){
    modalFeatures.openModal("CREATE_NEW_PLAYGROUND");
  }
  return (
    <div className="left-container">
    <div className="inner-left-container">
        <img src="logo.png" alt='logo'/>
        <h1>One Code</h1>
        <p style={{fontSize:"22px", fontWeight:"600", color:"#acacac"}}>Code.Compile.Debug</p>
        <button className="create-new-plaground-btn" onClick={openCreateNewPlaygroundModal}>
        <span class="material-symbols-outlined">add</span>
        <span style={{fontSize:"16px"}}>Create New Playground</span>
        </button>
    </div>
  </div>
  )
}

export default LeftContainer