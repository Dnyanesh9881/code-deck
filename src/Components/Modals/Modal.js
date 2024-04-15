import React, { useContext } from "react";
import { modalContext } from "../../Context/ModalContext/ModalProvider";
import CreateNewPlaygroundModal from "./CreateNewPlaygroundModal/CreateNewPlaygroundModal";
import NewFolderModal from "./NewFolderModal/NewFolderModal";
import NewPlaygroundModal from "./NewPlaygroundModal/NewPlaygroundModal";
import EditCard from "./EditCard/EditCard";
import EditFolder from "./EditFolder/EditFolder";

const Modal=()=>{
  const modalFeatures = useContext(modalContext);

  return (
    <>
      {modalFeatures.activeModal === "CREATE_NEW_PLAYGROUND" && (
        <CreateNewPlaygroundModal />
      )}
      {modalFeatures.activeModal === "CREATE_FOLDER" && <NewFolderModal />}
      {modalFeatures.activeModal === "NEW_PLAYGROUND" && <NewPlaygroundModal />}
      {modalFeatures.activeModal === "EDIT_FOLDER" && <EditFolder />}
      {modalFeatures.activeModal === "EDIT_FILE" && <EditCard />}
    </>
  );
}

export default Modal;
