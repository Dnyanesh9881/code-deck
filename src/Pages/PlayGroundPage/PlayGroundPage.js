import React from "react";
import "./playground.scss";

const PlayGroundPage = () => {
  return (
    <div className="playground-container">
      <div className="playground-header">
        <img width="70px" src="/logo.png" alt="logo" />
        <h1 className="logo-heading">One Code</h1>
      </div>
      <div className="playground-editor-container">
        <div className="editor-container">
          <div className="editor-header">
            <div className="editor-header-items">
              <h2>stack implementation</h2>
              <div className="edit-save-btn">
                <span class="material-symbols-outlined">edit</span>
                <button className="save-code-btn">save code</button>
              </div>
            </div>
            <div className="editor-header-items">
              <select>
                <option value="cpp">cpp</option>
                <option value="javascript">javascript</option>
                <option value="python">python</option>
                <option value="java">java</option>
              </select>
              <select>
                <option value="vs-light">vs-light</option>
                <option value="vs-dark">vs-dark</option>
              </select>
            </div>
          </div>
          <div className="editor">editir</div>
          <div className="editor-footer">
            <button className="btn">
              <span class="material-symbols-outlined">fullscreen</span>
              <span>Full Screen</span>
            </button>
            <button className="btn">
              <span class="material-symbols-outlined">place_item</span>
              <span>Import Code</span>
            </button>
            <button className="btn">
              <span class="material-symbols-outlined">ios_share</span>
              <span>Export Code</span>
            </button>
            <button className="btn run-code-btn">
              <span class="material-symbols-outlined">play_arrow</span>
              <span>Run Code</span>
            </button>
          </div>
        </div>
        <div className="input-output-container">
          <div className="input-container">
            <div className="input-header">
                <h3>Input:</h3>
                <button className="input-output-btn">
              <span class="material-symbols-outlined">place_item</span>
              <span>Import</span>
            </button>
            </div>
            <textarea className="input-body"></textarea>
          </div>
          <div className="output-container">
            <div className="output-header">
            <h3>Output:</h3>
                <button className="input-output-btn">
                <span class="material-symbols-outlined">ios_share</span>
              <span>Export Code</span>
            </button>
            </div>
            <textarea readOnly className="output-body"></textarea >
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGroundPage;
