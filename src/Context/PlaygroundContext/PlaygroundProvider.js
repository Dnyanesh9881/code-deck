import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();
const initialState = [
  {
    id: v4(),
    title: "DSA",
    files: [
      {
        id: v4(),
        title: "Stack Implementation",
        language: "cpp",
        code: `cout << "Hello World!";`,
      },
      {
        id: v4(),
        title: "Array Implementation",
        language: "java",
        code: `System.out.println("Hello World")`,
      },
    ],
  },
];
export const languageCodes = {
  java: `import java.util.*;

  public class Main {
      public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
  }`,
  cpp: `#include <iostream>
  using namespace std;
  
  int main() 
  {
      cout << "Hello, World!";
      return 0;
  }`,
  python: `print ("Hello, World!")`,
  javascript: `console.log("Hello, World!");`,
};
export const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      return data;
    }
    return initialState;
  });

  function addNewPlayground(folderName, fileName, language) {
    const newFolder = {
      id: v4(),
      title: folderName,
      files: [
        {
          id: v4(),
          title: fileName,
          language: language,
          code: languageCodes[language],
        },
      ],
    };
    const allFolders = [...folders, newFolder];
    setFolders(allFolders);
  }

  function addFolder(folderName) {
    const newFolder = {
      id: v4(),
      title: folderName,
      files: [],
    };
    const allFolders = [...folders, newFolder];
    setFolders(allFolders);
  }

  function addPlayground(folderId, fileName, language) {
    const foldersCopy = [...folders];

    for (let i = 0; i < foldersCopy.length; i++) {
      if (foldersCopy[i].id === folderId) {
        let newFile = {
          id: v4(),
          title: fileName,
          language: language,
          code: languageCodes[language],
        };
        foldersCopy[i].files.push(newFile);
        break;
      }
    }

    setFolders(foldersCopy);
  }

  function editFolder(folderId, folderName) {
    const foldersCopy = [...folders];

    for (let i = 0; i < foldersCopy.length; i++) {
      if (foldersCopy[i].id === folderId) {
        foldersCopy[i].title = folderName;
        break;
      }
    }
    setFolders(foldersCopy);
  }

  function editFile(folderId, fileId, fileName) {
    const foldersCopy = [...folders];

    for (let i = 0; i < foldersCopy.length; i++) {
      if (foldersCopy[i].id === folderId) {
        for (let j = 0; j < foldersCopy[i].files.length; j++) {
          if (foldersCopy[i].files[j].id === fileId) {
            foldersCopy[i].files[j].title = fileName;
            break;
          }
        }
        break;
      }
    }
    setFolders(foldersCopy);
  }

  function deleteFolder(folderId) {
    const newFolders = folders.filter((folder) => folder.id !== folderId);
    setFolders(newFolders);
  }

  function deleteFile(folderId, fileId) {
    // console.log(folderId, fileId);

    const foldersCopy = [...folders];

    for (let i = 0; i < foldersCopy.length; i++) {
      if (foldersCopy[i].id === folderId) {
        const newFiles = foldersCopy[i].files.filter(
          (file) => file.id !== fileId
        );

        foldersCopy[i].files = newFiles;

        // console.log(newFiles);
        break;
      }
    }

    setFolders(foldersCopy);
  }

 
function save(folderId, fileId, title, language, code){
      const foldersCopy = [...folders];
    for (let i = 0; i < foldersCopy.length; i++) {
      if (foldersCopy[i].id === folderId) {
        for (let j = 0; j < foldersCopy[i].files.length; j++) {
          if (foldersCopy[i].files[j].id === fileId) {
            foldersCopy[i].files[j].title=title;
            foldersCopy[i].files[j].language=language;
            foldersCopy[i].files[j].code=code
            break;
          }
        }
        break;
      }
    }
    setFolders(foldersCopy);
    }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, [folders]);

  return (
    <PlaygroundContext.Provider
      value={{
        folders,
        setFolders,
        addNewPlayground,
        addFolder,
        addPlayground,
        editFile,
        editFolder,
        deleteFile,
        deleteFolder,
        save
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
