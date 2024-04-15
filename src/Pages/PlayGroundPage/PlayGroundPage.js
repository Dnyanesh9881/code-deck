import React, { useState } from "react";
import "./playground.scss";
import InputOutput from "../../Components/InputOutput/InputOutput";
import EditorReact from "../../Components/EditorReact/EditorReact";
import { useParams } from "react-router-dom";

const PlayGroundPage = () => {
  const {folderId, fileId}=useParams();
  const[inputValue, setInputValue]=useState("");
  const[outputValue, setOutputValue]=useState("");
  const[isLoading, setIsLoading]=useState(false);
  const callBack=({apiStatus, data, message})=>{
      if(apiStatus==="loading"){
        setIsLoading(true);
      }else if(apiStatus==="error"){
        setOutputValue("something went wrong");
        setIsLoading(false);
      }else{
        if(data.status_id===3){
          setOutputValue(atob(data.stdout));
        setIsLoading(false);
        }else{
          setOutputValue(atob(data.stderr));
        setIsLoading(false);
        }
      }
  }
  return (
    <div className="playground-container">
      <div className="playground-header">
        <img width="70px" src="/logo.png" alt="logo" />
        <h1 className="logo-heading">One Code</h1>
      </div>
      <div className="playground-editor-container">
        <EditorReact folderId={folderId} fileId={fileId} inputValue={inputValue} isLoading={isLoading} callBack={callBack}/>
        <InputOutput inputValue={inputValue} outputValue={outputValue} setInputValue={setInputValue} setOutputValue={setOutputValue}  />
      </div>
    </div>
  );
};

export default PlayGroundPage;
