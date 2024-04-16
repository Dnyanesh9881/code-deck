import React, { useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import EditorHeader from "./EditorHeader/EditorHeader";
import EditorFooter from "./EditorFooter/EditorFooter";
import { PlaygroundContext} from "../../Context/PlaygroundContext/PlaygroundProvider";
import Loading from "../../Components/Loading/Loading";

const EditorReact = ({ folderId, fileId, inputValue, isLoading, callBack, setIsFullScreen}) => {
  const [theme, setTheme] = useState("vs-dark");
  const {folders}=useContext(PlaygroundContext);
  let currentObj=null;
  for (let i = 0; i < folders.length; i++) {
   if(folderId===folders[i].id){
    currentObj=folders[i].files.filter(file=> file.id===fileId);
   }
  }
  const { title, language, code } =currentObj[0];
  const[currentTitle, setCurrentTitle]=useState(title);
  const[currentLanguage, setCurrentLanguage]=useState(language);
  const[currentCode, setCurrentCode]=useState(code);
   console.log(currentCode, currentLanguage, currentTitle);
  
  function onChangeCodeEditor(newCode) {
    setCurrentCode(newCode);
  }

  return (
    <div className="editor-container">
      <EditorHeader
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        currentTitle={currentTitle}
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        theme={theme}
        setTheme={setTheme}
        folderId={folderId}
        fileId={fileId}
      />
      <div className="editor">
        <Editor
          theme={theme}
          language={currentLanguage}
          value={currentCode}
          onChange={onChangeCodeEditor}
        />
      </div>
      <EditorFooter setCode={setCurrentCode} currentCode={currentCode} currentLanguage={currentLanguage} inputValue={inputValue} callBack={callBack} setIsFullScreen={setIsFullScreen}/>
   {
    isLoading && <Loading />
   }
    </div>
  );
};

export default EditorReact;
