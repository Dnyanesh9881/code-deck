import React from "react";

const InputOutput = ({inputValue, outputValue, setInputValue, setOutputValue}) => {
 
  function importInput(e){
     const file=e.target.files[0];
     const type=file.type.includes("text");
     if(type){
           const filereader=new FileReader();
           filereader.readAsText(file);
           filereader.onload=function(value){
            const importValue=value.target.result;
            setInputValue(importValue)
           }
     }else{
      alert("please select an text file")
     }
  }

  function exportOutput(){
    if(!outputValue){
      alert("Output is empty");
      return;
    }
    const blob=new Blob([outputValue.trim()], {type:"text/plain"})
    const url=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.href=url;
    link.download="myoutput.text";
    link.click();
  }
  return (
    <div className="input-output-container">
      <div className="input-container">
        <div className="input-header">
          <h3>Input:</h3>
          <button className="input-output-btn">
            <span class="material-symbols-outlined">place_item</span>
            <label htmlFor="import_input">Import Code</label>
            <input id="import_input" type="file" style={{display:"none"}} onChange={importInput}/>
          </button>
        </div>
        <textarea className="input-body" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></textarea>
      </div>
      <div className="output-container">
        <div className="output-header">
          <h3>Output:</h3>
          <button className="input-output-btn" onClick={exportOutput}>
            <span class="material-symbols-outlined">ios_share</span>
            <span>Export Code</span>
          </button>
        </div>
        <textarea readOnly className="output-body" value={outputValue} onChange={(e)=>{setOutputValue(e.target.value)}} ></textarea>
      </div>
    </div>
  );
};

export default InputOutput;
