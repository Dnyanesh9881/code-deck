import React from "react";

const EditorFooter = ({
  setCode,
  currentCode,
  currentLanguage,
  callBack,
  inputValue,
}) => {
  function importCode(e) {
    const file = e.target.files[0];
    const type = file.type.includes("text");
    console.log(type);
    if (type) {
      const filereader = new FileReader();
      filereader.readAsText(file);
      filereader.onload = function (value) {
        const importedCode = value.target.result;
        setCode(importedCode);
      };
    } else {
      alert("please choose a programming file");
    }
  }

  function exportCode() {
    const blob = new Blob([currentCode], { type: "text/plain" });
    console.log(blob);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "myfile.text";
    link.click();
  }
  const languageId = {
    cpp: "54",
    java: "91",
    javascript: "93",
    python: "92",
  };

  const url =
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "dde25e2f24msh211407031cc8c61p1fb51cjsnd45f8d7a6dc6",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    body: JSON.stringify({
      language_id: languageId[currentLanguage],
      source_code: btoa(currentCode),
      stdin: btoa(inputValue),
    }),
  };
  
  async function getToken() {
    try {
      callBack({
        apiStatus: "loading",
      });
      const response = await fetch(url, options);
      const result = await response.json();
      const token = result.token;
      let statusCode = 2;
      let apiSubmissionResult;
      while (statusCode === 2 || statusCode === 1) {
        try {
          apiSubmissionResult = await runCode(token);
          statusCode = apiSubmissionResult.status_id;
          console.log(apiSubmissionResult.status);
        } catch (error) {
          callBack({
            apiStatus: "error",
            message: JSON.stringify(error),
          });
          return;
        }
      }
      if (apiSubmissionResult)
        callBack({
          apiStatus: "success",
          data: apiSubmissionResult,
        });
      return;
    } catch (error) {
      callBack({
        apiStatus: "error",
        message: JSON.stringify(error),
      });
    }
  }

  async function runCode(token) {
    const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dde25e2f24msh211407031cc8c61p1fb51cjsnd45f8d7a6dc6",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      callBack({
        apiStatus: "error",
        message: JSON.stringify(error),
      });
    }
  }

  return (
    <div className="editor-footer">
      <button className="btn">
        <span class="material-symbols-outlined">fullscreen</span>
        <span>Full Screen</span>
      </button>
      <button className="btn">
        <span class="material-symbols-outlined">place_item</span>
        <label htmlFor="import_code">Import Code</label>
        <input
          id="import_code"
          type="file"
          style={{ display: "none" }}
          onChange={importCode}
        />
      </button>
      <button className="btn" onClick={exportCode}>
        <span class="material-symbols-outlined">ios_share</span>
        <span>Export Code</span>
      </button>
      <button className="btn run-code-btn" onClick={getToken}>
        <span class="material-symbols-outlined">play_arrow</span>
        <span>Run Code</span>
      </button>
    </div>
  );
};

export default EditorFooter;
